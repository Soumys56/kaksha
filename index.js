const express=require('express');
const app=express();
const port=8000;
//middlewaare
app.use(express.urlencoded());
app.use(express.json());
const db=require('./config/mongoose')





app.use('/',require('./router/index'));
app.listen(port,(err)=>{
    if(err){
       console.log(err);
    }
    console.log(`server is running on port ${port} `)
})