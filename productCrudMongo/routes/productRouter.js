import express from 'express'

//Routing refers to determining how an application responds to a client request to a particular endpoint
const router = express.Router()

//import database model
import Product from '../models/product.js'

//product root request
router.get("/", (req, resp) => {
    resp.send("Product-Root Request")
})

//url:127.0.0.1:8080/product/all
// read request
router.get("/all", async (req, resp) => {
    try {
        let allProducts = await Product.find()
        resp.status(200).json(allProducts)
    }
    catch (err) {
        resp.status(500).json(err)
    }
})

//url:127.0.0.1:8080/product/addproduct
//create operation
router.post("/addproduct", async (req, resp) => {
    try {
        let name = req.body.name;
        let price = req.body.price;
        let qty = req.body.quantity;
        let info = req.body.info;
        let product = new Product({ name, price, qty, info})

        await product.save();
        resp.status(200).json({
            result: "Product added successfully", product: product
        })
    }
    catch (err) {
        if(err) throw err
        resp.status(500).json(err)
    }
})

//update operation
//url:127.0.0.1:8080/product/:id
router.put("/:id",async(req,resp)=>{
    let productId=req.params.id //fetch id from url
    console.log(productId)
    try{
        let updatePduct={
            name:req.body.name,
            price:req.body.price,
            quantity:req.body.quantity,
            info:req.body.info
        }
       //product id is exists or not
       let product= await Product.findById(productId)
       if(!product){
        return resp.status(401).json({message:"NO Product found"})
       }
       product= await Product.findByIdAndUpdate(productId,{$set:updatePduct},{new:true})
       resp.status(200).json({message:"Product Updated",product:Product})
    }
    catch(err){
        if(err) throw err
        resp.status(500).json({message:err.message})
    }
})

//delete operation
//url:127.0.0.1:8080/product:id
//if  id length is less or more then app crash
router.delete("/:id",async(req,resp)=>{
    let productId=req.params.id ////fetch id from url
    try{
        //product id is exists or not
        let product= await Product.findById(productId)
        console.log(product)
        if(!product){
           return resp.status(401).json({message:"No Product Found"})
        }
        product=await Product.findByIdAndDelete(productId)
        resp.status(200).json({message:"Product Deleted",product:product})
    }
        catch(err){
        if(err) throw productId
        resp.status(500).json({message:err.message}) //???
    }
})

export default router