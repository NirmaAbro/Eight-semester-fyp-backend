const nodemailer = require("nodemailer")
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'your_email@gmail.com',
        pass: 'your_email_password',
    },
});

async function sendOTPEmail(email, otp) {
    const mailOptions = {
        from: 'your_email@gmail.com',
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP is: ${otp}. It will expire in 10 minutes.`,
    };

    await transporter.sendMail(mailOptions);
}



function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}


module.exports = {
    generateOTP,
    sendOTPEmail
}