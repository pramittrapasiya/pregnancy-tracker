let timelineModel = require('../../model/timeline');

module.exports = {
    getTimeline : (data) =>{
        return new Promise(async(res,rej)=>{
            try {
                let timelineData = await timelineModel.find({});
                res({ data : timelineData});

            } catch (error) {
                rej({status : 404, message : error})
                console.log('err ...',error);
            }
        })
    }
}