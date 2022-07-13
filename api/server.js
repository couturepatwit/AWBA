const express = require("express");
const cors = require("cors");
const mysql = require('mysql');
const email = require("@sendgrid/mail")
require('dotenv').config();
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
 
const app = express();
 
app.use(cors());
// parse application/json
app.use(express.json());
  
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

app.post('/login',(req, res) => {
  const email = req.body.email
  const password = req.body.password
  
  conn.query("SELECT * FROM userInfo WHERE username = ? AND password = ?",
  [email, password],
  (err, result) => {
    if(err){
      res.send({err});
    } else{
      if(result.length > 0){
        res.send(result);
        const msg = {
          to: 'paulcouture33@gmail.com',
          from: 'awbaseniorprojectemail@gmail.com', 
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
      } else{
        res.send({message: "Wrong Email/Password. Try again!"})
      }
    }
  })
});
 
app.listen(3001, () => {
  console.log("Server running successfully on 3001");
});
