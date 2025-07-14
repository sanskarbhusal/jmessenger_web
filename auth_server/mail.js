import nodemailer from "nodemailer";
import { getHtml } from "./EmailBody.js";
import dotenv from "dotenv"

dotenv().config()

// 🔐 Replace these with your actual test credentials
const ZOHO_EMAIL = "jmessenger@sanskarbhusal.com.np";
const ZOHO_APP_PASSWORD = "Wjju5Mt2E9dz";

// 📨 Change this to where you want the test email to go
const recipient = "sanskarbhusal123@gmail.com"; // or someone else

const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.zohoMail,
        pass: process.env.zohoPassword,
    },
});

const sendTestEmail = async () => {
    try {
        const info = await transporter.sendMail({
            from: ZOHO_EMAIL,
            to: recipient,
            subject: "Verify your JMessenger account",
            html: getHtml("sanskar")
        });

        console.log("✅ Email sent successfully!");
        console.log("📧 Message ID:", info.messageId);
    } catch (error) {
        console.error("❌ Failed to send email:");
        console.error(error);
    }
};

sendTestEmail();
