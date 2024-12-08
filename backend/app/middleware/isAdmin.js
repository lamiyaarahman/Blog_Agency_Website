// import jwt from "jsonwebtoken";
// import {JWT_SECRET_KEY} from "../config/config.js";

const isAdmin = (req, res, next) => {
  if(req.role !== 'admin'){
      return res.status(403).send({success: false, message:'You are not allowed tp perform this action. Please try to login as an admin'})
  }

  next()
}

export default isAdmin;