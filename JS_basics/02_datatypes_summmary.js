// primitive ds vs non-primitive  --- how data is stored in memory and how it is accessed
/* Primitive - Call by value not by address (copied and used)
String , Number , Boolean , null ,undefined, Symbol( makes a value uniique) , Bigint  
*/
/* Refrence type (non-primitive) -- Call by refrence  (address) 
Array , Object , functions
*/

//JS  is dynamic typed language for example we donot need to define variable type 
// const number = 11  we donot need to define const number = int(11) or float(11) hence it is a dynamic language.

//Integer datatypes

const score = 100.3
const temp = null
let scorepoint = 1

let id = Symbol("123")
let newid = Symbol("123")

let bignumber = 23545875558855556454655475554754557657n

console.log([id==newid,typeof newid]); // Symbols are always unique even if they have same values

//Arrays, Objects, Functions
//Array --> datatype = object
const heros = ["Shaktiman","Cpt Vyom","Hatimtai"]
console.log(heros[3]);  // output is undefined as at index 3 there is nothing defined.
//Object --> datatype = object
let myobj = {
    name:"Aniket",
    age:"37",

}
//Function --> datatype = object function
let myFunction= function(){
    console.log("Hello Java SCRIPT");
}

console.log( myobj);


//////********************************************** MEMORY **************************************************************************/
/* STACK(PRIMITIVE) you get a copy  , HEAP (NON_primitive) yot get refrence address

*/
//STACK 
let accountnumber1 = 1234567
let accountnumber2 = accountnumber1
accountnumber2 = 2222222
//console.log([accountnumber1,accountnumber2]);

//Heap

let user1 = {
    name:"Userone",
    id:123456,
}

let user2 = user1
user2.name ="Aniket"
console.log([user1.name,user2.name]); // Since no copy is created in heap any changes in user2 will affect user1 and vice versa
