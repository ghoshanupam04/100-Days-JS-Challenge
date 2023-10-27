//Arrow Functions Revisited:

//Write Arrow Function with unique
/*let hello = (name,company) => console.log(company+": Hello Coders\n"+name+" Welcome To Our Company.");
hello("Knight","Google");*/

/*in Function this is a Global/Window Object */
const a = {
you: "Anupam Ghosh",
role: "Software Developer",
Experience: "2-Years",
Company: "Microsoft",
show: function () {
    console.log(this)//Here the code are run
    let that=this
    setTimeout( ()=> {
        console.log(this)//here it is a Window Object
    console.log(
        `My Name is ${that.you}.\nI am a ${that.role} in ${that.Company} India.\nI have ${that.Experience} Experience`
    );
    },2000);
},
};
a.show();
