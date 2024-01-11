
const express=require('express');
const router=express.Router();
const product=require('../../models/product');
//Add products
router.post('/add',async (req,res)=>{
   
        try {
            const { name, description, price, variants } = req.body;
            const productlist = await product.create({ name, description, price, variants });
            res.status(201).json("product added sucessfully");
          } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
          }


         


       
})
//delete products based on id
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

//update product
router.put('/update/:id',async(req,res)=>{
    try {
      
       
        const { name, description, price, variants } = req.body;
        const updatedProduct = await product.findByIdAndUpdate(
          req.params.id,
          { name, description, price, variants },
          { new: true }
        );
        if (!updatedProduct) {
          return res.status(404).json( 'Product not found' );
        }
        res.status(200).json("update product sucessfully");
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
})

//retrive product
router.get('/getproduct',async(req,res)=>{

    try{
        const productList=await product.find();
        if(productList){
            res.status(200).json(productList);

        }
        else{

            return res.status(404).json( 'Product not found' );
        }
           

    }catch(err){
        res.status(500).json({ error: 'Internal Server Error' });
        
    }
})

// Search products
router.get('/search', async(req,res)=>{
    try {
        const { query } = req.query;
        console.log(query)
        //you can search using product name ,description and variant name
        const searchResults = await product.find({
          $or: [
            { name: { $regex: query, $options: 'i' } },
            { description: { $regex: query, $options: 'i' } },
            { 'variants.name': { $regex: query, $options: 'i' } },
          ],
        });
        res.status(200).json(searchResults);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
});

module.exports=router;