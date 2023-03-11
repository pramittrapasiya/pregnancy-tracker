const express = require("express");
const adminRouter = express.Router()
const authAdmin=require('../admin/auth.js')
const blogAdmin=require('../admin/blog.js')
// const authUser = require('../../controller/user/auth.contoller')


adminRouter.get("/", (req , res)=>{
    res.send({message : "Auth Admin Main File Is Working..."})
});

adminRouter.use('/auth',authAdmin)
adminRouter.use('/blog',blogAdmin)


module.exports = adminRouter; 