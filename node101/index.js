const leftPad = require("left-pad");
const {v4} = require('uuid')
const random = require("random-name")

const result = leftPad("Hello", 50);
console.log(result)
console.log(v4())
console.log(random.last())