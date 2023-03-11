const {Router} = require("express");
const v1 = Router()

const userRoute = require('./user/user.routes')
const adminRoute = require('./admin/admin.routes')
// const verifyMail = require('./../middleware/verifyMail')

v1.get("/", (req, res) => {
    res.status(200).json({ message: "v1 routes working!!" });
});

v1.use("/user", userRoute);
v1.use("/admin", adminRoute);
// v1.use("/verifyMail", verifyMail);

module.exports = v1
