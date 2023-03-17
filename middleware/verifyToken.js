const jwt = require("jsonwebtoken");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../config/.env") });
const { response } = require("./response");
const { decrypt } = require("../helper/encrypt-decrypt");
const bcryptjs = require("bcryptjs");

function verifyUser(req, res, next) {
   try {
      let token = req.headers["authorization"];
      if (!token) {
         response("Token is Missing..!!", {}, 403, res);
      } else {
         jwt.verify(token,process.env.SECRET_KEY,(err,payload)=>{
            if (err) {
               response("Invalid Token..!!", {}, 403, res);
            } else {
               // console.log("user_id----> ",payload.user_id);
               // console.log("email----> ",payload.email);
               next()
            }
         })
      }
   } catch (error) {
      response("Verify Token Catch Error..", error, 500, res)
   }
}


module.exports = { verifyUser }