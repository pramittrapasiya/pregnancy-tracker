let reviewModel = require('../../model/review');

module.exports = {
    getReview : (data) =>{
        return new Promise(async(res,rej)=>{
            try {
                
                let reviewData = await reviewModel.find({});
                // console.log("Review Length : ",reviewData.length);
                res({ data : {
                     totalData : reviewData.length,
                      result : reviewData
                    }});

            } catch (error) {
                rej({status : 404, message : error})
                console.log('err ...',error);
            }
        })
    }
}