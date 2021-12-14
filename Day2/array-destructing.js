// ES6 allows for array destructing which is just a convience syntax
const ssbu = ['ganondorf','dark samus','zelda', 'yoshi','mario'];
// const ganondorf = ssbu[0];
// const samus = ssbu[1];
// const yoshi = ssbu[3];
const [ganondorf, samus, ,yoshi] = ssbu;// identical to the  lines above
console.log(ganondorf);
console.log(samus);
console.log(yoshi);

// becaue arrays are objects the length property is just a number
console.log(ssbu.length)
ssbu.length = 3;
console.log(ssbu.length)
console.log(ssbu)

const players = [{player:"Tim Tebow", jersey:15},{player:"Mit Wobet", jersey:51}, {player:"Kyle Trask", jersey:14, postion:"QB"}]
console.table(players)
