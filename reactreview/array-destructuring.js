

function splitFirstNameLname(name =''){
    const names = name.split(" ")// returns an array of names
    return names;
}

const [fname,lname] = splitFirstNameLname("Adam Ranieri")

console.log("Hello " + fname)
console.log("Greetings Mr." + lname)