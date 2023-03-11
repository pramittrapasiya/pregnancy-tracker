const jwt = require("jsonwebtoken");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../config/.env") });
const { response } = require("./response");

function verifyUser(req, res, next) {
 try {
       const verifyToken = await jwt.verify(token, process.env.SECRET_KEY)
       if(!verifyToken) response("Token is Invalid..!!",{},404,res);
        else next();
 } catch (error) {
    response("Verify Token Catch Error..",error,500,res)
 }}