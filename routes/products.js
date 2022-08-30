const express=require('express');
const router= require('express').Router();
const Products=require('../models/Products.js');



router.get('/',async(req,res)=>{
  try{
    const products=await Products.find();
    res.json(products);
  }catch(err){
    res.json({message:err});
  }
});

router.post('/',async(req,res)=>{
  const products = new Products({
    productName: req.body.productName,
    productCount: req.body.productCount,
    productSize: req.body.productSize,
    productColor: req.body.productColor

  });
  try {
    const savedProducts= await products.save();
    res.send(savedProducts)
  } catch (error) {
    res.status(400).send(error)
  }


});


router.get('/:productsId',async(req,res)=>{
  try{
    const products=await Products.findById(req.params.productsId);
    res.send(products);
  } catch(error){
    res.status(400).send(error);
  }
});

router.delete('/:productsId',async(req,res)=>{
  try{
    const removedProducts = await Products.remove({_id: req.params.productsId});
    res.send(removedProducts); 
  }catch(error){
    res.status(400).send(error)
  }
});

router.put('/:productsId',async(req,res)=>{
  try{
    const updatedProducts = await Products.updateOne(
      {_id:req.params.productsId},
      {$set:{productName: req.body.productName,
        productCount: req.body.productCount,
        productSize: req.body.productSize,
        productColor: req.body.productColor
       }}
    
    );
    res.send(updatedProducts);
  } catch(error){
    res.status(400).send(error);
  }
});

module.exports=router;