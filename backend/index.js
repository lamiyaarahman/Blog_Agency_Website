import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './app/routes/blog.route.js';
import userRoutes from './app/routes/auth.route.js';


const app = express();
app.use(express.json());
// app.use(cors({
//   origin:'http://localhost:5173/',credentials: true,
// }));
const port = 5000;


const corsOptions = {
  origin: 'http://localhost:5173', // No trailing slash
  credentials: true, // Allow credentials
};

app.use(cors(corsOptions));



//routes



app.use('/api/blogs', router);
app.use('/api/auth', userRoutes)



app.get('/', (req, res) => {
  res.send('Hello World!');
});


//DataBase Connect
mongoose.connect("mongodb+srv://lamiya:lamiya1234@cluster0.ywuem.mongodb.net/BlogAgency",{autoIndex:true}).then(()=>{
  console.log("Connected to DB");
}).catch(()=>{
  console.log("Error connecting to DB");
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});     