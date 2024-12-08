import jwt from "jsonwebtoken";
import {JWT_SECRET_KEY} from "../config/config.js";

const verifyToken = (req, res, next) => {
  try {
    //const token2 = req.header('authorization');
    //const token = req.cookies.token;
    const token = req.headers.authorization?.split(' ')[1];//Bearer token
    if(!token){
      return res.status(401).send({message: "No token provided"})
    }
    const decoded = jwt.verify(token,JWT_SECRET_KEY);
    if(!decoded.userId){
      return res.status(401).send({message: "Invalid token provided"})
    }
    req.userId = decoded.userId;
    req.role = decoded.role;
    next();
    //console.log(token2);


  } catch (error) {
    console.error("Error verify token" , error);
    res.status(401).send({message: "Invalid token"})
  }
}











export default verifyToken;