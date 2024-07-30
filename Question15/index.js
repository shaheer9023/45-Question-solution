"use strict";
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
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
