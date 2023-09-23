//               ----------------------------------------Array-----------------------------------

/*Array
Arrays are collections of some Items. Array can hold Multiple values.*/ 

//Arrays are Mutable it can be changed.

//Define a Arrays:
let arr=["My_Name","Knight",500,"Batman",null,false,"Not Present"];
console.log(arr);

//Access the values in Array:
let name_list=["SuperMan","BatMan","WondaWomen","AquaMan","Flash"];
console.log(name_list[3])
console.log(name_list.length) //To Check Array Length

name_list.push("Robin"); //Add Elements in Array
console.log(name_list);
console.log(name_list.length);

name_list[0]="Knight"; //Changing the existing Elements.
console.log(name_list);

console.log(typeof name_list) // Type of Arrays are Objects.


// Quiz:
//Print all arrays elements using for loops:

let ar=["Anupam","Anuska","Bingo","Susmita","Disha"];
for(i=0;i<ar.length;i++){
    console.log(ar[i])
}
