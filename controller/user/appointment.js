const appointmentService = require("../../service/user/appointment.js")
const {response} = require("../../middleware/response");

exports.add = async (req,res)=>{
    try {
        let resp = await appointmentService.add(req.body);
        if (resp) {
            return response("SUCCESS..!!", resp.data, 200, res);
        } else {
            return response("Something went wrong!!", {}, 500, res);
        }


    } catch (error) {
        console.log(error);
    }
}

exports.getData = async (req,res)=>{
    try {
        let resp = await appointmentService.getData(req.body);
        if (resp) {
            return response("SUCCESS..!!", resp.data, 200, res);
        } else {
            return response("Something went wrong!!", {}, 500, res);
        }


    } catch (error) {
        console.log(error);
    }
}