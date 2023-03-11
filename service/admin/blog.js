let blogModel = require('../../model/blog');

module.exports = {
    addblog : (data) =>{
        return new Promise(async(res,rej)=>{
            try {
                let blogData = await blogModel.create(data);
                if (blogData) {
                    res({ status: 200, data: "Data Added Successfully!!" });
                } else {
                    rej({ status: 404, message: "something went wrong!!" });
                }

            } catch (error) {
                rej({status : 404, message : error})
                console.log('err ...',error);
            }
        })
    }
}