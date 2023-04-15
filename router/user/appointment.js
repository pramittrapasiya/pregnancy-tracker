const express = require("express");
const appointmentRoute = express.Router();
const appointmentController = require('../../controller/user/appointment.js');

appointmentRoute.get('/',(req,res)=>{
    res.send({status: 200, message: "Appointment route is working"})
})

appointmentRoute.post("/addAppointment",appointmentController.add);
appointmentRoute.get("/getAppointment/:id",appointmentController.getData);

module.exports = appointmentRoute;