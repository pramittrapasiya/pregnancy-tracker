const express = require("express");
const {verifyUser} = require('../../middleware/verifyToken')
const userRoute = express.Router()

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

//      With Token
userRoute.use('/auth',authRoute)
userRoute.use('/blog',blogRoute)
userRoute.use('/todo',verifyUser,todoRoute)
userRoute.use('/appointment',verifyUser,appointmentRoute)
userRoute.use('/weight',verifyUser,weightRoute)
userRoute.use('/review',verifyUser,reviewRoute)
userRoute.use('/timeline',verifyUser,timelineRoute)

    //  Without Token
// userRoute.use('/auth',authRoute)
// userRoute.use('/blog',blogRoute)
// userRoute.use('/todo',todoRoute)
// userRoute.use('/appointment',appointmentRoute)
// userRoute.use('/weight',weightRoute)
// userRoute.use('/review',reviewRoute)
// userRoute.use('/timeline',timelineRoute)

module.exports = userRoute; 