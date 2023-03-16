const reviewService = require("../../service/user/review")
const {response} = require("../../middleware/response");

exports.add = async (req,res)=>{
    try {
        let resp = await reviewService.add(req.body);
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