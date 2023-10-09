const { type } = require("os")

let emp={id:1,name:"rahul",sal:45000}
console.log(emp)
console.log(typeof emp) //object

//convert object to string
let empString=JSON.stringify(emp)
console.log(empString)
console.log(typeof empString) //string

// convert string to object
let empObject=JSON.parse(empString)
console.log(empObject)
console.log(typeof empObject) //object