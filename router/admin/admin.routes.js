const express = require("express");
const adminRouter = express.Router()
const authAdmin=require('../admin/auth.js')
const blogAdmin=require('../admin/blog.js')
const reviewAdmin=require('../admin/review')
const timelineAdmin=require('../admin/timeline')
// const authUser = require('../../controller/user/auth.contoller')


adminRouter.get("/", (req , res)=>{
    res.send({message : "Route Admin Main File Is Working..."})
});

adminRouter.use('/auth',authAdmin)
adminRouter.use('/blog',blogAdmin)
adminRouter.use('/review',reviewAdmin)
adminRouter.use('/timeline',timelineAdmin)


module.exports = adminRouter; 