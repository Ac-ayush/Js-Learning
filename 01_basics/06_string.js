const name = 'Ayush'
const noOfQue = 56;
const position = "SDE intern"
const date = new Date() ;
//old method
console.log(name + noOfQue) ;
console.log(`My name is ${name} and i am ${position} on date ${date.toLocaleDateString()}`);


const newStr = new String("ac-dot-net")
console.table([newStr[5] , newStr.charAt(4) , newStr.indexOf('t') , newStr.substring(0 , 7) , newStr.slice(-7, -3)])

const url = "   net-dot-clear%20and%20clean     ";
console.log(`trim --> ${url.trim()}`)
console.log(`replace --> ${url.trim().replace('%20' , '-')}`)
console.log(`replaceAll --> ${url.trim().replaceAll('%20' , '-')}`)

console.log(`includes --> ${url.includes('and')}`)
console.log(`split --> ${url.split('-')}`)
console.log(url.split('-'))