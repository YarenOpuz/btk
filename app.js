const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
require('dotenv/config');
const dotenv=require('dotenv');
app.use(bodyParser.json());


const productsRoute=require('./routes/products');
app.use('/products',productsRoute)

app.get('/',(req,res)=>{
  res.send('we are on home');
});

dotenv.config()
mongoose.mongoose.connect( 
  process.env.DB_CONNECTION,
  {useNewUrlParser:true},
 ()=>console.log('connected DB'),
);
app.use(express.json())
app.listen(3000);