const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require("cors");
const path = require('path');
const multer = require("multer");
const v1 = require('./router/v1')
const verify = require('./middleware/verifyMail')
const jwt = require('jsonwebtoken');
const ngrok = require('ngrok');
require("dotenv").config({ path: path.join(__dirname, "./config/.env") });
const registerModel = require('./model/registration')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req , res)=>{
    res.send({message : "Index File Is Working..."})
});

mongoose.set('strictQuery', false);

app.use("/v1", v1);
app.use("/verify", verify);

mongoose.connect(process.env.MONGODB_URL, async (err, result) => {
    if (err) {
      console.log("Mongodb Connection Error : ", err);
    } else {
      app.listen(process.env.PORT || 2001, () => {
        console.log("--->> Server Started At : ", process.env.PORT || 2001);
      });
      ngrok.connect(process.env.PORT , function (err, url) {
        console.log(`Node.js local server is publicly-accessible at ${url}`);
    });
    }
  });
