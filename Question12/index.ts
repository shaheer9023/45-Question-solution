// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let Names:string[]=['shaheer','anas','ahmad','usman','hanan'];
console.log("hello guys i am ",Names[0]);//shaheer
console.log("hello guys i am ",Names[3]);//usman
console.log("hello guys i am ",Names[2]);//ahmad
console.log("hello guys i am ",Names[4]);//hanan
console.log("hello guys i am ",Names[1]);//anas
// Alternative method using loop
console.log("using loog \n");

for(let i=0;i<Names.length;i++){
    console.log("Hello guys i am ",Names[i]);
    
}