const express = require("express");
const userRoute = express.Router()
const authRoute = require('../user/auth')
const blogRoute = require('../user/blog')
const todoRoute = require('../user/todo')
const appointmentRoute = require('../user/appointment')
const weightRoute = require('../user/weight')

userRoute.get("/", (req , res)=>{
    res.send({message : "Auth User Main File Is Working..."})
});
userRoute.use('/auth',authRoute)
userRoute.use('/blog',blogRoute)
userRoute.use('/todo',todoRoute)
userRoute.use('/appointment',appointmentRoute)
userRoute.use('/weight',weightRoute)


module.exports = userRoute; 