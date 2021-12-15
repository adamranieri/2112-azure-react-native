// Functions are objects
// functions can ce created dynamically just like any other object

// A closure is a function that returns an object or other function that has enclosed another variable within the outer function
function createPerson(fname, lname, ageParam){

    const fullName = `${fname} ${lname}`;
    let age = ageParam;

    function describeSelf(){
        console.log(fullName) // when describeSelf was defined it pointed to fullName somewhere in memeory
        // describeSelf ENCLOSES fullname
    }

    function getAge(){
        return age;
    }

    function setAge(num){
        if(num> 0){
            age = num;
        }
    }

    return {describeSelf, getAge, setAge}

}

const adam = createPerson("Adam","Ranieri",19); // fullName = "Adam Ranieri";
const bill = createPerson("Bill", "Smith",40); // fullName = "Bill Smith";
adam.describeSelf();// describeSelf will always use the variable that it was created with
bill.describeSelf();
console.log(adam.getAge())
adam.setAge(-90);
console.log(adam.getAge())

// closure
function outer(value){
    const v = value;

    function printValue(){
        console.log(v)
    }

    return printValue;
}


// factory functions

function greetGenerator(name){
    const n = name;

    function hello(){
        console.log("Hello " + n);
    }

    return hello;// return the function DEFINITION not the return from the invoked function

}

const adamGreet = greetGenerator("adam");
const johnGreet = greetGenerator("John");
adamGreet()
johnGreet()

