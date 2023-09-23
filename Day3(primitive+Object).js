//Primitive Datatype is JS:

/*Shortcut (NN BB SS U) 7-Primitive Datatypes:
N=Number;     B=Boolean     S=String      U=Undefined
N=Null;       B=Bigint      S=Symbol()*/

//Example's:
let a="Anupam Ghosh"; //String
let b=true; //Boolean
let c=123; //Number
let d=undefined; //Undefined
let e=Symbol("This is a Cute Symbol"); //Symbol
let f=null; //Null
let g=BigInt(420); //Bigint
let h //Undefined
console.log(a,b,c,d,e,f,g);
console.log(typeof h); // 'typeof' is use to check which type of data exist.

//Objects /Non-Primitive Datatypes:
//This is a 'Object', In Python Programming language it's called 'Dictionary'.

//Example -1:
const menu={
    "Knight":"MoMo",
    "BatMan":"Joker",
    "Robin":420,
    "Joker Girl":undefined,
}
console.log(menu["Knight"]); //Output the values.

//Example -2:
const Marks={Anupam:610,Anushka:678,Priyabrata:612,Bingo:679};
console.log("Got Marks: "+ Marks["Anushka"])
