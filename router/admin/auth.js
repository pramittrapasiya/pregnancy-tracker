const authController = require('../../controller/admin/auth.js')
const { Router } = require("express");
const authRoute = Router();

authRoute.get("/", (req , res)=>{
    res.send({message : "Auth Admin File Is Working..."})
});
authRoute.get("/", authController);

module.exports = authRoute