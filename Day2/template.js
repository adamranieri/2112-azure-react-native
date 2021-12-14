// ES6 Feature
// template literals having NOTHING to do with object literals
// a convienient syntax for string interpolation
const fname = "Adam";
const lname = "Ranieri"
//const fullName = fname + " " + lname;
const fullName = `${fname} ${lname}`;
console.log(fullName);

function greetPerson(person, age){
    console.log(`hello ${person} you are ${Math.round(age)} years old`);
}

greetPerson("Bill",40.123123151);
