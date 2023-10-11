const dotenv=require('dotenv')

dotenv.config({path:"config.env"})

console.log(process.env.PORT)
console.log(process.env.HOST_NAME)
