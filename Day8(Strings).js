//                 -------------------------------------Strings:-------------------------------------

let name="Anupam Ghosh";
console.log(name.length);  //Print my name length 

//'Name' Single court supported in this. 

//Slicing String:
let my_name="Batman";
console.log(my_name[0]) //Print the first character of that string.

//Template literals:
let character1="Batman"
let character2="Robin";
let relation=`${character1}'s is the father of ${character2}`; //Backtick 
console.log(relation)

let me="My name is ${name}"; //That is Called String interpolation:
//example:
function myInfo(fname, lname, country) {
    return `My name is ${fname} ${lname}. ${country} is my favorite country`; 
}
console.log(myInfo("john", "doe", "India"));

//Escape-Sequence  Character:

//In single court use a another single court '\':
let dark="Robin is Batman\'s Son";
alert(dark);

//'\n= Next Line':
let info="I am Anupam Ghosh\n I\'m BCA 3rd Year Student";
console.log(info);

//'\b= Backspace'
let car="i bought\bcar";
console,log(car);

//'\f=From Feed':
let supe="That is a\fDog";
console.log(supe)

//'\r=Carriage Return':
let supe1="That is a.\rDog to learn";
console.log(supe1)