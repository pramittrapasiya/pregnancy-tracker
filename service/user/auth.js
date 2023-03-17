const registerModel = require('../../model/registration')
const path = require('path')
require("dotenv").config({ path: path.join(__dirname, "../../config/.env") });
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");
const { encrypt } = require("../../helper/encrypt-decrypt");
var nodemailer = require('nodemailer');
const { verify } = require('crypto');
const { response } = require("../../middleware/response");
const ngrok = require('ngrok');

const NGROK_link = "http://localhost:3000"
// const NGROK_link = "https://8b18-49-43-32-156.in.ngrok.io"

module.exports = {
    register: (data) => {
        return new Promise(async (res, rej) => {
            try {
                const pass = data.password;
                const cPass = data.confirmPassword;
                //    console.log('------------',pass);

                if (pass == cPass || cPass == pass) {
                    let savedata = await registerModel.create(data)
                    if (savedata) {
                        try {
                            var transporter = nodemailer.createTransport({
                                host: 'smtp.gmail.com',
                                port: 587,
                                auth: {
                                    user: 'pramittrapasiya.itcodeinfotech@gmail.com',
                                    pass: 'fafjxwkrpeoyeysf'
                                }
                            });

                            const token = jwt.sign({
                                data: 'Token Data'
                            },
                                'ourSecretKey',
                                { expiresIn: '10m' }
                            );

                            var mailOptions = {
                                from: 'pramittrapasiya.itcodeinfotech@gmail.com',
                                to: savedata.email,
                                subject: 'Email Verification',
                                // html: '<h3>Hii, <br>Please <a href="http://localhost:3000/verify/'+token+'">click here to Verify</a> Your Mail.</h3>'
                                html: '<h3>Hii, <br>Please <a href="'+NGROK_link+'/verify/id:'+savedata._id+'">click here to Verify</a> Your Mail.</h3>'
                            };

                            transporter.sendMail(mailOptions, function (error, info) {
                                if (error) {
                                    console.log(error);
                                } else {
                                    console.log('Email sent: ' + info.response);
                                }
                            });
                        } catch (error) {
                            console.log("Send Email Error : ", error.message);
                        }

                        res({ status: 200, data: "Data Added Successfully!!" });
                    } else {
                        rej({ status: 404, message: "something went wrong!!" });
                    }
                }
                else {
                    return rej({ status: 404, message: "Password is not match with confirm Password..!!" });
                }

            } catch (err) {
                console.log("err", err);

            }
        })
    },

    login: (data) => {
        return new Promise(async (res, rej) => {
            try {
                const dbData = await registerModel.findOne({ email: data.email })
                // console.log("data.password",data.password);
                // console.log("dbData.password",dbData.password);
                // console.log(dbData);
                if (dbData) {
                    // console.log(dbData)
                    const isMatch = await bcryptjs.compare(data.password.toString(), dbData.password);
                    // const isMatch = await bcryptjs.compare(data.password, dbData.password)
                    // console.log(isMatch);
                    if (isMatch) {
                        // if (dbData.password == data.password) {
                        const is_verify = dbData.is_verify;
                        // console.log(is_verify);
                        if(is_verify==1){
                        const token = jwt.sign(
                            {
                                user_id: dbData._id,
                                email: data.email
                            },
                            process.env.SECRET_KEY);
                        console.log(token);
                        res({ status: 200, message: "Login successfully...", data:token })
                        }
                        else{
                        rej({ status: 404, message: "Verify Your Email...." })
                        }
                    } else {
                        rej({ status: 404, message: "Password is not match..." })
                    }
                    // console.log("Email---",dbData.email);
                    // console.log("Password---",data.password);
                } else {
                    rej({ status: 404, message: "Email Is Not found ..." })
                }
            } catch (error) {
                rej({ status: 404, message: "Try..Catch.. Login Error..." })
            }
        })

    }

}

//Token Code

// const token = jwt.sign(
//     {
//     email:data.email,
//      password:data.password
//     },
//      process.env.SECRET_KEY);
// console.log(token);

// const verifyToken = await jwt.verify(token, process.env.SECRET_KEY)
// console.log("verifyToken--->",verifyToken);