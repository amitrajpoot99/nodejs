import express from 'express'

//Routing refers to determining how an application responds to a client request to a particular endpoint
const router = express.Router()

//import database model
import User from '../model/user.js'

//product root request
router.get("/", (req, resp) => {
    resp.send("User-Root Request")
})

//new user registration
router.post("/add",async(req,resp)=>{
    try{
        
        let {name,email,password}=req.body;

        //check if user already registered
        let user=await User.findOne({email:email})
        console.log(user)
        if(user){
            return resp.status(401).json({'msg':'user already exists'})
        }

        user= new User({name,email,password})
        await user.save()
        resp.status(200).json({"msg":"user ceated",user:user})
        
    }
    catch(err){
        if(err) throw err
        resp.status(500).json(err)
    }
})
export default router