//Create Game: Guess The Number Game:
let number=Math.floor(Math.random()*11);
let user_inp=prompt("Enter The Number BTW 1-10: ");
user_inp=Number.parseInt(user_inp);
let count=0;
do{
    if(user_inp>number){
        alert("The Given Number is Greater.");
        user_inp=prompt("Try Again!");
        user_inp=Number.parseInt(user_inp);
        ++count
        continue;
    }
    else if(user_inp<number){
        alert("The Given Number is Leaser.");
        user_inp=prompt("Try Again!");
        user_inp=Number.parseInt(user_inp);
        ++count
        continue;
    }
}while(number!=user_inp);
let total=10-count
console.log("Congratulation! Win The Game.\n Your Enter The Number= "+user_inp);
console.log("The Random number is "+number+"\nThe Total Score is: "+total);


