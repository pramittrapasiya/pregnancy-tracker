const reviewService = require('../../service/admin/review')
const {response} = require('../../middleware/response');
const express = require("express")
const reviewController = express.Router()

reviewController.get('/', (req, res) => {
    res.send({ status: 200, message: "Controller - Admin - Review is working" });
})

exports.review = async(req,res)=>{
    try {
        let resp = await reviewService.getReview(req.body);
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