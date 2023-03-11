const express = require("express");
const mailRoute = express.Router();
const verifyMailController = require('../controller/verifyMail');


mailRoute.get('/',(req,res)=>{
    res.send({status: 200, message: "verify Mail route is working"})
})

mailRoute.post("/mail",verifyMailController.verify);

module.exports = mailRoute;