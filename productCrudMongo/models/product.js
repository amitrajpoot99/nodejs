import mongoose from "mongoose";


//schema defines structure of youur data
let ProductSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    } , 
    qty   :{
        type:Number,
        required:true
    } , 
    info  :{
        type:String,
        required:true
    } ,
    created:{
        type:Date,
        default:Date.now
    }

})

//mongoose automatically creates/looks for the plural,lowecased version of your model name
//Thus, for the below  model, the model product is for the products collection in the database.
let Product=mongoose.model('product',ProductSchema)

export default Product