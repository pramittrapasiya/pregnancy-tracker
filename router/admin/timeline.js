const express = require('express')
const timelineRoute = express.Router()
const timelineController = require('../../controller/admin/timeline');


timelineRoute.get('/',(req,res)=>{
    res.send({status: 200, message: "Timeline Admin route is working"})
})

timelineRoute.post("/addTimeline",timelineController.add);
// timelineRoute.get("/getWeight",reviewController.getData);

module.exports = timelineRoute;