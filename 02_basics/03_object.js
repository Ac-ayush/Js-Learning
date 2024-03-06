const obj = {} ;

const JsUser = {
    name : "Kashis",
    age : 99,
    class : "frontend",
    "backlog" : false,
    email : "jaja@p.com",
    "full name" : 'kashis kumar jain'
};

// for(const key in JsUser){
//     console.log(key , " ---> ", JsUser[key]);
// }


//Way to access data of object
console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])


JsUser.age = 55 ;           //update/changes
console.log(JsUser)

// Object.freeze(JsUser);  //now Jsuser object becomes immutable

//We can add more keys in object
JsUser.greeting = function(){
    console.log(` namaste from ${this["full name"]}`)
}

console.log(JsUser.greeting())

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());