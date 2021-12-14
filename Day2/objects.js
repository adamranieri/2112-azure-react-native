// Objects in JS are much simpler than in traditional OOP languages.
// They are just key value pairs, the value can be ANYTHING, string,number a function, null
// They are not created from a class
// Objects are always mutable/editable
// each key-value pair is called a "Property of the object"

// creating an object with the curly brackets on the spot is called an object-literal
const adam = {fname:'Adam', lname:"Ranieri", age:19};
const ryan = {fname:"Ryan", lname:'Schlientz', age:27};
ryan.fname = "Steven";
adam.location = "WV";// add a new property at any time

const sierra = {
    fname:'Sierra', 
    lname:"Nicholes", 
    // a function attached to an object is a method
    sayHello: function(person){
        console.log("Hello my name is " + this.fname +" pleasure to meet you " + person);
    },
    age:19
}

// Prototypal inheritance
// JS did not have classes but you still had inheritance. One object direclty refernces another object as a prototype
// if you call a proprty on an object it will first search the object for the property then the prototpe
const walt = {fname:"Walter", lname:"White"};
walt.__proto__ = sierra; // assigned the proto property to the walt object
walt.sayHello("adam");
console.log(walt.age)
// accessing properites in JS
sierra.fname// dot notation
sierra["fname"]// brackets (identical)