// any JS is valid TS
const x = 100;
const y = "Hello";
function greet(name) {
    console.log(name);
}
const age = 100;
let fname = "Adam";
// Java int add(int num1, int num2)
function add(num1, num2) {
    return num1 + num2;
}
const sum = add(8, 6);
function multiPrint(phrase, times) {
    for (let i = 0; i < times; i++) {
        console.log(phrase);
    }
}
// TS will INFER the types whenever possible
// TS has an any type which allows you to coerce ANYTHING, and allow anything
// You should avoid using it if possible
function hola() {
    const t = 100;
    console.log('Hola');
}
function repeat(func) {
    func();
    func();
}
repeat(hola);
