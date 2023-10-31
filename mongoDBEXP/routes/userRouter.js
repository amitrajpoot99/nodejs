 import express from 'express'
import User from '../model/model.js'



const router= express.Router()

router.get("/0",(req,resp)=>{
    resp.send("<h1>User Page</h1>")
})


//127.0.0.1:8080/user/all
router.get("/all",async(req,resp)=>{
    try{
        let users=await User.find()
        resp.status(200).json(users)
    }
    catch(err){
        resp.status(500).json({"msg":"Error"})
    }
})

//add new user
//127.0.0.1:8080/user/add
router.post("/add",async(req,resp)=>{
    try{
        let name=req.body.name
        let email=req.body.email
        let loc=req.body.loc

        let newUser=new User({name:name,email:email,loc:loc})
        await newUser.save()

        resp.status(200).json({"msg":"data inserted",user:newUser})
    }
    catch(err){
        console.log(err)
        resp.send(err)
    }
})

export default router

