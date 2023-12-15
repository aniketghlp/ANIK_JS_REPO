const accountID = 123456           //constant value 
let accountEmail = "anijs@example.com" // Variable declaration using let keyword
var accountPassword = "admin" // variable declaration using var , not used anymore because of scope creep
accountCity = "Mumbai"
let accountState // variable with no value is undefined.

//accountID = 2 // not allowed 

accountEmail = "hc@ex.com"
accountPassword = "23143"
accountCity = "Delhi"

console.log(accountID);

console.table([accountID,accountEmail,accountPassword,accountCity,accountState])
/*Prefer not use var because of issue in block scope(if variable is defined and used twice then it results in suboptimal changes ) and functional scope*/ 