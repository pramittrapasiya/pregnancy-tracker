const todoModel = require('../../model/todolist');


module.exports = {
    todo : (data)=>{
        return new Promise(async (res,rej)=>{
            try {
                // console.log("data",data);
                let savedata = await todoModel.create(data)
                if (savedata) {
                    // console.log("savedata",savedata);
                    res({ status: 200, data: "Data Added Successfully!!" });
                } else {
                    rej({ status: 404, message: "something went wrong!!" });
                }  
            } catch (err) {
                console.log("todo Service Error...", err);
            }
        })
    },
    update : (id,data)=>{
        return new Promise (async(res,rej)=>{
            try {
                // console.log("Id--->",id);
                todoModel.findOneAndUpdate({_id:id},{
                    $set:{
                        title : data.title,
                        date : data.date,
                        status : data.status
                    }
                }).then(result=>{
                    // console.log(result);
                    res({ status: 200, data: result });
                }).catch(err=>{
                    console.log(err);
                    res({ status: 500, message : err });
                })

            } catch (err) {
                console.log("err", err);
                rej({ status: 500, message: "something went wrong!!" });
            }
        })
    }
}