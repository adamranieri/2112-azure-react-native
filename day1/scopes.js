
// JS has three scopes
// 1. Global scope (almost never use)
// 2. function scope (Never use)  friends do not let friends use var
// 3. local scope (99% of your code)
// In JS scope is based on the keyword a variable is first declared with
// global (nothing, defaults to global)
// function (var)
// local (let, const)

function bonjour(){
    var fname = "Francis";// let is local the variable is usable only within the brackets it was declared in
    console.log(fname)
}

function ciao(){
    var fname = "Pietro"; // global variables are a great way to make your code hard to follow
    console.log(fname)
}

// bonjour()
// ciao()
//console.log(fname) // pietro

function hello(){

    if(true){
        let x = 100; 
    }
    console.log(x) // does not work. x is local scope and bound within the curly brackets it was declared in
}

function hola(){
    if(true){
        var y = 1000;
    }
    console.log(y)// works because a var variable is scoped to the FUNCTION not the brackets it was declared in
}

hola()

// let and const are the way to go
// alwaus use const UNLESS you have a specific reason to let. Just good practice
function add(num1 , num2){
    const sum = num1 + num2;
    return sum;

}

console.log(add(10,4))