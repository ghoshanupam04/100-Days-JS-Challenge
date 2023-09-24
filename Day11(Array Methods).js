//                      --------------------------------Array Methods----------------------------------
//Tostring():
let arr=[3,0,5,1]
let b= arr.toString(); //Typecasting Object -> String.
console.log(typeof b);

//Length:
let arr2=["BatMna","Robin","RedRobin","KnightWing","DeadShoot","Joker","HarlyQuinn"]
console.log(arr2.length); //Array Length

//Join():
let arr3=["BatMna","Robin","RedRobin","KnightWing","DeadShoot","Joker","HarlyQuinn"];
let j=arr3.join(" + "); // Join the Character of each and every elements.
console.log(j);

//pop():
let arr4=["BatMna","Robin","RedRobin","KnightWing","DeadShoot","Joker","HarlyQuinn"];
console.log(arr4.pop()); // Delete the last elements of the array.
console.log(arr4);

//Push():
let arr5=["BatMna","Robin","RedRobin","KnightWing","DeadShoot","Joker","HarlyQuinn"];
arr5.push("SuperMan"); //Add the element at the last position of existing array.
console.log(arr5);

//Shift():
let arr6=["BatMna","Robin","RedRobin","KnightWing","DeadShoot","Joker","HarlyQuinn"];
arr6.shift(); //Delete the First Element of the existing array.
console.log(arr6);

//UnShift():
let arr7=["BatMna","Robin","RedRobin","KnightWing","DeadShoot","Joker","HarlyQuinn"];
arr7.unshift("WondaWoman"); //add the Element at the first position of existing array.
console.log(arr7);

//delete():
let arr8=["BatMna","Robin","RedRobin","KnightWing","DeadShoot","Joker","HarlyQuinn"];
delete arr8[5]; //delete the element of the array of consider stage, but array length is same.
console.log(arr8, "Length= ", arr8.length);

//concat():
let arr9=["Dc Character's are more powerful than Marvel Character's."];
let mc=["Yes We Know That Bro, We are Not Powerful."];
console.log(arr9.concat(mc));

//Flat():
let arr10=[[1,2],[3,4],[5,6]];
console.log(arr10.flat()); //Adding all the elements in single array object.

//Splice():
let arr11=["BatMna","Robin","RedRobin","KnightWing","DeadShoot","Joker","HarlyQuinn"];
arr11.splice(2,3,"Ironman","Halk","Thor");//Delete the first element of the array and add the new element of position.
console.log(arr11);

//slice():
let arr12=["BatMna","Robin","RedRobin","KnightWing","DeadShoot","Joker","HarlyQuinn"];
let cut=arr12.slice(3); //Slice the element of the array list and create a new array.
console.log(cut);

//Sort():
let num=[5,2,1,4,3];
console.log(num.sort()) //properly adjust the position.

//Ascending Order Sort():
let compare=(a,b)=>{ // Using Function
    return b-a; // Logic to use Ascending the format
}
let num1=[5,2,1,4,3];
num1.sort(compare);// Sorting with Ascending order 
console.log(num1);

//Reverse():
let num3=[5,2,1,4,3];
console.log(num.reverse());  //reverse the elements.



