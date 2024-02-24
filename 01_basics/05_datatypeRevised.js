//datatypes are classified in Two types

// 1. Primitive 
// 7 type: String , boolean , bigint , number, null , undefioned , symbol

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// 2. Reference (Non primitive)

// 3 type: Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga" , 54, true];
let myObj = {
    name: "hitesh",
    age: 22,
}

console.log(heros)
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3