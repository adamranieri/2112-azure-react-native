// Errors are a DEBUGGING/PROGRAMMING tool
// Errors are a way to send information about failures in the program
// 1. Where it occured
// 2. Why they occired
// 3. How to fix it


// requirement are that the username be at least 6 characters long
// the username cannot contain the values !,;

// Errors are defensive programming. 
// In js you can throw anything

// in most situation you want a class to handle errors
class InvalidUsernameError extends Error{

    constructor(message, solution){
        super(message);// you have to build the super class first
        this.solution = solution;
    }
}

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
}
// error class in JS has a property call message
