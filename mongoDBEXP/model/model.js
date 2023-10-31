import mongoose from 'mongoose'
let UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    loc:{
        type:String,
        required:true
    }/* ,
    created:{
        type:Date,
        default:Date.now
    } */
})

//mongoose automatically creates/looks for the plural,lowecased version of your model name
//Thus, for the below  model, the model user is for the users collection in the database.
let User=mongoose.model('user',UserSchema)

export default  User

