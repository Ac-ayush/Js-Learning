const sc = 400;
const balance = new Number(500) ;


// console.log(sc ,'\n', balance)
// console.log(balance.toString().length);
// console.log(balance.toFixed(6));
const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));  //for indian standards, by default american


/*--------------------------------------Math---------------------------------------*/

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));        //.5>choti value .5<badi value dega
// console.log(Math.ceil(4.2));         //upper value always(ceiling)
// console.log(Math.floor(4.9));        //lower value
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));


console.log(Math.random());
console.log((Math.random()*10) + 1);        //to get greater than 1
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)      //formula to get in a range