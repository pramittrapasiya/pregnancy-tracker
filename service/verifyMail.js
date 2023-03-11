verifyMail = async (req, res) => {
    try {
        const verify = await Registration.updateOne({ _id: req.query.id }, { $set: { is_verify: 1 } });
        console.log(verify);
        // return response("Email Verified..!!", 200, res);

    } catch (error) {
        console.log("Verify Mail Catch Error..", error);
    }
}


module.exports = {verifyMail}