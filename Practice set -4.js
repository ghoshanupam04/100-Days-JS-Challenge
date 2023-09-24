//Q1- What will be the following print in JS :
console.log("anu\"".length) //The length is 4 because '\' is a escape sequence character.

//Q2- Explore the 'include', 'startswith', 'endswith' function of a string:
//include():
let sentence="The DC Comic are the latest and popular comics in the current Situation and The BatMan.";
let hero="The BatMan";
console.log(sentence.includes(hero)); //Return True if the hero is present in sentence
console.log(`There are "${hero}" "${sentence.includes(hero)? 'is' : 'is not'} in the Comics`);
//Startswith():
let example="This is the best part of the pizza";
console.log(example.startsWith('This')) //If the starting word is same then o/p is True.
//endsWith():
console.log(example.endsWith('pizza'));

//Q3- Write a program to convert a String in to lowercase:
let example2="THE MAN CAN EAT FOOD";
console.log(example2.toLowerCase());

//Q4- Extract the amount out of the string:
let amount="I have now $500";
let main=amount.slice(11);
console.log(main);

//Q5- Try to change the character in the string:
let chr="My Name is BatMan";
console.log(chr.replace('BatMan',"BrusWing"));  //String is Immutable but a character is not changed.

