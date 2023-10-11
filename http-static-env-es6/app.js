import dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'
import http from 'http'


dotenv.config({path:"config.env"})

let port=process.env.PORT;
let host=process.env.HOST_NAME;

http.createServer((req,resp)=>{
    console.log(req.url)

    if(req.url==="/"){
        fs.readFile(path.join("htmlfiles","index.html"),"utf-8",(err,data)=>{
            if(err) throw err
            resp.end(data);
        })
    }

    if(req.url==="/about"){
        fs.readFile(path.join("htmlfiles","about.html"),"utf-8",(err,data)=>{
            if(err) throw err
            resp.end(data);
        })
    }

    if(req.url==="/contact"){
        fs.readFile(path.join("htmlfiles","contact.html"),"utf-8",(err,data)=>{
            if(err) throw err
            resp.end(data);
        })
    }

    if(req.url==="/employee"){
        fs.readFile(path.join("htmlfiles","employee.html"),"utf-8",(err,data)=>{
            if(err) throw err
            resp.end(data);
        })
    }

    if(req.url==="/services"){
        fs.readFile(path.join("htmlfiles","services.html"),"utf-8",(err,data)=>{
            if(err) throw err
            resp.end(data);
        })
    }

}).listen(port,host,(err)=>{
    if(err) throw err
    console.log(`server is running`)
 
})

