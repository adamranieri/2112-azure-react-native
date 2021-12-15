
// JSON JavaScript Object Notation
// The problem, the internet and computers of the world all use different programming languages
// All these programming languages have different data types.
// Python could noe send a python class to a Java program and expect it to be understood
// Python does not have a double, Java does not have signed and unsigned numbers like C or C++

// 1. String is a datatype the every single programming language supports
// 2. If we are sending data as a string it needs to be in a standardized format
// And thus JSON was born
// JS being the language of the internet made a great lingua franca for all programs to base their libraries on

const adam = {
    fname:"Adam", 
    lname:"Ranieri", 
    age:19, 
    isTrainer: true,
    describeSelf: function(){
        console.log("Hi my name is " + this.fname)
    }
};
const jsonString = JSON.stringify(adam);
console.log(jsonString)

// when an object is respresnted as a JSON all keys are in quotes, string values are in quotes, numbers and booleans are NOT in quotes
// JSON is just a formated string

const jsonTebow = '{"name":"Tebow", "jersey":15}'
const tebow = JSON.parse(jsonTebow);
//console.log(tebow) 

// JSON is a common format for configuration files