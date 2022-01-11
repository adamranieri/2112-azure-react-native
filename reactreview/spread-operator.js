
const adam = {fname:"Adam", lname:"Ranieri"}
const adam2 = adam;
const adam3 = {fname:"Adam", lname:"Ranieri"}
const adamClone = {...adam}// clone the properties of adam into a new object

console.log(Object.is(adam,adam2)) // if two things are the SAME exact object return true. Based on their memory address.
console.log(Object.is(adam,adam3))// false same value but different objects in memory
console.log(Object.is(adam,adamClone))// false

//1. you need a NEW object to trigger re-render
//2. that new object is often very similary to the old object with one property changed
// Answer spread operator
const tebow = {fname:"Tim", lname:"tebow"}
const football = {postion:"qb", jersey:15} 
const player = {...tebow, ...football};// spread out the properties of each object to make a single new object

console.log(player)

