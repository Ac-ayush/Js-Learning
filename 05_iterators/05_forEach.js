//ForEach : The forEach() method of Array instances executes a provided function once for each array element.
const coding = ["js", "ruby", "java", "python", "cpp"]

//ye Callback function execute karega har value ke liye

//----------way 1-------
// coding.forEach( function (val){
//     console.log(val);
// } )

// Paramters : array element, index

//----------way 2-------
// coding.forEach((val)=>{console.log(val)});          //arrow fn


//----------way 3-------
function printMe(item){
    console.log(item);
}

// coding.forEach(printMe)
//Sequence for predefined paramenters for ForEach val , index , array
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )



//array of objects : 
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )