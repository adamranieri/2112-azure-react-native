# Week 1 Review

# JavaScript
- High Level Programming language
    - Automatic memory mangagment
    - Cannot do low level things like pointers, or free up memory, or specifc data structres
- Orginally designed as the programming language in Web Browsers
- Brendan Eich designed it in 9 days
    - Has a lot of quirky design decisions
- JS was designed with ***Flexiblity*** as it's guiding principle
    - Python *Readable*
    - Java *Scalable*
    - Scala *Scalable*
- **ECMA**
    - European Computer Manufacturer's Associates
        - Empty acronym
    - They are in charge of JS standards
        - They do not write JS itself they define EcmaScript which JS is an implmentation of
- **JIT** Just in time compiled language
    - JS code is read and then immediately executed by the runtime environment
    - **interpreted**
        - Read and executed line by line
        - Generally less efficient then a compiled language
            - JS
            - Python
            - Ruby
    - **Compiled**
        - Read the ENTIRE program code
        - Generate an executable optimized for that machine
            - C
            - Rust
            - Java
## Syntatical features of JS

### Loosely/dynamicly Typed language
    - No need to declare the type of the variable
```JavaScript
let x = 100;
let y = "Hello"
```
- Weakly Typed Language
    - Variables will have their types implcitly coerced
```JavaScript
const sum = true + true + true; // 3
```

### Scopes

- Scopes in JS
    - Global
        - No keyword (almost always avoid)
    - Function
        - var (always avoid)
    - Local
        - let
        - const
- Scopes are defined using keywords

```JavaScript
function a(){

    var x = 100;// function scoped

    if(true){
        let y = 50;// block scope
    }

    z = 10;// global
}
```

### Data Types
- 7 primitives in JS
```JavaScript

    const num = 10// number
    const name = "adam"// string
    const n = null;// null
    const u = undefined // undefined
    const b = true;// boolean
    // symbol
    // bigInt
```
- Primtives in JS ARE objects
- Primitive is a semantic term in JS

### Type Coercion
- JS has extremely aggressive type coercion
    - Follows from the weak typing
- JS will coerce values into other types ALL of the time

#### Truthy Falsy
- How JS coerces data into boolean values
- There are 6 FALSY values
- Everything else is truthy
- All Falsy values imply nothingness
```JavaScript
null
0
""
undefined
false
NaN
```
- Loose Equality
    - ==
    - Will perform type coercion
- Strict Equality
    - ===
    - will not perform type coercion

### JS Fancy Syntax

#### Object Deconstruction
```JavaScript
const adam = {fname:"adam", lname:"Ranieri", age:19}
const {fname, lname}  = adam
// equivalent to 
const fname = adam.fname
const lname = adam.lname;
```

#### Array Deconstruction
```JavaScript
const ssbu = ["Bowser", "link"]
const [bowser, link] = ssbu;
// equivalent to
const bowser = ssbu[0]
const link = ssbu[1]
```

### Spread Operator
```JavaScript
const ssbu = ["Bowser", "Link", "Pit"];
const streetFighters = ["Ken", "Ryu", "Bison"];
const fighters = [...ssbu, ...streetFighters];

const location = {state:'wv', town:"morgantown"};
const trainerDeatils = {fname:'adam', lname:'ranieri', age:19};
const adam = {...location,...trainerDeatils};
```

### Template Literal
```JavaScript
function greetPerson(person, age){
    console.log(`hello ${person} you are ${Math.round(age)} years old`);
}
```

### Default Parameters
```JavaScript
function subtract(num1 , num2 = 0){
    return num1 - num2;
}
```

### Arrow Functions
- Arrow functions are an alternate syntax for more succint function declarations
    - Especially for anonymous functions
    - the 'this' keyword does work different
    - constantly bound to the same refernce and declaration
- Golden Rule
    - If you have a function that wants to use the this keyword, you want a function not arrow function
```JavaScript

function add(num1, num2){
    return num1 + num2;
}
// the same as
let subtract = (num1, num2) => num1 - num2;
let diff = subtract(7,5)

// VERY JS
let isEven = n => n%2 === 0;

```
### Enhanced Object Literals
```JavaScript
const ryan = {
    fname:"Ryan",
    sayHello(){
        console.log('Helly my name is ' + this.fname);
    }
}
```

### Guards
- JavaScript && and || are not your typical and and ors from other langugaes
- They Select the truthy value
```JavaScript
    const x = "" || "hello";
    console.log(x)// hello
```

### Switch 
```JavaScript

const x  = 10;

switch(x){
    case 10 : {block of code}
    case 12 : {block of code}
    default : {block of code}
}

```

### Enhanced For loops
```JavaScript
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
```
## OOP in JS
- JavaScript is a cake-salad of programming paradigms
- JS does support some aspects of OOP
    - **Prototypal** inheritance
        - An objects directly references another object
    - **Classes**
        - ES6 feature
        - Essentially just an alternate syntax for some nested functions
- most objects in JS are created via object literal syntax
```JavaScript
// key:value pairs. each pair is called a property
const postage = {sender:"Adam", recipient:"Ryan", address:"Morgantown West Virginia"};
```
- Constructor functions are a way to create a template object 
    - Not as common now that Classes in JS

