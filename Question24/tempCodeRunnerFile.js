let car = "civic";
let age = 25;
let numbers = [1, 2, 3, 4, 5];
// string tests
// test equality
console.log("is car == civic? i predict true");
console.log(car == "civic"); //true
// strict equality
console.log("is car === civic? i predict true");
console.log(car === "toyota"); //false
// inequality (true)
console.log("is car != toyota? i predict true");
console.log(car != "toyota"); //true
// inequality (false)
console.log("is car != civic? i predict true");
console.log(car != "civic"); //false
// lowercase test
console.log("is car.lowercase() == 'civic'? i predict true");
console.log(car.toLowerCase() == "toyota"); //false
console.log("is car === car.lowercase()? i predict false");
console.log(car === car.toLowerCase()); //true
// number test
console.log("n