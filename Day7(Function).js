//                         -------------------------Functions:------------------------------

//Structure Of the Functions:
function addTwo_num(a,b){
    console.log((3+5));
}
addTwo_num();

//Q- Create a even and Odd number program using functions:
function E_vod(a){
    if(a%2==0){
        alert("The Number is Even")
    }else{
        alert("Odd Number")
    }
    return;
}
let a=prompt("Enter Your Number: ");
E_vod(a);

//Arrow Functions:
const add=(a,b,c)=>{
    return((a+b+c)*2);
}
arr_func(2,2,2)