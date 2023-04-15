const appointmentModel = require('../../model/appointment');

module.exports = {
    add: (data) => {
        return new Promise(async (res, rej) => {
            try {
                let savedata = await appointmentModel.create(data)
                if (savedata) {
                    res({ status: 200, data: "Data Added Successfully!!" });
                } else {
                    rej({ status: 404, message: "something went wrong!!" });
                }

            } catch (error) {
                console.log("Appointment service Error..", error);
            }
        })
    },
    getData: (id, data) => {
        return new Promise(async (res, rej) => {
            try {
                // const {id} = req.params;
                // console.log(id.id);
                // const new_id = id.id
                // console.log(new_id);
                let appointmentData = await appointmentModel.find({user_id : id.id})
                // console.log(appointmentData);
                res({ data: appointmentData });

            } catch (error) {
                console.log("Appointment service Error..", error);
            }
        })
    }
}