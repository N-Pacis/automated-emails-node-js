const nodemailer = require("nodemailer")

exports.sendEmail = async(to,subject,text)=>{
    let transporter = nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        secure:true,
        service:"gmail",
        auth:{
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASSWORD
        }
    })

    let mailOptions = {
        from: process.env.EMAIL_USER,
        to: to,
        subject: subject,
        text: text
    }
    try{
        await transporter.sendMail(mailOptions)
        return "success"
    }
    catch(ex){
        console.log(ex)
        return "failure";
    }
}
