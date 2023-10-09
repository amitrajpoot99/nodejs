//import fs from 'fs'
const fs=require('fs');

//synchronous read
let data=fs.readFileSync('data.txt','utf-8')
console.log(data)

// synchronous write
fs.writeFileSync('ex.txt',data)
console.log('successfully written')

//asynchronous read
fs.readFile('data.txt','utf-8',(err,data2)=>{
    if(err) throw err
    console.log('successful')
    console.log(data2)
})

//asynchronous read andwrite
fs.readFile('data.txt','utf-8',(err,data)=>{
    if(err)throw err
    fs.writeFile('ex.txt',data,(err)=>{
        if(err)throw err
        console.log('successfulyl written2')
    })
})


