import express from "express";
import bcrypt from "bcrypt"
import User from "../models/UserModel.js";
import generateToken from "../middleware/generateToken.js";
const router = express.Router();


//register a new user
router.post("/register", async (req, res) => {
  try {
    const {email, password, username} = req.body;
    const user = new User ({ email, password, username});
    await user.save();
    res.status(200).send({ message: "User registration successfully", user:user})



  } catch (error) {
    console.error("Failed to register", error);
    res.status(500).json({ message:'Registration failed!'});
  }
})

 
//login a user
router.post("/login", async (req, res) => {
  try {
    // console.log(req.body);
    const {email, password} = req.body;
    const user = await User.findOne({email});
    
    if(!user){
      return res.status(404).send({message: "User not found"})
    }
    const isMatch = await user.comparePassword(password)
    if(!isMatch){
      return res.status(401).send({message: "Invalid password"})
  } 

  //generate token here
  const token = await generateToken(user._id);
  res.cookie("token",token,{
    httpOnly: true,
    secure: true,
    sameSite: true
  })

  res.status(200).send({message: 'Login successfully',token,user:{
    _id: user._id,
    email: user.email,
    username: user.username,
    role:user.role

  }
})
}
  catch (error) {
    console.error("Failed to login", error);
    res.status(500).json({ message:'login failed!'});
  }
})


//Logout

router.post("/logout", async (req, res) => {
  try {
    res.clearCookie('token');
    res.status(200).send({message:'Logged out successfully done'})
  } catch (error) {
    console.error("Failed to log out", error);
    res.status(500).json({message: 'logout failed'});

  }
})

//update a user role

router.put("/users/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const {role} = req.body;
    const user = await User.findByIdAndUpdate(id,{role},{new:true});
    if(!user){
      return res.status(404).send({message: "User not found"})
    }
    res.status(200).send({message: "User role updated successfully",user})
  } catch (error) {
    console.error("Error updating user role", error);
    res.status(500).json({message: 'Failed updating user role'});

  }
})




















export default router;