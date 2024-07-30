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
console.log("numeric test \n");

console.log("is age==25?i predict true");
console.log(age==25);//true
console.log("is age==35?i predict true");
console.log(age==35);//false
console.log("is age!=35?i predict true");
console.log(age!=35);//true
console.log("is age!=25?i predict true");
console.log(age!=25);//false
console.log("is age<25?i predict true");
console.log(age<25);//false
console.log("is age>25?i predict true");
console.log(age>25);//false
console.log("is age<=25?i predict true");
console.log(age<=25);//true
console.log("is age>=25?i predict true");
console.log(age>=25);//true

// Logical Operators
console.log("Logical Operators\n\n");

console.log("is age > 10 && age < 30 ? i predict true");
console.log(age > 10 && age < 30);//true
console.log("is age < 10 || age > 30 ? i predict true");
console.log(age < 10 || age > 30);//false

// Arrays test
console.log("arrays test");

console.log("is 3 in numbers? i predict true");
console.log(3 in numbers);//true

console.log("is 5  in number? i predict true");
console.log(5  in numbers);//false



