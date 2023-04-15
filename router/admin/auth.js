const authController = require('../../controller/admin/auth.js')
const { Router } = require("express");
const authRoute = Router();

authRoute.get("/", (req , res)=>{
    res.send({message : "Auth Admin File Is Working..."})
});
authRoute.post("/login", authController.login);
authRoute.get("/getDetails", authController.getDetails);

module.exports = authRoute