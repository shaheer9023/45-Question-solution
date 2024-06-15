// ame Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
let Name:string;
Name="shaheer ahmad";
console.log(`name in lowercase is ${Name.toLowerCase()}`);
console.log(`name in uppercase is ${Name.toUpperCase()}`);
// for Title case
let titlecase=Name.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
console.log("name in title case is ",titlecase);


