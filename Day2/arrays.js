// Arrays in JS
// 1. Dynamically resize
// 2. they can hold values of any type
// arrays are really just objects that use auto-incrementing numbers as keys
const ray = [10,null,"Hello", 6, {fname:'Adam', lname:'Ranieri'}];
//console.log(ray);

// methods with arrays

// pop removing
const lastElemet = ray.pop();// removes the last element
//console.log(ray);

// push adding to the end
ray.push("Wassup")
//console.log(ray)

// length
ray.length //it is NOT a method
//console.log(ray)

// you can access via bracket notation
// elements are 0 indexed
ray[1] = "Spiderman";
//console.log(ray)

const ssbu = ["Bowser", "link", "sammus", "joker", "dark pit"];

// traditional for loop
for(let i = 0; i < ssbu.length; i++){
    const fighter = ssbu[i];
    console.log(fighter)
}

// "for of" loop convienient syntax for the above
for(const fighter of ssbu){
    console.log(fighter)
}

//"for in" loop is for OBJECT PROPERITES NOT ARRAYS
const postage = {sender:"Adam", recipient:"Ryan", address:"Morgantown West Virginia"};

for(const key in postage){
    console.log(key); // way to loop over the keys in an object
}

