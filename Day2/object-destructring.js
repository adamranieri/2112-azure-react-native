// destructing is a way to create individual variables based on an object
function greetPerson(fname, lname){
    console.log("Pleasure to meet you " + fname + " " + lname);
}

const adam = {fname:"Adam", lname:"Ranieri", age:19, location:"West Viginia"};
const {fname,lname} = adam; // creates two new variables, the name has to match
// equivalent to
// const fname = adam.fname
// const lname = adam.lname
greetPerson(fname, lname);