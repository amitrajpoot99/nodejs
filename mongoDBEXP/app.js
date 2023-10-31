
import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import UserRouter from './routes/userRouter.js'



//create server/app
let app = express()
//loading env variable using dotenv package
dotenv.config({path:'./config/config.env'})
let port = process.env.PORT 
let host = process.env.HOST 
let url= process.env.MONGO_DB_SERVER_URL

console.log(url)

//enable http logger middleware 
app.use(morgan('dev'))

//read form data
app.use(express.json())

//API - URL:http://localhost:8080/ 
app.get("/",(req,resp)=>{
        resp.send("<h1>Cart - Home Page</h1>")
})

app.use("/user",UserRouter)


mongoose.connect(url).then((response) => {
    console.log("Connected to Mongo DB Successfully...........");
}).catch((err) => {
    console.error(err);
    process.exit(1); // stop the node js process if unable to connect to mongodb
});




app.listen(port,host,(err)=>{
    if(err) throw err 
    console.log(`Server running on http:${host}:${port} `)
})

