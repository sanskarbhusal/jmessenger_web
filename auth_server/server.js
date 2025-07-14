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
app.use(express.text())
app.use(express.json())
app.use(cookieParser())


//global registration request pool (array of objects)
let registrationRequests = []

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
            subject: "Verify your JMessenger Account",
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
            const otp_session_id = uuidv4()
            const otp = Math.floor(Math.random() * 1000000)
            const registrationRequest = { email, userName, password, otp, otp_session_id }
            const otpMail = await sendOtp(userName, otp, email)
            if (otpMail.isSent) {
                registrationRequests.push(registrationRequest)
                //202 means request accepted
                res.status(202)
                    .cookie("otpSessionId", otp_session_id, {
                        httpOnly: true,
                        sameSite: "strict",
                        maxAge: 300000,
                        secure: true
                    })
                    .send("Server has sent the otp.\nServer is expecting client to go on route 'otp-new-account'")
            }
        } else {
            res.status(200).send()
            console.log(`Server has rejected '${userName}' as it's already taken.`)
        }
    }
})

app.post("/otp-new-account", () => {

})

app.listen(port, () => {
    console.log("*** Listening on port: ", port)
})