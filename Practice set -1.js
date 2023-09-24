//Q1: Creatw a  String type variable and insert a number:
let name="This is a String type variable.";
console.log(typeof name); //Output 'String' Type variable
let Course="BCA";
console.log(name+"I am "+Course+" last year Student.") //Concatinate the variables.

//Q2: How to know Datatype in JS:
let value=true;
console.log(typeof value); // use 'typeof' operaator to know the datatype of this variables.

//Q3: Create a const object, Can you change it to hold a number later:
const names={
    name1:"Anupam", name2:"Goku",name3:"Gohan"
}
names="Anupam";// Error!  No, not hold.

//Q4: Try to add anew Key in Const Object:
const names1={
    name1:"Anupam", name2:"Goku",name3:"Gohan"
}
names1[name4]="Anuska"; //Add a new Key in Object.
console.log(names1);

//Q5: Create a Dictionary:
const dict={
    cow:"Goru",
    Dog:"Kukur",
    Cat:"Biral",
    Horse:"Ghora",
    Pig:"Suorer Baccha"
}
console.log(dict["Horse"]);