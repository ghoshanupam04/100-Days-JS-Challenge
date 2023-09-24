/*Qs-1 Write a program to using prompt function to take input the age of visiting website.If the age is lesser 18th then
alert to visit*/
let age=prompt("Please Enter Your Age: ");
if(age<=18){
    alert("You Cannot Visit this website, The Site is Harmful For Your brain");
}
else if(age>=50){
    alert("Abbe buddha mat hila, Mar jayga bee")
}
else{
    alert("Lets Enjoy")
}

//Qs-2 Ask the user to confirm if  they want to accepts the webpage's all cookies or not.
const go_again=true;
const can_visit=(age2)=>{
    return age2>=18?true:false
}
while(go_again){
    let age2=prompt("Enter Your Age: ");
    age2=Number.parseInt(age2);
    if(can_visit(age2)){
        alert("Can Visit");
    }
    else{
        alert("Not Visit");
    }
    go_again=confirm(" Hey there, You Want to try again?");
}

//Qs-3 If the user input Negative age then return the page.
let age3=prompt("Please Enter Your Age: ");
if(age3<=18){
    alert("You Cannot Visit this website, The Site is Harmful For Your brain");
}
else if(age3>=50){
    alert("Abbe buddha mat hila, Mar jayga bee")
}
else if(age3<0){
    console.error("Please Enter Proper Age ");
    
}
else{
    alert("Lets Enjoy")
}

//Qs-4 Write a program to change the url if the user press 8 then open youtube.com
let user=prompt("Enter the Number: ");
if (user==8){
    location.href="https://www.youtube.com"  //Here redirect the location 
}
else{
    alert("Try Again")
}

