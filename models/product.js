const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    productId:{
        type:Number,
        required:true,
        unique:true
    },
    productName:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})
const Product=mongoose.model("product",productSchema);

module.exports=Product;
