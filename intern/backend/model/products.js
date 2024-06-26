const mongoose =require('mongoose');


const ProductSchema= mongoose.Schema({
   pname:{
    type: String,
    required: true
  },
   price: {
     type: Number,
    required: true
  },
   category:{
    type: String,
    required: true
   },
   img:{
    type: String,
    required: true
   },
   description:{
    type: String,
    required: true
   }
 })

 const ProductModel=mongoose.model('Products',ProductSchema)

 module.exports=ProductModel;