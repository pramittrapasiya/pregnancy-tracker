const registerModel = require('../../model/registration');



module.exports = {
    login : (data)=>{
        return new Promise(async(res, rej)=>{
            try {
                const dbData = await registerModel.findOne({ email: data.email })
                if(dbData){
                    if (dbData.password == data.password) {
                        res({ status: 200, message: "Login successfully..." })
                    }else{
                        rej({ status: 404, message: "Password is not match..." })  
                    }
                }else{
                    res({status:404, message:"Email Is Not Found.."})
                }
            } catch (error) {
                
            }
        })
    },
    getDetails : (data) =>{
        return new Promise(async(res,rej)=>{
            try {
                
                let registerData = await registerModel.find({});
                // console.log(blogData);
                res({ data : registerData});

            } catch (error) {
                rej({status : 404, message : error})
                console.log('err ...',error);
            }
        })
    }
}
