//Block Element: 
/*let and const provide Block Scope*/
/*Block and Function Scope are Local Scopes*/
{
    let a=15;
}
console.log(a) // a- is not available here 
//Example:
{
    var num=15
}
console.log(num) //var is available here.

//Function Scope:
function fx(){
    const num2=45;
    console.log(num2)
}
fx()

//Global Scope:
let p=9  //Global Scope execute everywhere
function fx(){
    const num3=45;         
    console.log(num3)
    console.log(p)
}
fx()
console.log(p)