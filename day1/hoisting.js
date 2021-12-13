
// var variables get hoisted in functions
// JS BEFORE executing a function, will read through the function and allocate memory for variables in it
// the default value in JS is undefined
function greet(){
    console.log(x)// with var you could use a variavle BEFORE it was created in the
    var x = 100;
}

greet()