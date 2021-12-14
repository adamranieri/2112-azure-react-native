// JS being flexible in nature it is very common to have objects where you are not sure what the properties on the object are
// || is a guard, you can use it to check the value and return a default
// ES6 
// nullish coalesscing operating
function printFullName(person){
    const fname = person.fname ?? "no first name";
    const lname = person.lname ?? "No last name";
    const mi = person.mi ?? "No middle initial" ;
    console.log(`Welcome ${fname} ${mi}. ${lname}`);
}

const adam = {fname:"Adam", lname:"Ranieri", mi:"C"};
const ryan = {fname:"Ryan"}
printFullName(ryan)

// || and && do not work in JS like most other programming languages.
// They return the truthy value
// think of || as a selector that picks the first truthy value, or the second value if they are BOTH falsy

const x = "" || "hello";
console.log(x)// hello

const y = 0 && console.log("Hola");
console.log(y);
