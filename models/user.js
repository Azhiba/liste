const mongoose=require("mongoose");
const schema=mongoose.Schema;
const userSchema = new schema({
    
    name:String,
    lastname:String,
    age:Number,
    email:{type:String,unique:true},
    // status:{type:Boolean,default:user}
  });

  const User = mongoose.model('User', userSchema);
  module.exports=User;