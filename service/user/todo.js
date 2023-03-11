const todoModel = require('../../model/todolist');


module.exports = {
    todo : (data)=>{
        return new Promise(async (res,rej)=>{
            try {
                let savedata = await todoModel.create(data)
                if (savedata) {
                    res({ status: 200, data: "Data Added Successfully!!" });
                } else {
                    rej({ status: 404, message: "something went wrong!!" });
                }  
            } catch (err) {
                console.log("todo Service Error...", err);
            }
        })
    }
}