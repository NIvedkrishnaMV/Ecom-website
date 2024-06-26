const mongoose =require('mongoose');

 const CartSchema= mongoose.Schema({
    pname:String,
    price:Number,
    category:String

 })

 const CartModel=mongoose.model('Cart',CartSchema)

 module.exports=CartModel;