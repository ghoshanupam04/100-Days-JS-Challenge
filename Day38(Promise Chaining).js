//Promise Chaining:
/* We can chain promises and make them pass the resolved value to one another like this.*/
//Example:
let p=new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("This is Resolve Value");
        resolve(56)
    },2000)
})
p.then((value)=>{
    console.log(value);
    let p1=new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve("Promise 2")},2000)
    })
    return p1;
}).then(value=>{
    console.log("Done");
    return 2;
}).then((value)=>{
    console.log("Fully Done the Program")
})

//Create a loadScript program using Promises.
let load_script=(url)=>{
    return new Promise((resolve,reject)=>{
        let script=document.createElement("script");
        script.src=url;
        document.body.appendChild(script);
        script.onload=()=>{
            resolve(1);
        }
        script.onerror=()=>{
            reject(0);
        }
    }) 
}
let p1=load_script("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js");
p1.then((value)=>{
    console.log(value)
}).catch((value)=>{
    console.log("Sorry Sir One Error Found In The Program")
})