const express = require("express")
const blogRoute = express.Router()
const blogController = require("../../controller/user/blog.js")

blogRoute.get('/', (req, res) => {
    res.send({ status: 200, message: "Blog route is working" });
})

blogRoute.get("/findData", blogController.blog)


module.exports = blogRoute;