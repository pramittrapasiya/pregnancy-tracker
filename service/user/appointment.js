const appointmentModel = require('../../model/appointment');

module.exports = {
    add : (data) =>{
        return new Promise(async(res,rej)=>{
            try {
                let savedata = await appointmentModel.create(data)
                if (savedata) {
                    res({ status: 200, data: "Data Added Successfully!!" });
                } else {
                    rej({ status: 404, message: "something went wrong!!" });
                }  

            } catch (error) {
                console.log("Appointment service Error..",error);
            }
        })
    },
    getData : (data) =>{
        return new Promise(async(res,rej)=>{
            try {
                let appointmentData = await appointmentModel.find(data)
                res({ data : appointmentData}); 

            } catch (error) {
                console.log("Appointment service Error..",error);
            }
        })
    }
}