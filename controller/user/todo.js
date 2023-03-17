const todoService = require("../../service/user/todo")
const {response} = require("../../middleware/response");

exports.todo = async (req,res)=>{
    try {
        let resp = await todoService.todo(req.body);
        if (resp) {
            return response("SUCCESS..!!", resp.data, 200, res);
        } else {
            return response("Something went wrong!!", {}, 500, res);
        }


    } catch (err) {
        // console.log(error);
        return response(err.message, {}, err.status, res);
    }
}


exports.update = async(req,res)=>{

    try {
        
        let resp = await todoService.update(req.params.id, req.body);
        if (resp) {
            return response("data updated successfully..!!", resp.data, 200, res);
        } else {
            return response("Something went wrong!!", {}, 500, res);
        }
    } catch (err) {
        return response(err.message, {}, err.status, res);
    
    }
}