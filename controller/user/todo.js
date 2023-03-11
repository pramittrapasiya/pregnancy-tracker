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


    } catch (error) {
        console.log(error);
    }
}