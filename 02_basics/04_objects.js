//Objects - cont..

const jobseeker = new Object() ;            //<--- singleton object 

jobseeker.id = "12345sdas";
jobseeker.email = "js@gmail.com";
jobseeker.resumeLink = "https/www.gdrive.com/afuhdsof" ;
jobseeker.experience = 4;

// console.log(jobseeker);

//merging of Onjects 
const hotstar = {
    ads : 2345,
    subs : "99"
}

const disney = {
    country : "usa",
    buisness : "b2b"
}

const merge1 = {hotstar , disney} ;     //wrong way   : now hotstart === merge1
// console.log("merge1: \n\n" , merge1 );

// const merge2 = Object.assign(hotstar,  disney)      //it will copy diney values to hotstar also
const merge3 = Object.assign({} , hotstar,  disney)      //<-- preffered

// console.log("\n\n merge2: ", merge3);


const merge4 = {...hotstar , ...disney}     //<-- best way
// console.log("\n\n merge4: \n\n" , merge1 );


//Imp Methods; 
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false



console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//------------------------DESTRUCTURING IN OBJECTS--------------------//
const gameplayInfo = {
    userNo : 2, 
    health : "170",
    gun : "car98",
    aliveFriends: " 3"
}
printTheUserNo(gameplayInfo)

const {health} = gameplayInfo;
console.log(health)

const {aliveFriends : kitneZindaHe} = gameplayInfo ;
console.log(kitneZindaHe)


function printTheUserNo({userNo}){
    console.log(`Hi this is userNo: ${userNo}`);
}

printTheUserNo(gameplayInfo)