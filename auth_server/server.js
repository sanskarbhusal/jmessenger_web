import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import nodemailer from "nodemailer"
import dotenv from "dotenv"
import { v4 as uuidv4 } from "uuid"
import { query, registrationCollection, loginSessionCollection } from "./database.js"
import { getHtml } from "./EmailBody.js"
import bcrypt from "bcrypt"

dotenv.config()

const app = express()
const port = 3000
const corsOption = {
    origin: process.env.allowedOrigin,
    credentials: true,
    optionsSuccessStatus: 200 //some legacy browsers (IE11, various SmartTVs) choke on 204
}

/* using the middlewares. The text and json middleware are required to  parse
the html body as text and as json respectively and the cookieParser 
middleware to parse the cookie into js object
*/

app.use(cors(corsOption))
// app.use(express.text())
app.use(express.json())
app.use(cookieParser())


//global registration request pool (array of objects)
let registrationRequests = []
let otpSessions = []
let loginSessions

async function sendOtp(userName, otp, email) {
    const transporter = nodemailer.createTransport({
        host: "smtp.zoho.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.zohoMail,
            pass: process.env.zohoPassword
        }
    })

    let info
    try {
        info = await transporter.sendMail({
            from: 'jmessenger@sanskarbhusal.com.np',
            to: email,
            subject: "Verify your JMessenger Account ",
            html: getHtml(userName, otp)
        })
        return { info, isSent: true }
    } catch (err) {
        console.log("nodemailer error")
        console.log(err)
        return { info, isSent: false }
    }
}

app.post("/register", async (req, res) => {
    const { email, userName, password } = req.body

    let isAccountFound
    let status

    status = await query.performSingle(async () => {
        isAccountFound = await registrationCollection.findOne({ _id: userName })
    })

    if (status == 500) {
        res.status(500).send("Issue on server side database. Wish for the developer to notice it and then fix it.")
        console.log("Some error in performSingle() query")
    }
    else {
        if (isAccountFound == null) {
            console.log("Requested username is available")
            const otpSessionId = uuidv4()
            const otp = Math.floor(Math.random() * 1000000)
            const registrationRequest = { email, userName, password, otp, otpSessionId }
            const otpMail = await sendOtp(userName, otp, email)
            if (otpMail.isSent) {
                registrationRequests.push(registrationRequest)
                otpSessions.push(otpSessionId)
                //202 means request accepted
                res.status(202)
                    .cookie("otpSessionId", otpSessionId, {
                        httpOnly: true,
                        sameSite: "none",
                        maxAge: 120000,
                        secure: true
                    })
                    .send("OTP sent to: " + email)
            }
        } else {
            res.status(200).send("Requested username is not available")
            console.log(`Server has rejected '${userName}' as it's already taken.`)
        }
    }
})

app.post("/verify-otp", async (req, res) => {
    const cookies = req.cookies
    if (Object.getPrototypeOf(cookies) == null) {
        res.status(200).send("OTP Session expired")
    } else {
        const sessionIdFromClient = req.cookies.otpSessionId
        const otpFromClient = req.body.otp
        if (otpSessions.includes(sessionIdFromClient)) {
            let found = registrationRequests.find((item) => sessionIdFromClient == item.otpSessionId && item.otp == otpFromClient)
            let hashedPassword

            if (found != undefined) {
                try {
                    const salt = await bcrypt.genSalt()
                    hashedPassword = await bcrypt.hash(found.password, salt)
                } catch (err) {
                    console.log("cryptography failed.")
                    console.log(err)
                    res.status(500).send("Failed to perform cryptographic operation.")
                    return
                }

                const queryStatus = await query.performSingle(async () => {
                    await registrationCollection.insertOne({ _id: found.userName, email: found.email, password: hashedPassword, timestamp: new Date(), timestamp: new Date().toISOString() })
                })

                if (queryStatus == "200") {
                    console.log(`Account registered under username '${found.userName}', email'${found.email}`)
                    res.status(201).send("OTP verified")
                } else if (queryStatus == "500") {
                    res.status(500).send("Database went to depression :(")
                } else {
                    res.status(500).send("If this message appears, probably the server went rogue.")
                }
            } else {
                res.status(200).send("Incorrect OTP")
            }
        } else {
            res.status(400).send("OTP session expired")
        }
    }
})

app.post("/passwordLogin", async (req, res) => {
    const { userName, password } = req.body

    let queryResult
    const queryStatus = await query.performSingle(async () => {
        queryResult = await registrationCollection.findOne({ _id: userName })
    })
    if (queryStatus == "200") {
        if (queryResult != null) {
            const passwordDidMatch = await bcrypt.compare(password, queryResult.password)
            if (passwordDidMatch) {
                const loginSessionId = uuidv4()
                const queryResult2 = await query.performSingle(async () => {
                    await loginSessionCollection.deleteOne({ _id: userName })
                    await loginSessionCollection.insertOne({ _id: userName, loginSessionId })
                })
                if (queryResult2 == 200) {
                    res.status(200)
                        .cookie("loginSessionId", loginSessionId, {
                            secure: true,
                            maxAge: 2592000,
                            sameSite: "none"
                        })
                        .cookie("userName", userName, {
                            secure: true,
                            sameSite: "none"
                        })
                        .send("Login Successfull")
                } else {
                    res.status(500).send("Database is depressed :(")
                }
            } else {
                //403: authentic user not authorized to login due to wrong password
                res.status(403).send("Password didn't match.")
            }
        } else {
            //401 means unauthorized
            res.status(401).send("Username is not found.")
        }
    } else if (queryStatus == "500") {
        res.status(500).send("Database is depressed :(")
    }
})

app.post("/sessionLogin", async (req, res) => {
    const userName = req.body.userName
    const loginSessionIdFromClient = req.body.loginSessionId
    let queryResult
    const queryStatus = await query.performSingle(async () => {
        queryResult = await loginSessionCollection.findOne({
            _id: userName,
            loginSessionId: loginSessionIdFromClient
        })
    })

    switch (queryStatus) {
        case "200":
            if (queryResult != null) {
                res.status(200).send("Session valid.")
            } else {
                //401: Needs authentication
                res.status(401).send("Session invalid")
            }
            break;
        case "500":
            res.status(500).send("Database is depressed :(")
            break;
    }
})

app.listen(port, () => {
    console.log("*** Listening on port: ", port)
})