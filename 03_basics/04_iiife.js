//immediatly invoked function expression IIFE 



// named IIFE
(function fff(){
    console.log(`ki haal he ? `);
})();           //<-- semicoloum is must to write another iife

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh');