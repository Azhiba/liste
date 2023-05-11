const express = require('express');
const User = require('../models/user');
const userRoute = express.Router();


// add user
userRoute.post("/add",async(req,res)=>{
    try{
        let newuser= new User(req.body);
        let result= await newuser.save();
        res.send({newuser:result,msg:"user is added"});
     } catch(error){
       console.log(error);
        }
    
})

// get users

userRoute.get("/",async(req,res)=>{
    try{
        
        let result= await User.find();
        res.send({users:result,msg:"all users"});
     } catch(error){
       console.log(error);
        }
    
})

//get user by id

userRoute.get("/:id",async(req,res)=>{
    try{
        
        let result= await User.findById(req.params.id);
        res.send({user:result,msg:"one user"});
     } catch(error){
       console.log(error);
        }
    
})

// delete user

userRoute.delete("/:id",async(req,res)=>{
    try{
        
        let result= await User.findByIdAndDelete(req.params.id);
        res.send({msg:"user is deleted"});
     } catch(error){
       console.log(error);
        }
    
})

// update usesr

userRoute.put("/:id",async(req,res)=>{
    try{
     
        let result= await User.findByIdAndUpdate(
            {_id:req.params.id},
            { $set: {...req.body}});
        res.send({msg:"user is updated"});
     } catch(error){
       console.log(error);
        }
    
});




module.exports = userRoute; 