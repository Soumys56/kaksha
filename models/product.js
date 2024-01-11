const mongoose=require('mongoose');
const variantSchema = new mongoose.Schema({
    name: { type: String, required: true },
    sku: { type: String, required: true, unique: true },
    additionalCost: { type: Number, default: 0 },
    stockCount: { type: Number, default: 0 },
  });
const productSchema=new mongoose.Schema({
    name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  variants:[variantSchema]
})
const Product=mongoose.model("product",productSchema);

module.exports=Product;
