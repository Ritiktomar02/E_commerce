const express=require("express");
const app=express();
const cors=require("cors");
const cookieParser=require("cookie-parser");
require("dotenv").config();

const PORT=process.env.PORT || 4000;

app.use(cors({
    origin:'http://localhost:3000/',
    methods:['GET','POST','DELETE','PUT'],
    allowedHeaders:[
       "Content-Type",
      "Authorization",
      "Cache-Control",
      "Expires",
      "Pragma",
    ],
    credentials:true
}));
app.use(express.json());
app.use(cookieParser());

require("./config/database").connect();


app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
})