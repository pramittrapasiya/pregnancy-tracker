const verifyMail = require("../service/verifyMail")
const {response} = require("../middleware/response");

exports.verify = async (req,res)=>{
    try {
        let resp = await verifyMail.verifyMail(req.body);
        if (resp) {
            return response("SUCCESS..!!", resp.data, 200, res);
        } else {
            return response("Something went wrong!!", {}, 500, res);
        }


    } catch (error) {
        console.log(error);
    }
}