
const weightsLb = [17, 23.4, 9, 2];

const lbToKilo = function(lb){
    return lb*0.45;
}

const kilos = weightsLb.map(lbToKilo);// map will invoke the callback on each element in the array.
// And use the return value of the callback to create a new array
console.log(kilos)

// maps expect a function that takes in 1 argument and returns some value => a new array
// filter expectsa a function that takes in 1 argument and returns true or false => a new array
// forEach expects a function that takes in 1 argument and does not return anything => creates nothing

//print out all elements over 5kg in weight
const ray1= weightsLb.map(lbToKilo).filter(n => n>5).forEach(n => console.log(n))

// callbacks say HOW to to to something, callback equals the implementation