"use strict";
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
let names = ['shaheer', 'anas', 'ahmad', 'usman', 'hanan'];
console.log(names[0]); //shaheer
console.log(names[3]); //usman
console.log(names[2]); //ahmad
console.log(names[4]); //hanan
console.log(names[1]); //anas
// Alternative method using loop
console.log("using loog \n");
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}
