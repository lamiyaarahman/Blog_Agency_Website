import mongoose from 'mongoose';



const BlogSchema = new mongoose.Schema({
        title:{type:String,required: true},
        
        image:String,
        category:String,
        author:String,
        authorPic:String,
        published_date:{type:Date,default:Date.now},
        reading_time:String,
        content:String,
        


    }
)

const Blog = mongoose.model('Blog', BlogSchema);
export default Blog;