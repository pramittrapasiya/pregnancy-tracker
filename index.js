const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require("cors");
const path = require('path');
const v1 = require('./router/v1')
const verify = require('./middleware/verifyMail')
const ngrok = require('ngrok');
const fileupload = require('express-fileupload')
require("dotenv").config({ path: path.join(__dirname, "./config/.env") });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req , res)=>{
    res.send({message : "Index File Is Working..."})
});

mongoose.set('strictQuery', false);

app.use("/v1", v1);
app.use("/verify", verify);
app.use(fileupload({
  useTempFiles : true
}))

mongoose.connect(process.env.MONGODB_URL, async (err, result) => {
    if (err) {
      console.log("Mongodb Connection Error : ", err);
    } else {
      app.listen(process.env.PORT || 2001, () => {
        console.log("--->> Server Started At : ", process.env.PORT || 2001);
      });
    }
  });
