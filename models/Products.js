const mongoose=require('mongoose');

const  ProductsSchema= new mongoose.Schema({
  productName:{ type:String, required:true},
  productCount:{type:Number,required:true},
  productSize:{type:Number,required:true},
  productColor:{type:String,required:true}
});

module.exports=mongoose.model('Products',ProductsSchema);