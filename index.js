const express=require("express");
const bodyParser=require("body-parser");
const uploadroute=require('./Src/fileupload')
const inforoute=require('./Src/templateupload')
const createroute=require('./Src/create')


const app=express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());



app.use(uploadroute)
app.use(inforoute)
app.use(createroute)




app.listen(5000,(req,res) =>{
    console.log('Server is running at 5000')
})
