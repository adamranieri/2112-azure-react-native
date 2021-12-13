// function is a named routine in a programming
// why write functions
// 1. generalize your logic
// 2. avoid repeating yourself
// 3. divide and conquer

// JS is a functional programming language, (bills multi-pardigmed) (derisively a cake-salad)
function hello(){
    console.log("Hello");
}

function greetPerson(person){ // no types on parameters
    console.log("Greetings " + person);
}

greetPerson()//  JS will invoke the function even without parameters. It will a default value of undefined for any parameters
greetPerson("Ryan", "literally useless", 45);// The extra parameters are just ignored

function add(num1 , num2){
    return num1 + num2;
}

const sum = add(10);

function subtract(num1 , num2 = 0){
    return num1 - num2;
}

let diff = subtract(100);
console.log(diff)

// JS DOES NOT support overloading!!!!
// you cannot write two functions with the same name but different parameters
// the second function will overwrite the first function

function hola(){
    console.log("hola");
} // gets overidden zero benefit

function hola(name){
    console.log("hola " + name);
}

hola()
hola("sierra")

