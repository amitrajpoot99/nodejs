const http=require('http')

let server=http.createServer((req,res)=>{
    //res.end("respose ok, Good")
    res.end('<h1>welcome home</h1>')
})


//localhost:8080
//127.0.0.1:8080(server.listen(8080,127.0.0.1,(err)=>{}))
server.listen(8480,"127.14.0.1",(err)=>{
    if(err) throw err
    console.log("server Running")
})

