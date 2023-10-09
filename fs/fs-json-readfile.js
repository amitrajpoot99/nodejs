const fs= require('fs')


fs.readFile('emp.json','utf-8',(err,data)=>{
    if(err) throw err
    console.log(typeof data)
    //data in string format
    let employees=JSON.parse(data)
    console.log(employees)

    for(emp of employees){
        console.log(emp.ename)
    }
})