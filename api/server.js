const express = require("express");
const cors = require("cors");
const mysql = require('mysql');
require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const fs = require("fs");
 
const app = express();
 
app.use(cors());
// parse application/json
app.use(express.json());

attachment = fs.readFileSync('./Codes/qrcode1.png').toString("base64");
  
//create database connection
const conn = mysql.createConnection({
  host: '172.16.2.5',
  user: 'root',
  password: 'Password123!',
  database: 'userInfo',
  port: 3306
});
 
//connect to database
conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
 
//add new user
app.post('/register',(req, res) => {
  const name = req.body.name
  const email = req.body.email
  const password = req.body.password
  
  conn.query("INSERT INTO userInfo (FullName, Email, Password) VALUES (?,?,?)",
  [name, email, password],
  (err, result) => {
    console.log(err);
  })

});

//login user
app.post('/login',(req, res) => {
  const email = req.body.email
  const password = req.body.password
  
  conn.query("SELECT * FROM userInfo WHERE Email = ? AND Password = ?",
  [email, password],
  (err, result) => {
    if(err){
      res.send({err});
    } else{
      if(result.length > 0){
        const msg = {
          to: email,
          from: 'awbaseniorprojectemail@gmail.com', 
          subject: 'AWBA Authentication',
          text: 'Scan the QR Code below to complete account verification.',
          attachments: [
            {
              content: attachment,
              filename: "qrcode1.png",
              type: "application/png",
              disposition: "attachment"
            }
          ]
        };
        sgMail
          .send(msg)
          .then(() => {}, error => {
            console.error(error);
        
            if (error.response) {
              console.error(error.response.body)
            }
          });
        res.send(result);
      } else{
        res.send({message: "Wrong Email/Password. Try again!"})
      }
    }
  })
});
 
app.listen(3001, () => {
  console.log("Server running successfully on 3001");
});
