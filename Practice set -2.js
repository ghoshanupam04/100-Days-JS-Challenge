//Q1- Create a program to use logical oprator to find weather the age of a person lies between 10 and 20:
let age=prompt("Enter Your Age: ");
if(age>=10 && age<=20){
    alert("Tu mera Baccha Hai");
}else{
    alert("VSDk")
}

//Q2- Demostrate the use of Switch case statement is Javascript:
//Calculator:
let fst=prompt("Enter The First Number: ");
let oper=prompt("Enter The Operator which do you use: ");
let snd=prompt("Enter The Second Number: ");
switch(oper){
    case '+':
        alert(fst+snd);
        break;
    case '-':
        alert(fst-snd);
        break;
    case '*':
        alert(fst*snd);
        break;
    case '/':
        alert(fst/snd);
        break;
    default:
        alert("Gaddri karbe trere BSDK");
        break;
}

//Q3- Write a Javascript Program to find weather a number is divisible by 2 and 3:

let num=prompt("Enter Your Number: ");
if(num%2==0 && num%3==0){
    alert("Yes The Number is Divisible by 2 and 3.");
}else{
    alert("Not Divisible")
}

//Q4- Write a Javascript Program to find weather a number is divisible by ither 2 and 3:
let numb=prompt("Enter Your Number: ");
if(numb%2==0){
    alert("Yes The Number is Divisible by 2 ");
}
else if(numb%3==0){
    alert("Yes The Number is Divisible by 3 ");
}
else{
    alert("Not Divisible")
}

//Q5- Create a Licence create application:
let your_age=prompt("Age: ");
let a=your_age>18? "Drive":"Not Drive";
alert(a)