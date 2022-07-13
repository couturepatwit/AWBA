require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const QRCodeSVG = require('qrcode.react');;
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'paulcouture33@gmail.com',
  from: 'awbaseniorproject@gmail.com', 
  subject: 'Test Email',
  text: 'QR Code below',
  html: '<QRCodeSVG value = "https://reactjs.org" />',
};
sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });