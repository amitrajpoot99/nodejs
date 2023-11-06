import jwt from 'jsonwebtoken'



let user_payload={
    "email":"sri@gmail.com",
    "password":"as6546waf"
}

//secret key
let secretKey="awr34sf"

let token= jwt.sign(user_payload,secretKey)

//let token= jwt.sign(user_payload,secretKey,{expiresIn:60*60})

console.log(token)

jwt.verify(token,secretKey,(err,de)=>{
    if(err) throw err
    console.log(de)

})