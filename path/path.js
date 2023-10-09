
const fs = require('fs')
const path=require('path')
console.log(path.join(__dirname))//current working directory
//console.log(path.join(__dirname,"emp","emp.json"))

filename=path.join(__dirname,"emp","emp.json")
fs.readFile(filename,'utf-8',(err,data)=>{
    if(err) throw err
    console.log(data)
})