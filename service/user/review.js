const reviewModel = require('../../model/review');

module.exports = {
    add : (data) =>{
        return new Promise(async (res,rej)=>{
            try {
                let savedata = await reviewModel.create(data)
                if (savedata) {
                    res({ status: 200, data: "Data Added Successfully!!" });
                } else {
                    rej({ status: 404, message: "something went wrong!!" });
                }  
            } catch (error) {
                console.log('Review Service Error...',error);
            }
        })
    }
}