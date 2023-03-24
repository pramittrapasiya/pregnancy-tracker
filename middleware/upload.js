const { log } = require("console");
const multer = require("multer");
const path = require("path");

let storageMulter = multer.diskStorage({
    destination : function (req, file, callback) {
        // console.log("File name is : ",file);
        callback(null, path.join(__dirname,"../upload"));
    },
    filename : function(req,file,callback){
        // console.log(file);
        callback(null, Date.now()+"-"+file.originalname);
        
    }
    
});

exports.upload = multer({storage:storageMulter});