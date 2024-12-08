import {JWT_SECRET_KEY} from "../config/config.js";
import jwt from "jsonwebtoken";
import User from "../models/UserModel.js";


const generateToken = async (userId) => {
  try {
    const user = await User.findById(userId);
    if(!user){
      throw new Error("User not found");
    }

    const token = jwt.sign({userId:user._id,role: user.role},JWT_SECRET_KEY,{expiresIn: '1h'})
    return token;

  } catch (error) {
    console.error("Error generation token ", error);
    throw error;
  }
}

export default generateToken;