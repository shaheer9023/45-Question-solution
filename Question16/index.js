"use strict";
let Guest = ['shaheer', 'anas', 'ahmad', 'usman', 'hanan'];
for (let i = 0; i < Guest.length; i++) {
    console.log("Respected Sir,", Guest[i], "\nYou are invited for dinner tomorrow\nTHANK YOU.\n\n");
}
console.log("\n\n\n\n");
let ditcher = 'anas';
console.log(ditcher, "refused to come in tomorrow's party\n\n\n");
let new_guest = 'Shahid Anwar';
Guest[1] = new_guest;
console.log("so new guest list is \n\n\n");
for (let i = 0; i < Guest.length; i++) {
    console.log("Respected Sir,", Guest[i], "\nYou are invited for dinner tomorrow\nTHANK YOU.\n\n");
}
console.log("GREAT NEWS WE FOUND A BIGGER TABLE\n\n\n");
console.log("so new guest list is :\n\n");
Guest.unshift("Akbar", "Ali", "Muhammad");
for (let i = 0; i < Guest.length; i++) {
    console.log("Respected Sir,", Guest[i], "\nYou are invited for dinner tomorrow\nTHANK YOU.\n\n");
}
