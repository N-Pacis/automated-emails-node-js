const express = require("express")
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });
const cron = require("node-cron")
const app = express()
const PORT = process.env.PORT;
const { sendEmail } = require("./emailConfig");

const users = ['pacisprogramming@gmail.com','pacisnkubito@gmail.com']

cron.schedule('0 8 * * 1',function(){
    console.log("-- RUNNING THE SCHEDULED CRON JOB --")
    users.map(async(user)=>{
        let subject = "Automated email"
        let text = "This is an automated text sent using node-cron"
        let checkSendEmail = await sendEmail(user, subject, text)
        if(checkSendEmail == 'success'){
            console.log(`Email sent successfully to ${user}`)
        }
        else{
            console.log(`Email was not sent to ${user}`)
        }
    })
})

app.listen(PORT,()=>{
    console.log(`Running on port ${PORT}`)
})