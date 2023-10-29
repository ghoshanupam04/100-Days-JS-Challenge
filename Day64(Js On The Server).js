//Node JS Intro:
const value=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Hello Coders...")
        },3000)
    })
}
async()=>{
    let a=await value();
    console.log(a)
}