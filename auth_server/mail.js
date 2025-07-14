import nodemailer from "nodemailer";

// 🔐 Replace these with your actual test credentials
const ZOHO_EMAIL = "jmessenger@sanskarbhusal.com.np";
const ZOHO_APP_PASSWORD = "3vz68j3kYzm5";

// 📨 Change this to where you want the test email to go
const recipient = "sanskarbhusal123@gmail.com"; // or someone else

const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
        user: ZOHO_EMAIL,
        pass: ZOHO_APP_PASSWORD,
    },
});

const sendTestEmail = async () => {
    try {
        const info = await transporter.sendMail({
            from: ZOHO_EMAIL,
            to: recipient,
            subject: "Lottery",
            text: "Body text 123",
        });

        console.log("✅ Email sent successfully!");
        console.log("📧 Message ID:", info.messageId);
    } catch (error) {
        console.error("❌ Failed to send email:");
        console.error(error);
    }
};

sendTestEmail();
