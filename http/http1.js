const fs=require('fs');
const path=require('path');
const http=require('http');

let server=http.createServer((req,res)=>{
    fs.readFile("index.html",'utf-8',(err,data)=>{
        if(err) throw err;
        res.end(data);
    })
})

server.listen(8080,'127.0.0.1',(err)=>{
    if(err) throw err
    console.log('server running')
})