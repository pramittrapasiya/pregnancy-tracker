const { response } = require("./response");
const userModel = require("../model/registration");

exports.userEmailCheck = async(req, res, next)=>{
    try {
        let isEmail = await userModel.findOne({email : req.body.email});
        if(isEmail) response("Email Is already Exist!!",{},404,res);
        else next();
    } catch (error) {
        response("Validation Catch Error..!!", error, 500, res);
    }
};