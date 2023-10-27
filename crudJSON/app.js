// import all dependencies
import express from 'express'
import morgan from 'morgan'
import dotenv, { config } from'dotenv'
import fs from 'fs'

//get port and host form .env file
dotenv.config({path:"config.env"})
let host=process.env.HOST
let port=process.env.PORT

//create express app
let app=express()

//HTTP request logger middleware for node.js
app.use(morgan('dev'))

//read data from postman tool
app.use(express.json())

//API URL: 127.0.0.1:8080/
app.get("/",(req,resp)=>{
    resp.send("root req")
})

//API URL: 127.0.0.1:8080/all  -get all user data
app.get("/all",(req,resp)=>{
    let empData=getEmpData()
    resp.send(empData)
})

//API URL: 127.0.0.:8080/emp/add  -check first JSON for user if user is not there then add user
app.post("/emp/add",(req,resp)=>{
    let empData=req.body
    console.log(empData)
    let emp=getEmpData()
    console.log(emp)

    let empExist=emp.find((e)=>e.id==empData.id)
    console.log(empExist)
    if(empExist){
        return resp.send("employee already existed! please try again")
    }
    emp.push(empData)
    saveEmpData(emp)
    resp.send("employee inserted successfully.")

})

app.put("/emp/update",(req,resp)=>{
    let empData=req.body
    console.log(emp.empData)
    let emp=getEmpData()
    console.log(emp)
    let empExist=emp.findIndex(e=>e.id==empData.id)
    console.log(empExist)
    if(empExist){

    }
    resp.send(`updated successfully`)
})

//API URL: 127.0.0.1:8080/emp/del/rajni  -check first JSON for user if uder is there then delete user
app.delete("/emp/del/:id",(req,resp)=>{
    //read url data
    let id=req.params.id
    console.log(id)
    let emp=getEmpData()
    console.log(emp)
    let newEmp=emp.filter(e=>e.id!=id)
   
    console.log(newEmp)

    
    saveEmpData(newEmp)
    resp.send("deleted successfully")
})


//read JSON file
let getEmpData=()=>{
    let empData=fs.readFileSync('emp.json','utf-8')
    return JSON.parse(empData)
}

//add employee
let saveEmpData=(emp)=>{
    fs.writeFileSync('emp.json',JSON.stringify(emp))
}


app.listen(port,host,(err)=>{
    if(err) throw err
    console.log(`server running on host no: ${host} and  port no: ${port}`)
})