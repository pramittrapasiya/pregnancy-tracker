const timelineModel = require('../../model/timeline');

module.exports = {
    add : (data) =>{
        return new Promise(async (res,rej)=>{
            try {
                let savedata = await timelineModel.create(data)
                if (savedata) {
                    res({ status: 200, data: "Data Added Successfully!!" });
                } else {
                    rej({ status: 404, message: "something went wrong!!" });
                }  
            } catch (error) {
                console.log('Service Admin Timeline Error...',error);
            }
        })
    }
}