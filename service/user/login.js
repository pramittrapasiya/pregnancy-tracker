const registerModel = require('../../model/registration')
const path = require('path')
require("dotenv").config({ path: path.join(__dirname, "./config/.env") });
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const { encrypt } = require("../../helper/encrypt-decrypt");


module.exports = {
    login: (data) => {
        return new Promise(async (res, rej) => {
            try {
                const dbData = await registerModel.findOne({ email: data.email })
                // console.log("data.password",data.password);
                // console.log("dbData.password",dbData.password);
                // console.log(dbData);
                if (dbData) {
                    const isMatch = await bcryptjs.compare(data.password.toString(), dbData.password);
                    // const isMatch = await bcryptjs.compare(data.password, dbData.password)
                    // console.log(isMatch);
                    // if (isMatch) {
                    if (dbData.password == data.password) {

                        const token = jwt.sign(
                            {
                                email: data.email,
                                password: data.password
                            },
                            process.env.SECRET_KEY);
                        // console.log(token);
                        res({ status: 200, message: "Login successfully..." })
                    } else {
                        rej({ status: 404, message: "Password is not match..." })
                    }
                    // console.log("Email---",dbData.email);
                    // console.log("Password---",data.password);
                } else {
                    rej({ status: 404, message: "Email not found Login Error..." })
                }
            } catch (error) {
                rej({ status: 404, message: error })
            }
        })

    }
}