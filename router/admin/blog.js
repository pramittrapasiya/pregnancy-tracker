const express = require("express")
const blogRoute = express.Router()
const blogController = require("../../controller/admin/blog")
const { upload } = require('./../../middleware/upload')
// const location = require('./../../upload/')


blogRoute.get('/', (req, res) => {
    res.send({ status: 200, message: "Admin Blog route is working" });
})

// blogRoute.post("/addBlog",blogController.blog);
blogRoute.post("/addBlog",upload.single("image"),blogController.blog);



module.exports = blogRoute;