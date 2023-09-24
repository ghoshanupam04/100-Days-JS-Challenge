//                               --------------------Set--------------------

//Set: Set store unique Values.
let myset=new Set();
console.log(typeof myset);  //That is an object

//Add()
myset.add("Anupam");
myset.add("Anuska");
myset.add("Anuska");//Here this name cannot add 2nd time in this set because set store unique value.
myset.add("Rajat");
console.log("The Total Members in this sets are ",myset);

//Delete()
myset.delete("Anupam");
console.log(myset) //Delete the name into the set

//has();
myset.has("Anupam");
console.log(myset);  //If the element is exist in the set then return True otherwise False.

//Clear():
myset.clear();
console.log(myset)  //Clear all elements into the set

//
const letters = new Set(["a","b","c"]);

// ForEach();
let text = "";
letters.forEach (function(value) {
    text += value;
})

//value();
myset.value(); //Returns [object Set Iterator]

//Key():
letters.keys()   // Returns [object Set Iterator]

//  Entries()
let text1 = "";
for (const entry of myIterator) {
    text += entry;
}
