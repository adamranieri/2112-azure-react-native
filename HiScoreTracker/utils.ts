
// any function, class, interfact, variable that you want to use OUTSIDE this file you must slap an export in front of it
export function add(num1: number, num2: number): number{
    return num1 + num2;
}

// the only thing default does is remove the need for curly brackets when importing
// you can have only 1 default export per file
export default function multiply(num1: number, num2: number): number{
    return num1 * num2;
}