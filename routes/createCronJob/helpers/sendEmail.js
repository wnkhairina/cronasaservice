const nodemailer = require("nodemailer");

//create email transporter
const sendEmail = (email, failedAt) => {
    
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        requireTLS: true,
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });


    let mailOptions = {
        from: "wnkhairina@gmail.com",
        to: `${email}`,
        subject: 'Ping Failure',
        text: `Hi, this email is sent automatically to notify the ping failure at ${failedAt}`

    };

    transporter.sendMail(mailOptions, function (err, info) {

        if (err) {
            return console.log(err.message);
        }
        else {
            console.log(`Email successfully sent to ${email}!`);
        }
    })
}

module.exports = sendEmail