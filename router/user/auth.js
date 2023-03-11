const express = require("express")
const authRoute = express.Router()
const authController = require("../../controller/user/auth.js")
const { userEmailCheck } = require("../../middleware/validation");

authRoute.get('/', (req, res) => {
    res.send({ status: 200, message: "Auth route is working" });
})

authRoute.post("/register", userEmailCheck,authController.register)
authRoute.post("/login", authController.login)


module.exports = authRoute;