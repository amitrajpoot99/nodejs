import express from 'express'

let router=express.Router();

router.get("/",(req,resp)=>{
    resp.send("user root page");
})

router.post("/user/add",(req,resp)=>{
    resp.send("add user");
})

router.put("/update",(req,resp)=>{
    resp.send("update user");
})

router.delete("/delete",(req,resp)=>{
    resp.send("delete user");
})


export default router;