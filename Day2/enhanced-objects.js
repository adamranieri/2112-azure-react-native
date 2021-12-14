// ES6 added some shorter syntax for common operations dealing with object literals
// object literals might be 90% of all the objects you create in JS
// do not add any new functionality. just shorter syntax
const fname = "Rover";
const age = 9;

const dog = {fname:fname, age:age};// super common JS, create an object based off of variables
console.log(dog);

const enchanedDog = {fname, age};// shorthand will create a dog with those properties identical to line 6
console.log(enchanedDog);

// directly add methods to object literals
const adam = {
    fname:"Adam",
    sayHello: function(){
        console.log("Hello my name is " + this.fname);
    }
}

const ryan = {
    fname:"Ryan",
    sayHello(){
        console.log('Helly my name is ' + this.fname);
    }
}

adam.sayHello()
ryan.sayHello()