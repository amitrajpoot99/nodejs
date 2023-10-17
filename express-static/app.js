import express from 'express'
import dotenv, { config } from 'dotenv'
import morgan from 'morgan'
import path from 'path'

let app=express()
app.use(morgan('tiny'))
dotenv.config({path:'config.env'})

let port=process.env.PORT
let host=process.env.HOST

app.get("/",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"htmlfiles","index.html"))

})

app.get("/contact",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"htmlfiles","contact.html"))

})
app.get("/about",(req,resp)=>{
    resp.sendFile(path.join(process.cwd(),"htmlfiles","about.html"))

})

app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(`server running on port no: ${port}`)
})