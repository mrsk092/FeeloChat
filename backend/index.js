import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
import {StatusCode} from "status-code-enum";
import User from "./models/userModel.js";

dotenv.config();

const app = express();
const port = process.env.PORT;
const dbUrl = process.env.DB_URL;

app.use(cors({
    origin:[process.env.ORIGIN],
    methods:["GET","POST","PUT","PATCH","DELETE"],
    credentials:true,
}));

app.use(cookieParser());
app.use(express.json());

app.use((err,req,res,next)=>{   // global catch function
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
      });
})

app.listen(port,()=>{
    console.log(`server is runnig at http://localhost:${port}`);
});


mongoose.connect(dbUrl).then(()=>{
    console.log("connected successfully");
}).catch((err)=>{
    console.log("error while connecting");
})
