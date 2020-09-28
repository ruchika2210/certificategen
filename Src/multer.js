const express=require("express");
const router=express.Router()
const mongoose = require('mongoose');
const multer=require('multer');


const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads/');
    },
    filename:function(req,file,cb){
        cb(null,new Date().toISOString().replace(/:/g,'-')+file.originalname);

    }
});
const upload=multer({
    storage:storage,

}).single('image');

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