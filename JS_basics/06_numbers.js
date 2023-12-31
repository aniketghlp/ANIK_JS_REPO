const score = 400
//console.log(score);


const balance = new Number(108)  // the vaule is a number but it is an object now so it will have vaious functions associated with it as can be seen in console of browser. 
//console.log(balance);

// console.log([balance.toString(),balance.toExponential(2),balance.toFixed(1)]);

const nextnumber = 123.896

// console.log(nextnumber.toPrecision(3)); //"i/p 23.896 o/p is 23.9 // i/p 123.896 o/p is 124"

//**************************************MATHS _JS LIBRARY **********************************************************/

// console.log(Math);
// console.log([Math.log(10),Math.abs(-4),Math.PI,Math.floor(10.9)]);

console.log(Math.floor((Math.random()*6))+1)

//Random generates value between 0 and 1 , to have random values between any intgers we need to multiply it by a formula and add 1 to it -> then take floor value

min = 0
max = 6

console.log(Math.floor(Math.random()* (max-min + 1)+min)); 
// here we put a generalised formula for random numbers , +1  avoid zero values and + min avoids less than min values 