let sum=(a,b)=>{
    return a+b
}

let multi=(a,b)=>{
    return a*b
}

let calc=(a,b,callback)=>{
    return callback(a,b)
}

let r1=calc(10,20,sum)
let r2=calc(10,20,multi)
console.log(r1)
console.log(r2)

let r3=calc(5,10,(a,b)=>{return a-b})
console.log(r3)

//

let sum1=(a,b)=> a+b
let multi1=(a,b)=>a*b

let calc1=(a,b,callback1)=>{
    return callback1(a,b)
}

let rr1=calc1(3,4,sum1)
let rr2=calc1(3,4,multi1)
console.log(rr1)
console.log(rr2)

let rr3=calc1(4,5,(a,b)=>{return a-b})
console.log(rr3)