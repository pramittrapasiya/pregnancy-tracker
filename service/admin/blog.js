let blogModel = require('../../model/blog');
const { upload } = require('./../../middleware/upload')


module.exports = {
    addblog : (data,file) =>{
        return new Promise(async(res,rej)=>{
            // console.log(data.file.filename);
            console.log('---->>>>>>',file.path);
            try {
                let blogData = await blogModel.create({
                    category : data.category,
                    title : data.title,
                    description : data.description,
                    image : file.path,
                    date : data.date
                });
                // console.log(blogData);
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