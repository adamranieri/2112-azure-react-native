// spread operator is used to spread/disperse an array or object into indviual values

const ssbu = ["Bowser", "Link", "Pit"];
const streetFighters = ["Ken", "Ryu", "Bison"];

const fighters = [...ssbu, ...streetFighters];// flatten an array

// often used in method signature
// the spread parameter must be the last parameter
function maxValue(...nums){
    let highest = nums[0];

    for(const n of nums){
        if(n>highest){
            highest = n;
        }
    }
    return highest;
}

console.log(maxValue(12,45,9,3,100,4))

const location = {state:'wv', town:"morgantown"};
const trainerDeatils = {fname:'adam', lname:'ranieri', age:19};

const adam = {...location,...trainerDeatils};