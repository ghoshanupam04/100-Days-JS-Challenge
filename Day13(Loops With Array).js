//Squire Print using forEach Loop:
let num=[2,5,4,7];
num.forEach((elements)=>{
    console.log("Squire of the Array elements are=", elements * elements)
})

//form():
let name="Anupam";
let arr=Array.from(name); //Print each character in the array.
console.log(arr);

//For_of:
let num1=[1,2,3,4,5];
for(let i of num1){ //To access array items
    console.log(i);
}

