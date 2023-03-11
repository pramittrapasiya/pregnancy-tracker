const weightModel = require('../../model/WeightCalculation');

module.exports = {
    add : (data) =>{
        return new Promise(async (res,rej)=>{
            try {
                let savedata = await weightModel.create(data)
                if (savedata) {
                    res({ status: 200, data: "Data Added Successfully!!" });
                } else {
                    rej({ status: 404, message: "something went wrong!!" });
                }  
            } catch (error) {
                console.log('Weight Service Error...',error);
            }
        })
    },
    getData : (data) =>{
        return new Promise(async (res,rej)=>{
            try {
                
                let weightData = await weightModel.find({});
                // console.log(blogData);
                res({ data : weightData});

            } catch (error) {
                rej({status : 404, message : error})
                console.log('err ...',error);
            }
        })
    }
}
