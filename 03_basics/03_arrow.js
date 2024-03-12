const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


// chai()


//------------------------Explicit , implicit RETURN-----------------------

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2     //<--- NO NEED TO WRITE RETURN (IMPLICIT)

// const addTwo = (num1, num2) => ( num1 + num2 )      //<--NO NEEED TO WRITE RETURN BECAUSE WE USED () HERE

const addTwo = (num1, num2) => ({username: "hitesh"})        //Object return kar rhe he isliye inner {} object ko represernt kar rha he.


console.log(addTwo(3, 4))