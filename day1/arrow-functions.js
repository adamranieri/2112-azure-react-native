// later version of JS added arrow functions as a shorter alternate syntax for the function keyword
// *** the this keyword works differently 

// essentially identical. Just alternate syntaxes
function hello(){
    console.log("Hello");
}

let hola = function(){
    console.log('hola');
}

let gutentag = () => {
    console.log("Gutentag");
}

hello()
hola()
gutentag()

// arrow functions exist primarily to make code that is cleaner/ readable

// function greet(name){
//     console.log("Greetings " + name);
// }

// if you have 1 and ONLY 1 parameter you do not need
let greet = name => {
    console.log("Greetings " + name)
}
greet("Adam")

// an arrow function has an implicit return if you do NOT put curly brackets and the it one line

function add(num1, num2){
    return num1 + num2;
}
// the same as
let subtract = (num1, num2) => num1 - num2;
let diff = subtract(7,5)
console.log(diff)

// VERY JS
let isEven = n => n%2 === 0;

// function isEven(num){
//     return n%2 === 0;
// }
