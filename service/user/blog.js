let blogModel = require('../../model/blog');
let rModel = require('../../model/registration');

module.exports = {
    blog : (data) =>{
        return new Promise(async(res,rej)=>{
            try {
                
                let blogData = await blogModel.find({});
                // console.log(blogData);
                res({ data : blogData});

            } catch (error) {
                rej({status : 404, message : error})
                console.log('err ...',error);
            }
        })
    }
}