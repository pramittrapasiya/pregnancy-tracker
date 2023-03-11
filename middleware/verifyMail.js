const express = require("express");
const verifyMail = express.Router()
const registerModel = require('../model/registration')

//Mail Verification By Id
verifyMail.get('/:id', async(req, res)=>{
    const {id} = req.params;
    // console.log('id----: ',id);
    const new_id = id.substring(3)
    console.log(new_id);
      try {
          const verify = await registerModel.updateOne({ _id: new_id }, { $set: { is_verify: 1 } });
          console.log(verify);
          if (verify) {
            res.send("Email Verify successfully");
          } else {
            res.send("Email verification failed, possibly the link is invalid or expired");
          }
          // return response("Email Verified..!!", 200, res);
  
      } catch (error) {
          console.log("Verify Mail Catch Error..", error);
      }
  });

  module.exports = verifyMail;