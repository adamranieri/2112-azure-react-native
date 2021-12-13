// comment
/** also comment */

// JS is a loosely and dynamically typed language
// dynamic - You do not need to declare the type of a variable when create it
// loose - variables can be implicity coerced into other types 

// Dynamic
const name = "Adam"; // semi-colons are optional in JS but I reccomend using them
const age = 19; 
const isTrainer = true; 

// loosely typed (Type Coercion)
const result = true + true - false + true;// JS implictly turned trues into 1 and falses into 0, (this behavior causes a lot of bugs)
console.log(result);
