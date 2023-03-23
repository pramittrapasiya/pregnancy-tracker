const express = require('express')
const timelineRoute = express.Router()
const timelineController = require('../../controller/user/timeline');


timelineRoute.get('/',(req,res)=>{
    res.send({status: 200, message: "Timeline route is working"})
})

timelineRoute.get("/getTimeline",timelineController.timeline);

module.exports = timelineRoute;