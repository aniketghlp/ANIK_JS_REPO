let myDate = new Date()
// console.log(myDate);
// console.log([myDate.toString(),myDate.toISOString(),myDate.getMilliseconds(),myDate.toJSON(),myDate.toLocaleTimeString(),myDate.toLocaleString()]);
// console.log(typeof myDate);


// let mynewdate = new Date(2023,10,5)
let mynewdate = new Date("2023-12-22")
// console.log(mynewdate.toString());
let mynextTime = Date.now()
// console.log(mynewdate.getTime());
// console.log(Math.floor(mynextTime/1000))

// below we modify the date format to print full name of day , change timezone and display time in 2-digits format.
console.log(myDate.toLocaleString('default', {
    weekday:  "long",
    timeZone: "PST",
    hour:"2-digit",minute:"2-digit",second:"2-digit"
}))