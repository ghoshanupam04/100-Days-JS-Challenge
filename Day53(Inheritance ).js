//Inheritance using extends Keyword:
//When One Class Access The Property of another class thats called Inheritance.
//Example:
class Animals{
    constructor(name,color){
        this.name=name;
        this.color=color;
    }
    run(){
        console.log(this.name+ " was Run First. Color of this animal is "+this.color);
    }
    shout(){
        console.log(this.name+ " was Shout Loudly. Color of this animal is "+this.color)
    }
}
class Fish extends Animals{ //Here Extends the classes and inherit the property of Animal Class
    Swimming(){
        console.log("Eat and Swimming")
    }
}

let Ani=new Animals("Black Panther","Black");
let Fishes=new Fish("Gold Fish","Orange");

Ani.run();
Fishes.Swimming()
