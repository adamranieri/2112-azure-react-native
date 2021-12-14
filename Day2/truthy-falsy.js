// JS has very aggressive type coercion. 
// JS will compare apples to oranges even if they are both banannas
// console.log( 3 < 5)// true
// console.log( 5 == 5)// true
// console.log( 5 == "5")// true JS will coerce strings into numbers to make a comparison to number
// console.log( 5 == "7a")// false
// console.log( true == 1);// true
// console.log( true == "1");// true
// console.log( true/true-true == 0 + "" )//true
// console.log(0 == "") // true
// console.log({} == 0 )// false
// console.log({x:10} == 0 )// false

// there are inherently true and false values
// the falsy values, everyting else in JS is inherently truthy
console.log(Boolean(0))//false
console.log(Boolean(null))// false
console.log(Boolean(undefined))// false
console.log(Boolean(''))// false
console.log(Boolean(NaN))// false, NaN is the value when JS computes a value that is not real
// they all imply nothingness

const x = "Wassup" - "Cool";
console.log(x == x)

// === strict equality operator
// the type and the value must be the same
console.log(5 == "5")// true
console.log( 5 === "5" )// false
// YOU SHOULD ALMOST ALWAYS USE STRICT EQUALITY