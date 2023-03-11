const { Schema, model } = require("mongoose");
const bcryptjs = require("bcryptjs");

const registrationModel = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    confirmPassword: {
        type: String
    },
    contactNo: {
        type: Number
    },
    is_verify : {
        type: Number,
        default:0
    },
    sDate: {
        type: Date
    }
},{
    timestamps : true
})

registrationModel.pre("save", async function (next) {
    if (this.isModified("password")) {
      this.password = await bcryptjs.hash(this.password, 12);
      this.confirmPassword = await bcryptjs.hash(this.confirmPassword, 12);
    }
});
// registrationModel.pre("save", async function (next) {
//     if (this.isModified("password")) {
//       this.confirmPassword = await bcryptjs.hash(this.confirmPassword, 12);
//     }
// });


module.exports = model("registration" , registrationModel)