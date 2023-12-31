// String interpolation

let sname = "Aniket"
let score = 50
//concatenate
console.log(sname+" "+score);
//new way of conactenating
console.log((`My name is ${sname} and my score is ${score}`));

// String declare another way
let gname = new String("FIFA_24")
// console.log(gname.padEnd(10,"X"));


// console.log(gname.charAt(2));
// console.log(gname.indexOf("F"));

// console.log(gname.substring(0,4));

// console.log(gname.slice(-7,1)); /// Can do reverse slicing


//trimming
let newgame = "    UnCharted    "
console.log(newgame.trim());

//replace
let url = "https://www.example-test.com/index.js"

console.log(url.replace("-",""));

//convert to array using split

console.log(gname.split("_"));