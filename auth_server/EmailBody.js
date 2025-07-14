function getHtml(userName, otp) {
    return (
        `
<h2>Hi, @${userName}</h2>
<p>This is your OTP for verifying your JMessenger account.</p>
<h3><strong>${otp}</strong></h3>
<p>Please do not share this code with anyone.</p>
<p>If you didn't request this, you can safely ignore this email.</p>
<br><br><br>
<p>Thank you</p>
<p>JMessenger Team</p>
<p>
    <a href="https://chat.sanskarbhusal.com.np">chat.sanskarbhusal.com.np</a>
</p>

<img src="https://jm-logo.sanskarbhusal.com.np/logo-transparent.png" alt="JMessenger Logo" />
     `
    )
}

export { getHtml }