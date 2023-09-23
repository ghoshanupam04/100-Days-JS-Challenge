//                            ----------------------------Loops-----------------------------------

//For Loop:

//Loop Structure -
for(i=0;i<11;i++){
    console.log(i);
}

//Example 1: 
let n=10;
for(i=0;i<n;i++){
    console.log(i+"Anupam")
}

//Program to add First n Natural number:
let sum=0;
let num=4;
for(i=0;i<num;i++){
    sum+=(i+1);
}console.log(sum);

//For-in Loop:
let obj={
    Anupam:55,
    Priyanka:56,
    Priyabrata:18,
    arif:19
}
for(let i in obj){
    console.log("Marks of"+ i+" are "+ obj[i]+" Obtained.");
}


//For-OF Loop;
for(let a of "Anupam"){
    console.log(a)
}

//While Loop:
let num1=prompt("Enter The Number: ");
let i=0;
while(i<=num1){
    console.log(i);
    i++
}

//Do-While loop:
do{
    console.log(i);
    i++
}while(i<10)


//Task:
let name="Anupam Ghosh";
for(i=0;i<name.length;i++){
    console.log(name[i])
}

//Squire Print using forEach Loop:
let num0=[2,5,4,7];
num0.forEach((elements)=>{   //forEach  use to perform a operation.
    console.log("Squire of the array elements are=", elements * elements)
})


//form():
let name1="Anupam";
let arr=Array.from(name1); //Print each character in the array.
console.log(arr);