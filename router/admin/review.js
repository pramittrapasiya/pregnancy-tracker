const reviewController = require('../../controller/admin/review')
const { Router } = require("express");
const reviewRoute = Router();

reviewRoute.get("/", (req , res)=>{
    res.send({message : "Review Admin File Is Working..."})
});
reviewRoute.get("/getReview", reviewController.review);

module.exports = reviewRoute