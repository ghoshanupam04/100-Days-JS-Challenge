//This is Practice set -12:

//Q:1- Write a JS Program to print 'Hello World' after 2-second-
function func1() {
    setTimeout(() => {
    console.log("Sorry For Waiting 2-second\nHello World"); //run this after 2-second
    }, 2000);
}
func1(); //Call the Function

//Q:2- Write a JS Program to find average numbers in an array using spread operator-
const arr=[5,6,7,8];
const obj={...arr};
function fx(v1,v2,v3,v4){
    console.log("The Average of the Numbers is: "+(v1+v2+v3+v4)/4)
}
fx(...arr)

//Q3: Write a JS Function Which resolve a Promise after n Second. Use IIFE:
let ife=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("This is 420 Roll Number")
        },4000)
    })
}
(async()=>{
    let op1=await ife();
    console.log(op1)
    let op2=await ife();
    console.log(op2)
    let op3=await ife();
    console.log(op3)
})
()