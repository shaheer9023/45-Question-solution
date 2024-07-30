"use strict";
let current_users = ["shaheer", "ahmad", "muzammil", "anas", "admin"];
let new_users = ["Ali", "hassan", "akbar", "admin", "soban"];
new_users.forEach((newUser) => {
    if (current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter new username `);
    }
    else {
        console.log(`${newUser} is available `);
    }
});
