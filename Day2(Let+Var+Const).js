/*Var:
Before ES6(ECMAScript 6) java script "var" is used. But now that is not used properly for bug issus*/

/*const:
const use to declare Constant's. Whose value cannot be change throughout javascript program.*/

/*Let:
let use to declare block scope variable*/

var name="Anupam Ghosh";
console.log(name);

//Declare block (let):
{
    let name="KnightWing";
    console.log(name)
}
console.log(name);

//Var uses same (redeclare, update) variable in code.
var a="GO There"
var a="Come Here"
console.log(a)

//Const value does not change in the whole program.
const me="Anupam Ghosh";
console.log(me);
/*let me="Yadav";  //at this time compiler throws error because "me" is a constant variable so that cannot repeat.
console.log(me);*/