import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import morgan from "morgan";

import fs from 'fs';
import path from 'path';
 import userRouter from './routes/userRouter.js'


//create server/app
let app=express();

//load environment variable from dotenv package
dotenv.config({path:"./config/config.env"})
let port=process.env.PORT
let host=process.env.HOST
let mongoUrl=process.env.MONGO_SERVER_URL

app.use(morgan('dev'))

//read form data from postman
app.use(express.json())

//root request served using file system module
app.get("/",(req,resp)=>{
    fs.readFile(path.join("htmlFiles","index.html"),"utf-8",(err,data)=>{
        if(err) throw err
        resp.end(data);
    })
})

//api for product
app.use("/user",userRouter)

//mongoose connection with server url "check config.env for url"
mongoose.connect(mongoUrl).then((response)=>{
    console.log("MongoDB connection Successfull")
}).catch((err)=>{
    console.log(err)
    process.exit(1)//stop the node js process
})


//listen for connection "using chalk"
app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(`Server running on host no:${host} and port no:${port}`)

})

