const mongoose =require('mongoose');


const UserSchema= mongoose.Schema({
   uname:{
    type: String,
    required: true
  },
   email: {
     type: String,
    required: true
  },
   password:{
    type: String,
    required: true
   },
   age:{
    type: Number,
    required: true
   },
   address:{
    type: String,
    required: true
   },
   UserType:{
    type: String,
    default: 'user'
   }
 })

 const UserModel=mongoose.model('Userin',UserSchema)

 module.exports=UserModel;