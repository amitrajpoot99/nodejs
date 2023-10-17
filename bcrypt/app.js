import bcrypt from 'bcrypt'

let user={
    name:"veldurai",
    email:'veldurai@gmail.com',
    mobile:'9591619196',
    password:'dontmarry'
}

let salt= bcrypt.genSaltSync(10)

var nmobile=bcrypt.hashSync(user.mobile,salt)
var npassword=bcrypt.hashSync(user.password,salt)
console.log(nmobile)
console.log(npassword)

user={
    ...user,password:npassword,mobile:nmobile
}
console.log(user)
let flag=bcrypt.compareSync("dontmarry",user.password)

if(flag){
    console.log("success")
}
else{
    console.log("failed")
}