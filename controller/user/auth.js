const authService = require("../../service/user/auth")
const loginService = require("../../service/user/login")
const {response} = require("../../middleware/response");

exports.register = async(req, res)=>{
    try{ 
        let resp = await authService.register(req.body);
        if (resp) {
            return response("SUCCESS..!!", resp.data, 200, res);
        } else {
            return response("Something went wrong!!", {}, 500, res);
        }
    } catch(err){
        console.log("err...",err);
        // return response(err.message,res)
    }
}

exports.login = async(req,res) =>{
    try {
        let resp = await authService.login(req.body);
        // let resp = await authService.login(req.body);
        if (resp) {
            return response("Login Successfully..!!", resp.data, 200, res);
        } else {
            return response("Something went wrong!!", {}, 500, res);
        }
    } catch(err){
        console.log("err...",err);
        // return response(err.message,res)
    }
}

