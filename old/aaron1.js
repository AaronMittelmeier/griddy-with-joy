var msg = "test message";

var arrayone = new Array("a", "b");
var arraytwo = ["c", "d"];

console.log("array one, index 0: " + arrayone[0]);

let fruits = ["Banana"]

// almost everything in js is an object, unless it's a primitive
// primitives are not mutable, whereas all other objects are
x = 2; // primitive (we can change the value of x, but not the value of 2)

let arr = fruits; // copy by reference (two variables reference the same array)

console.log( arr === fruits ); // true

arr.push("Pear"); // modify the array by reference

console.log( fruits ); // Banana, Pear - 2 items now



// obj
//person and person2 do the same thing
// this is an object'literal' which basically means that i declare and assign value at the same time
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// use person not person2 for ease, convention
var person2 = new Object();
person2.firstName = "John";
person2.lastName = "Doe";
person2.age = 50;
person2.eyeColor = "blue";

var z = person;
z.age = 12;
// objects are always references
// this doesn't make a copy of person, it's a reference to person.
// if i change z or i change person, both will change
// person.age now equals 12

// arrays are similar to objects, but do so in an order





