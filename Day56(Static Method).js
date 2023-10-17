//Static Method:
/*A static method is a method that belongs to a class rather than an instance of a class. */
class Animal{
    constructor(name){
        this.name=Animal.capitalize(name)
    }
    walk(){
        console.log(this.name+" Walk With 4-legs.")
    }
    static capitalize(){
        return name.charAt(0).toUpperCase()+ name.substr(1,name.length);
    }
}
let a=new Animal("Suvra")
a.walk()