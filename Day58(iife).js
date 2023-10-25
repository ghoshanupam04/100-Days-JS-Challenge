//IIFE - Immediately Invoked Function Expressions.
let a=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(420);
        },4000)
    })
}
(async()=>{
    let b=await a();        //all the things are executed time by time look like a function.
    console.log(b)
    let c=await a();
    console.log(c)
    let d=await a();
    console.log(d)
})
()