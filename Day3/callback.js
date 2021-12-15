
const calculate = function(num1, num2, operation){
    const result = operation(num1,num2);
    console.log(result);
}

const add = function(n1, n2){
    return n1 + n2;
}

const multiply = function(x,y){
    return x * y;
}

const largerNumber = function(num1, num2){
    // if(num1> num2){
    //     return num1;
    // }else{
    //     return num2;
    // }
    return num1>num2 ? num1: num2
}

calculate(8,4,add);
calculate(4,5,multiply);
calculate(65,7,largerNumber)