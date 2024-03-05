// Ways to Define array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)


//::::Methods::::

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)     //insert at start
// myArr.shift()        //pop from start

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));


// const newArr = myArr.join()     //string me return karega

// console.log(myArr);
// console.log(newArr);
// console.log( typeof newArr);



//SLICE and SPLICE

// slice, splice
console.log("before ", myArr);

const myn1 = myArr.slice(1, 3)

console.log("slice arr" ,myn1);
console.log("after slice ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("spliced arr ", myn2);
console.log("after splice ", myArr);