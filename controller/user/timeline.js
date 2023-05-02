const timelineService = require('../../service/user/timeline')
const {response} = require('../../middleware/response');
    const express = require("express")
const timelineController = express.Router()

timelineController.get('/', (req, res) => {
    res.send({ status: 200, message: "Controller - User - Timeline is working" });
})

exports.timeline = async(req,res)=>{
    try {
        let resp = await timelineService.getTimeline(req.body);
        if (resp) {
            return response("SUCCESS..!!", resp.data, 200, res);
        } else {
            return response("Something went wrong!!", {}, 500, res);
        }
    } catch (err) {
        // console.log("Controller - Admin - Review - Error : ",error);
        return response(err.message, {}, err.status, res);
    }
}