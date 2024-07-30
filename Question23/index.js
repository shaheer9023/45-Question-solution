"use strict";
// test 1 equality comparison
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //true
// test 2 strictlt equality comparison
console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru'); //true
// test 3 inequality comparison
console.log("Is car != 'subaru'? I predict True.");
console.log(car != 'subaru'); //false
// test 4 strictlt inequality comparison
console.log("Is car !== 'subaru'? I predict True.");
console.log(car !== 'subaru'); //false
// test 5 less than comparison
console.log("Is car < 'subaru'? I predict True.");
console.log(car < 'subaru'); //false (lexicographic comparison)
// test 6 greater than comparison
console.log("Is car > 'subaru'? I predict True.");
console.log(car > 'subaru'); //false (lexicographic comparison)
// test 7 less than equal comparison
console.log("Is car <= 'subaru'? I predict True.");
console.log(car <= 'subaru'); //true
// test 8 greater than equal comparison
console.log("Is car <= 'subaru'? I predict True.");
console.log(car <= 'subaru'); //true
// test 9 checking truthiness 
console.log("Is car ? I predict True.");
console.log(car); //true (non empty string is truthy)
// test 10 checking truthiness 
console.log("Is !car ? I predict True.");
console.log(!car); //false (negation of  truthy value)
