const express = require("express");
const userRoute = express.Router()
const {verifyUser} = require('../../middleware/verifyToken')
const authRoute = require('../user/auth')
const blogRoute = require('../user/blog')
const todoRoute = require('../user/todo')
const appointmentRoute = require('../user/appointment')
const weightRoute = require('../user/weight')
const reviewRoute = require('../user/review')
const timelineRoute = require('../user/timeline')

userRoute.get("/", (req , res)=>{
    res.send({message : "Route User Main File Is Working..."})
});
userRoute.use('/auth',authRoute)
userRoute.use('/blog',verifyUser,blogRoute)
userRoute.use('/todo',verifyUser,todoRoute)
userRoute.use('/appointment',verifyUser,appointmentRoute)
userRoute.use('/weight',verifyUser,weightRoute)
userRoute.use('/review',verifyUser,reviewRoute)
userRoute.use('/timeline',verifyUser,timelineRoute)


module.exports = userRoute; 