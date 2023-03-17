const express = require('express')
const reviewRoute = express.Router()
const reviewController = require('../../controller/user/review');


reviewRoute.get('/',(req,res)=>{
    res.send({status: 200, message: "Review route is working"})
})

reviewRoute.post("/addReview",reviewController.add);
// reviewRoute.get("/getWeight",reviewController.getData);

module.exports = reviewRoute;