## Functional Programming in JS
- JS is a very functional programming language
- Functional Terminology
    - **First Class Functions**
        - A function IS an object 
        - Functions can be stored in varaibles and passed around in the program
        - Functions are dynamic and can be created at runtime.
    - **Callback Function**
        - A function is passed as a **argument** to another function
        - Ubiquitous in JS
    - **Higher Order Function**
        - A function that takes in a callback function
    - **Anonymous Function**
        - A function defined *on the spot* that has no name
        - Very common with callbacks
    - **Closure**
        - A function returned from another function maintains the reference to a variable defined in the outer function

## Errors
- In JS Errors can be anything
    - You can throw a number, or a string, anything and it generates an error
- JS has only runtime errors
    - No checked exceptions
    - No way to see if a function might throw an error
- There is an Error class 
    - A utility rather than an established standard or offical Error handling hierarchy
- Errors exist to provide the programmers information when things fail
    - Where it went wrong
        - Stack Trace
    - What went wrong
        - message attached to the error object
    - Possible Solutions
        - message attached to the error object
- Keywords
    - try 
        - A block of code you are trying to execute but might throw an error
    - catch
        - A block of code that is called if an error is thrown
    - throw 
        - creating an error
        - immediately stops execution and is caught at the nearest catch block
    - finally
        - block of code at the end of a try catch that always executes
```JavaScript
function validUsername(username = ''){
    if(username.length <6){
        const error = new InvalidUsernameError(`username was of length ${username.length} but must be at least 6 character long`, "try adding numbers at the end")
        throw error// by throwing we are FORCING the developer to deal with the failure
    }
    if(username.includes('!') || username.includes(';')){
        throw new InvalidUsernameError(`username included an invalid character. Invalid characters are ! ;`, "avoid special chracters")
    }
    return {status:"success"};
}

try {
    const isValid = validUsername('hank95');
    console.log(isValid)
} catch (error) {
    console.log('The user tried to create a username but failed beacuse ' + error.message)
    console.log("Possible solution " + error.solution)
}finally{
    console.log('block of code that will always execute')
}
```

## TypeScript
- A superset of JavaScript
    - Any valid JS is valid TS
- TypeScript supports features JS does not
    - Static typing 
        - optional in TS
    - Generics for arrays
    - More OOP support
        - Access modifiers for properties of a class
        - Shorthand syntax for classes
        - interfaces 
            - A list of properties the object must have
- Configurable language
    - **tsconfig.json**
        - A configuration file for any TS in a folder
        - Can be used to make your TS as strict or as lenient as you want
- You cannot directly execute TS files 
    - TS must be **transpiled** into JS first
    - You can choose how this transpilation occurs
        - what verion of ES
- TS-Node
    - It is a very helpful NPM install 
    - Transpiles TS into JS as it runs
        - IT still goes through that process of transpiling it just does it under the hood

## Node.js
- It is a runtime environment for JS.
- It is used to run JS applications outside of the browser.
    - It was not the first to run JS outside of the browser
    - It was the first one that was good.
- Ryan Dahl from google create it
- ***NPM*** node package manager
- The build tool and dependecy manager for node.js applications
- It is also a repository of JavaScript libraries
- ***package.json***
    - The core configuration file of any node project
    - depenencies
        - what outside JS libraries you incorporated
    - Author
    - License
    - Description
```bash
    npm install somepackage
    npm init 
```
# Web Servers and HTTP
- The best program in the world means nothing unless people have some way to communicate with it.
    - Desktop Application which uses a Graphical User Interace
    - A console applications that just prints to the terminal and people type into it
    - ***Web Servers*** are programs/appplications that can take in inupts via HTTP.

## HTTP
- HTTP **Hyper Text Transfer Protocol**
- It is a request response based protocol.
    - A user/client makes an **HTTP Request** 
    - The server/web-server responds with an **HTTP Response**
    - Every Request is guaranteed to generate a response
- Web Servers and HTTP are supposed to be Language Agnostic
    - The client does NOT need to know what programming language the server is written

## Anatomy of an HTTP or HTTP(S) Request and Response
- **Request**
    - URL
        - Uniform Resource Locator
        - The address of where to send the Request
    - Verb
        - The type of HTTP Request it is
            - GET - (*usually* for retrieving information)
            - POST
            - PUT
            - DELETE
            - PATCH
    - Headers
        - Key value pairs that contain meta-data on the request
            - The content-type (image, text, JSON, etc...)
            - Authorization (specific Key necessary for security)
    - Body
        - Main content of a request
        - OPTIONAL
            - Requests do not NEED to send content
- **Response**
    - Status Code
        - a number indicator how the request was processed
        - 100's information
        - 200's success
        - 300's redirects
        - 400's client error
            - 403 client does not have appropriate access
            - 404 client requested a URL that does not exist
            - 451 Unavailable for legal reasons
        - 500's (server error)
    - Body
        - OPTIONAL
        - content
    - Headers
        - key value pairs

## Express
- Express is a micro-framework for creating web-servers in node
- Very popular.
- Route Handling
    - app.httpVerb("/uri", handlerFunction)
```TypeScript
app.get("/hello", (req, res)=>{
    res.send("Hello Everybody");  
});

app.get('/greet/:fname', (req,res)=>{
    const name: string = req.params.fname;
    res.send(`Great to meet you ${name}`);
});
```
- Express Middleware
    - Term somewhat invented by Express
```TypeScript
app.use(express.json());// middleware is code that will be applied to all routes
// the software is in the middle of a client making an http request and your code that handles that http request
```