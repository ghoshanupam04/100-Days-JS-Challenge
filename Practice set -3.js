//Q1- Write a program to print the marks of a student in an object- {Anupam:93, Anuska:95, Akash:78, Akansha:100} using loop:
let student={
    Anupam:93,
    Anuska:95,
    Akash:78,
    Akansha:100
}
for(let key in student){
    console.log(key+" Got "+student[key]);
}

//Q2- Write a program to print 'tryagain' until the user print corrnet number:
let correct=4; //That is Correct number
let num=prompt("Enter The Correct Number: ") //User Input
if(num==correct){ //Check the Conditions
    alert("The Number is Correct")
}else{
    alert("Try again");
}

//Q3- Write a program to print 'try again' until the user print correct number Using function: 
function chech(num){
    let correct= 4
    if(num1==correct){
        alert("Correct")
    }else{
        alert("Try Again")
    }
}
let num1=prompt("Please Enter Your Number to Check the Number is Correct or Not: ");
chech();

//Q4- Write a program to print 'try again' until the user print corrnet number Using loop: 
let cor=4;
let i=0;
while(i!=cor){
    i=prompt("Enter The Correct Number: ");
    alert("Try Again:")
}
alert("Ok! You are Properly Entered.")

//Q5- Write a function to find mean of 5 numbers:
function mean(a,b,c,d,e){
    console.log((a+b+c+d+e)/5);
}
mean(2,3,4,5,6);