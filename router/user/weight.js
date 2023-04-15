const express = require("express");
const weightRoute = express.Router();
const weightController = require('../../controller/user/weight');

weightRoute.get('/',(req,res)=>{
    res.send({status: 200, message: "Weight route is working"})
})

weightRoute.post("/addWeight",weightController.add);
weightRoute.get("/getWeight/:id",weightController.getData);

module.exports = weightRoute;