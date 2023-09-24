//Map():
let arr=[21,24,27];
let a=arr.map((value, index, array)=>{  //Map Function create a New Array.
    console.log((value , index, array));
    return value+1;
})
console.log(a)
console.log(arr);

//Filter():
let arr2=[5,10,15,20,25,30,35,40,45,50];
let a1=arr2.filter((condition)=>{  //Filter function can use when a operation was perform and create a new array.
    return condition<25;
})
console.log(a1);

//Reduce():
let arr3=[1,2,3,4,5,6];
let arr_ret=(a1,a2)=>{
    return a1+a2;
}
let result=arr3.reduce(arr_ret);  //add the element and reduce an array from a single value.
console.log(result); //O/P=>(1+2+3+4+5+6=21)

