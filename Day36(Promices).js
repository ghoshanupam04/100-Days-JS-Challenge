//Promise:
/* The solution to callback hell is promises. A promise is a 'promise of code execution'. The code either execute or fils in
Both the cases the solution will be notify.*/
let promise=new Promise((resolve, reject) => {
    resolve(65);
    console.log("Declare Promise")
})
console.log("Hello");
setTimeout(function(){
    console.log("This Topic is Printed time 2-Second")
},2000);
console.log("I am Anupam ");
console.log(promise);
