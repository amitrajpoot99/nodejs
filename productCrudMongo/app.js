import express from 'express';
import dotenv from 'dotenv';
import mongoose from "mongoose";
import morgan from "morgan";
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';

import productRouter from './routes/productRouter.js'


//create server/app
let app=express();

//load environment variable from dotenv package
dotenv.config({path:"./config/config.env"})
let port=process.env.PORT
let host=process.env.HOST
let mongoUrl=process.env.MONGO_SERVER_URL

//read form data from postman
app.use(express.json())

//http logger middleware morgan
app.use(morgan('dev'))

//root request served using file system module
app.get("/",(req,resp)=>{
    fs.readFile(path.join("htmlFiles","index.html"),"utf-8",(err,data)=>{
        if(err) throw err
        resp.end(data);
    })
})

//api for product
app.use("/product",productRouter)

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
    console.log(chalk.bgGreen(`Server running on host no:${host} and port no:${port}`))

})

