import express from "express";
import Blog from "../models/BlogModel.js";
import verifyToken from "../middleware/verifyToken.js";
import isAdmin from "../middleware/isAdmin.js";
const router = express.Router();


//create a  blog post
router.post("/create-post",verifyToken,isAdmin, async (req, res) => {
  try{
    // console.log("Blog data fro api : ", req.body)
    const newPost = new Blog({...req.body});
    await newPost.save();
    res.status(201).send({
      message : "Post created successfully",
      post:newPost
    })
  }
  catch(error){
    console.error("Error creating post", error);
    res.status(500).send({message:"Error creating post"})
  }
})







//get all blogs
router.get('/', async (req, res) =>{
      try {
      const posts = await Blog.find();
      res.status(200).send(posts)
      } catch (error) {
      console.error("Error creating post :", error);
      res.status(500).send({message:"Error creating post"})
      }
})


//get single blog by id
router.get("/:id",  async (req, res) =>{
  try {
    const postId = req.params.id
    const post = await Blog.findById(postId);
    if(!post){
      return res.status(404).send({ message:"Post not found"})
    }
    res.status(200).send({
      message: "Post retrieved successfully",
      post: post
    })
    
  } catch (error) {
    console.error("Error fetching single post : " ,error);
    res.status(500).send({ message : "Error fetching single post"})
  }
})

//update blog post
router.patch("/update-post/:id",verifyToken, async(req, res) => {
  try {
    const postId = req.params.id;
    const updatePost = await Blog.findByIdAndUpdate(postId, { ...req.body}, {new:true});
    if(!updatePost){
      return res.status(404).send({ message: "Post not found"})
    }
    res.status(200).send({
      message: "Post updated successfully",
      post: updatePost
    })
  } catch (error) {
    console.error("Error updating post: ", error);
    res.status(500).send({ message: "Error updating post"})
  }
})

//delete blog post
router.delete("/:id",verifyToken, async(req, res) => {
  try {
    const postId = req.params.id;
    const post = await Blog.findByIdAndDelete(postId);
    if(!post){
      return res.status(404).send({ message: "Post not found"})
    }
    res.status(200).send({
      message: "Post deleted successfully",
      post: post
    })
  } catch (error) {
    console.error("Error deleting post: ", error);
    res.status(500).send({ message: "Error deleting post"})
  }
})



export default router;