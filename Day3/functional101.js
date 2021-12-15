// Functional programming is a paradigm of programming much like OOP
// Imperative, declarative, aspect
// No paradigm is inherently better. Pick the best tool for job

// First class functions, first order functions
// a function IS an object, it is a datatype with a value that can be passed around in the program like any other value

const hello = function(){
    console.log('Hello');
}

const hola = function(){
    console.log('hola')
}

const add = function(num1, num2){
    return num1 + num2;
}

const func = add // func variable holds a function definition
const result = add(12,4)// result variable holds the return from the invocation of that function
const sum = func(12,4);

// Callback functions are functions that are passed as a PARAMETER to another function
// higher-order-function takes in the callback function
const repeatTwice = function(callback){
    callback();
    callback();
}

repeatTwice(hello);// I am not invoking hello here
repeatTwice(hola)