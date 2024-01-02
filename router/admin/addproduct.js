
const express=require('express');
const router=express.Router();
const product=require('../../models/product');
router.post('/add',async (req,res)=>{
    try{
       const result= await product.create({
            productId:req.body.productId,
            productName:req.body.productName,
            price:req.body.price
        })
        if(result){
            return res.json("add successfully") ;
        }
        else{
            console.log("product add not sucessfully created");
        }


    }catch(err){
        console.log(err);
    }


       
})
router.get('/delete/:id',async (req,res)=>{
    try{
        const result=await product.findByIdAndDelete(req.params.id);


        if(result){
            return res.json("delete  successfully") ;
        }
        else{
            console.log("product  not sucessfully deleted");
        }


    }catch(err){
        console.log(err);
    }


       
})

module.exports=router;