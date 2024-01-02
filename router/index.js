const { application } = require('express');
const express=require('express')
const router=express.Router();
router.get('/admin',(req,res)=>{
    return res.send("hello");
})
router.use('/admin',require('./admin/addproduct'));

module.exports=router;