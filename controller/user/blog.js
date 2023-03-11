const blogService = require("../../service/user/blog")
const {response} = require("../../middleware/response");

exports.blog = async(req,res)=>{
    try {
        let resp = await blogService.blog(req.body);
        if (resp) {
            return response("SUCCESS..!!", resp.data, 200, res);
        } else {
            return response("Something went wrong!!", {}, 500, res);
        }

    } catch (error) {
        console.log(error);
    }
}
