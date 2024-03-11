function greet(){
    console.log("Ram Ram bhai saryane")
}

greet()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("result : ", result)


//return keyword
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


//Rest Operator in JS --->  ...Rest

// function getNumberss(...val){
//     console.log(val)
// }

function getNumberss(one, two , ...val){
    
    console.log(val)
}

getNumberss(33) ;
getNumberss(344 , 55, 74, 32, 76)
//Note : A function definition can only have one rest parameter, and the rest parameter must be the last parameter in the function definition.


//Object/Array passing in function

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
