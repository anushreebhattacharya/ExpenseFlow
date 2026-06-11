const User=require('../models/user');
const bcrypt=require('bcrypt');

// Get user profile
const getProfile=async(req,res)=>{
   try{
    const user=await User.findById(req.user.id).select('-password');
    if(!user){
      return res.status(404).json({message:'User not found'})
    }
    res.status(200).json(user);
  }catch(error){
    res.status(500).json({message:error.message})
  }
}

// Update user profile
const updateProfile=async(req,res)=>{
  try{
    const user=await User.findById(req.user.id);
    if(!user){
      return res.status(404).json({message:'User not found'})
    }
    if(req.body.password){
      req.body.password=await bcrypt.hash(req.body.password,10);
    }
    const updateUser=await User.findByIdAndUpdate(req.user.id, req.body, { new: true }).select('-password');
    res.status(200).json({
      _id: updateUser._id,
      username: updateUser.username,
      email: updateUser.email,
    }) 
  }catch(error){
    res.status(500).json({message:error.message})
  }
}

module.exports={getProfile,updateProfile};