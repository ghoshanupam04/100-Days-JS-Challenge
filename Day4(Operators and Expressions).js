//Operators:

//Arithmetic Operator:
let a=10;
let b=6;
console.log(a,"+",b,"=",a+b); //Addition
console.log(a,"-",b,"=",a-b); //Subtraction
console.log(a,"/",b,"=",a/b); //Division
console.log(a,"*",b,"=",a*b); //Multeplication
console.log(a,"%",b,"=",a%b); //Modulo
console.log(a,"**",b,"=",a**b); //Exponentiation (Calculate power)
console.log(a,"++",b,"=",++a); //Increment
console.log(a,"++",b,"=",a++); //Increment
console.log(a,"++",b,"=",a--); //Decrement
console.log(a,"++",b,"=",--a); //Decrement

//Assignment Operator:
var x=5;
var y=7;
x=5//Thit is case x assign 7
console.log(x+=y); //same as x=x+y
console.log(x-=y); //same as x=x-y
console.log(x*=y); //same as x=x*y
console.log(x/=y); //same as x=x/y
console.log(x**=y); //same as x power multiply = y

//Comperison Operator:
let x=10;
let y=11;
console.log(x==y); //Equal to case, if it is equal then return output is true, nether false.
console.log(x!=y); //Not equal Operator.
console.log(x===y); //When the types are same then return true without false.
console.log(x!==y); //Not Equal value or not equal type.
console.log(x<y); //Less than
console.log(x>y); //Grater than
console.log(x<=y); //Less than equal to
console.log(x>=y); //Grater than equal to

//Turnery Operator:
let voter=prompt("Enter You Age: ");
if(voter<17){
    alert("Not Voter");
}
else if(voter==18){
    alert("Congratilutation, Please Enter Your First Vote")
}
else{
    alert("Voter")
}
console.log("Yor can",(voter<18? "Not vote":"Vote"));

// &&-logical and
// ||= logical or
// !=logical not





