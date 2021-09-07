const express = require('express');
const nodemailer = require('nodemailer')
const app = express();


function send_email() {
    var transporter = nodemailer.createTransport({
        host: "smtp-mail.outlook.com",
        secureConnection: false,
        port: 587,
        tls: {
            ciphers: 'SSLv3'
        },
        auth: {
            user: 'support@centum.co.ke',
            pass: 'klhtyfvndwghkdcr'
        }
    });

    var mailOptions = {
        from: 'support@centum.co.ke',
        to: ['evans.njogu01@gmail.com', 'njoguem9@gmail.com', 'support@centum.co.ke'],
        subject: 'Precision & Revenue Stadia Files & Database Backup.',
        text: "Hello, kindly find the attached backup data. " + new Date(),
        attachments: [{
            filename: 'Data_Backup.zip',
            path: '/var/www/html/files_db_backup/backup_data.zip'
        }]
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log(info)
            

        }
    });
}

setInterval(() => {
    let date = new Date();
    let mins = date.getMinutes();
    if (mins === 20) {
        send_email();
    }
}, 60000)

app.listen(1515, () => {
    console.log('app is running on port 1515.')
})