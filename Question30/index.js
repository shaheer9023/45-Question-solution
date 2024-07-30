"use strict";
let users = ["shaheer", "ahmad", "muzammil", "anas", "admin"];
for (let name of users) {
    if (name === "admin") {
        console.log("hello admin , would you like to see a status report?");
    }
    else {
        console.log(`hello ${name},Thank you for logging in again`);
    }
}
