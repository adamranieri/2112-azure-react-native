// Arrays have several methods that take in a callback function as a parameter
// forEach, map, filter

const nums = [10, 35, -6, 8, -10, 1];

const isNegative = function(num){
    return num < 0;
}

//const noNeg = [];
//
// for(let i = 0; i < nums.length; i++){
//     const n = nums[i];
//     const negative = isNegative(n);
//     if(!negative){
//         noNeg.push(n);
//     }
// }
// console.log(noNeg)

const negatives = nums.filter(isNegative); // filter method with use the provided callback and pass every element in the array to that callback
// if the result of that function is true it is added to a new list, if it is false it is ignored and not added
const isPositive = function(num){
    return num >= 0;
}

const positives = nums.filter(isPositive);

// callbacks lead to a lot of one off functions in your program
// anonymous functions are functions defined on the spot never stored in a variable, hence it does not have a name

const evenNumbers = nums.filter(function(n){
    return n%2 === 0;
});

const oddNumbers = nums.filter(n => n%2 === 1);
console.log(oddNumbers)

const noNegatives = nums.filter(n => n>0);