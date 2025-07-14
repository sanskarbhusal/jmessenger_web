import nodemailer from "nodemailer"
import dotenv from "dotenv"
import { getHtml } from "./EmailBody.js"

dotenv.config()

const user = process.env.zohoMail
const pass = process.env.zohoPassword
const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
        user: user,
        pass: pass
    }
})

const info = await (async () => {
    try {
        await transporter.sendMail({
            from: 'jmessenger@sanskarbhusal.com.np',
            to: "sanskarbhusal123@gmail.com",
            subject: "Verify your JMessenger account",
            html: getHtml("sanskar", 63488)
        })
    } catch (err) {
        console.log(err)
    }
})()

console.log(info)