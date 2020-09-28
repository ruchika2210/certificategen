const express=require("express");
const router=express.Router()
const mongoose = require('mongoose');
const multer=require('multer');
// const upload = multer({ dest: 'uploads/' })

// const path=require('path')


const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads/');
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname + "_" + Date.now() + "_" + file.originalname)
    }
});


const filefilter=(req,file,cb) => {
    if(file.mimetype=='image/jpeg' || file.mimetype=='image/png'){
        cb(null,true)
    }
    else{
        cb(null,false)
    }
}

const upload=multer({
    storage:storage,
    limits:{fileSize:30000000},

}).single('newcertificate');

router.post('/multer',(req,res)=>{
    upload(req,res,function(err) {
        if(err) {
            console.log(err)
            return res.send('Something went wrong')
        }else{
            
            let check=req.file.filename;
            console.log(req.file);
            res.send("done");
        }
    });    

});
// module.exports=upload;

// app.listen(5454,function(){
//     console.log("server started");
// });

module.exports=router