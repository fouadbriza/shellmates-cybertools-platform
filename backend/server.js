const express=require("express");
const cors=require("cors");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const toolRoutes = require("./controllers/tool");
require("dotenv").config();


const app=express();
app.use(cors());
app.use(express.json());



connectDB();

app.use("/tools",toolRoutes);



const PORT=process.env.PORT || 9000;

app.listen(PORT,()=>{
        console.log(`server running on ${PORT}`);
});