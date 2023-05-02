let blogModel = require('../../model/blog');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: "de5nguvpq",
    api_key: "821632274531255",
    api_secret: "CP4KxFZk6khEYF3YXHpkCq3D5iU"
});

module.exports = {
    addblog: (data, file) => {
        // addblog : (data) =>{
        return new Promise(async (res, rej) => {

            // console.log('---->>>>>>',data);
            try {
                //  console.log('image---',file);
                // cloudinary.uploader.upload(file.path,async(err,result)=>{
                //     // console.log('Result--->',result);
                //     let blogData = await blogModel.create({
                //     category : data.category,
                //     title : data.title,
                //     description : data.description,
                //     image : result.url,
                //     date : data.date
                // });
                // console.log(blogData);
                // if (blogData) {
                //     res({ status: 200, data: "Data Added Successfully!!" });
                // } else {
                //     rej({ status: 404, message: "something went wrong!!" });
                // }

                // })

                let blogData = await blogModel.create({
                    category: data.category,
                    title: data.title,
                    description: data.description,
                    // image : file.path,
                    date: data.date
                });
                console.log(blogData);
                if (blogData) {
                    res({ status: 200, data: "Data Added Successfully!!" });
                } else {
                    rej({ status: 404, message: "something went wrong!!" });
                }


            } catch (error) {
                rej({ status: 404, message: error })
                console.log('Service Admin Blog Try Catch Error...', error);
            }
        })
    }
}