import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import nodemailer from "nodemailer"
import dotenv from "dotenv"
import { v4 as uuidv4 } from "uuid"
import { query, collection } from "./database.js"
import { getHtml } from "./EmailBody.js"

// import bcrypt from "bcrypt"

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
        isAccountFound = await collection.findOne({ _id: userName })
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
            // const otpMail = await sendOtp(userName, otp, email)
            const isSent = true
            if (isSent) {
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
                    .send("Server has sent the otp:" + otp)
            }
        } else {
            res.status(200).send()
            console.log(`Server has rejected '${userName}' as it's already taken.`)
        }
    }
})

app.post("/otp-new-account", (req, res) => {
    const cookies = req.cookies
    if (Object.getPrototypeOf(cookies) == null) {
        console.log("No cookies found. Resend otp")
        res.status(200).send("OTP expired")
    } else {
        const sessionIdFromClient = req.cookies.otpSessionId
        const otpFromClient = req.body.otp
        if (otpSessions.includes(sessionIdFromClient)) {
            let found = registrationRequests.find((item) => sessionIdFromClient == item.otpSessionId && item.otp == otpFromClient)
            console.log(found)
            if (found != undefined) {
                console.log("OTP verified")
            } else { console.log("OTP not valid") }
        } else {
            res.status(400).send("Invalid session ID.")
        }
    }
})

app.listen(port, () => {
    console.log("*** Listening on port: ", port)
})