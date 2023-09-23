//                        ----------------------String Methods:---------------------------

// *Strings are immutable because Strings does not change.

//Length:
console.log("Anupam Ghosh".length); // check the length of the string

//toUpperCase():
console.log("anupam".toUpperCase()); //create uppercase character of all the strings.

//toLowerCase():
console.log("ANUPAM".toLocaleLowerCase()); //create lowercase character of all the strings.

//Slice():
console.log("Batman".slice(0,3)); /*Slice the string, if we don't include second number then the string 
show full string of chosen character.*/

//Replace():
console.log("I Am Batman, I leave in Gotham City.".replace("Am","is")); //Replace the Sentence.

//ReplaceAll:
console.log("This Is the Best Sup in this World, I want to try this sup second time.".replaceAll("this","no"))
//replace all the character of the paragraph where the character was show.

//Concat():
let name="Batman";
let name2="KnightWing";
console.log(name.concat(" is the friend of ",name2)); //Concat/add two string.

//Trim():
console.log("   Anupam    ".trim()); //delete all the null space in the String.

//Substring():
let items="Banana, Apple, Mango";
console.log(items.substring(0,6))  //Same as Slicing but the different is mention the stop level.

//trimStart(), trimEnd(): 
console.log("   SUperman   ".trimEnd());  //Trim the string with Start Position
console.log("   SUperman   ".trimStart()); //Trim the string with End Position

//Split():
console.log("KnightWing".split())










