//Conditional Statement:

//if, else if, else:
let a=prompt("Enter Your Name:"); //'Prompt()' user input process.
console.log(a);

alert("Error"); //alert() give a notification alert.

let x="Anupam Ghosh";
x=Number.parseInt(); //String to Number convert (Type casting).
console.log(typeof x)

//If - Else: (Only Browser can understand)
let age=prompt("Enter Your Age: ");
if(age>=18){
    alert("You are Adult Now")
}else{
    alert("Baccha Hai Tu Abhi.")
}

//If - Else if -Else:
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
console.log("Yor can",(voter<18? "Not vote":"Vote"))

//Switch- Case:
let items=prompt("Enter Your Items: ");
switch(items){
    case 'orange':
        alert("$500");
        break;
    case 'Mango':
        alert("$265");
        break;
    case 'Banana':
        alert("$411");
        break;
    case 'Apple':
        alert("$595");
    default:
        alert("Vag MotherFucker, Gand mai ghusa dunga wo Item Jo tujhe Chya");
        break;
}
