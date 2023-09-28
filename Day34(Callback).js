//synchronous Programming / Step by Step execute in the program
//Example:
let name=prompt("Entre Your Name: ");
let age=prompt("Entre Your Age: ");
let color=prompt("Entre Your Fav Color: ");
alert("I am "+ name +". I am "+age+"years old Boy,  My Fav Color is "+color+".");

//Asynchronous Programming's if execute in the program then that always completeExecute in the code.
//Example" all codes are execute.
console.log("Start Program");
setTimeout(function(){
    console.log("This is a Notification")  //background run, time wise
},3000)                   
console.log("End Program");

//Call Back Function:
/*A callback function is a function passed into another function as an argument which is then invoked inside the outer
function to complete an action*/
function load_script(url){
    var script=document.createElement('script');
    script.src=url
    document.body.appendChild(script)
}
load_script('www.google.com')
