const blogService = require('../../service/admin/blog')
const {response} = require('../../middleware/response');
const express = require("express")
const blogController = express.Router()

blogController.get('/', (req, res) => {
    res.send({ status: 200, message: "Controller - Admin - Blog is working" });
})



exports.blog = async(req,res)=>{
    try {
        let resp = await blogService.addblog(req.body);
        if (resp) {
            return response("SUCCESS..!!", resp.data, 200, res);
        } else {
            return response("Something went wrong!!", {}, 500, res);
        }
    } catch (error) {
        console.log("Controller - Admin - Blog - Error : ",error);
    }
}