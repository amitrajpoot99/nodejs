import express from 'express'
import dotenv from 'dotenv'
import chalk from 'chalk'
import morgan from 'morgan'
import path from 'path'

import userRouter from './users/userRouter.js'


dotenv.config({path:"config.env"})
let port= process.env.PORT
let host=process.env.HOST

let app=express()
app.use(morgan('dev'))

app.get("/",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"htmlfiles","index.html"))
})






app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(chalk.bgMagenta(`Server Running on port No:${port}`))
})