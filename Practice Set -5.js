//Qs-1 Create an Array of numbers and take input from the users to add numbers into the array.
let arr=[0,1,2,3,4,5];
let arr_input=prompt("Enter The Value of Existing Array List: ");
arr_input=Number.parseInt(arr_input); //convert into a number.
arr.push(arr_input); //Push element into the array list.
alert(arr);

//Qs-2  Keep adding number into the array until 0 is adding into the array.
let arr2=[1,2,3,4,5,6];
let arr_input2; //Mention this
do{
let arr_input2= prompt("Enter the Value: ");
arr_input2=Number.parseInt(arr_input2);
arr2.push(arr_input2);
console.log(arr2)
} while(arr_input2 != 0); //Condition 
console.log(arr2); 

//Qs- 3 Filter for numbers which can be divisible by 5 from the executing array:
let arr3=[1,5,12,10,11,9,15,20,19,50,25,100];
let arr_input3=arr3.filter((condition)=>{ //FIlter Function
    return condition%5==0;
})
console.log(arr_input3);

//Qs-4 Create an array of squire of given numbers: 
let arr4=[5,2,3,4];
let arr_input4=arr4.map((value)=>{ //Here i use map function to create that
    return value*value; //logic to use
})
console.log(arr_input4);

//Qs-5 Use reduce function to create factorial numbers: 
let arr5=[1,2,3,4,5];
let arr_input5=arr.reduce((num1,num2)=>{ //reduce function using
    return num1*num2;
})
console.log(arr_input5);