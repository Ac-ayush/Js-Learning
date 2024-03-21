// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}


//Map : The Map object holds key-value pairs and remembers the original insertion order of the keys.
const map = new Map() ;
map.set('ab' , 100) ;
map.set('bb' , 140) ;
map.set('cc' , 180) ;
map.set('ba' , 200) ;
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);
for(const [key , val] of map){
    // console.log(`Key is ${key} and value is ${val}`);
}



const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {       //NOT iteratable using for of
//     console.log(key, ':-', value);
    
// }