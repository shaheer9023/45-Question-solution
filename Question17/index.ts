let Guest:string[]=['shaheer','anas','ahmad','usman'];


   
    let new_guest:string='Shahid Anwar';
     Guest[1]=new_guest;
     
     

Guest.unshift("Akbar","Ali","Muhammad");

console.log("Unfortunately !! new dinner table won't arrive so we can invite only two guests\n\n");
while(Guest.length>2){
    let removeGuest=Guest.pop();
    console.log(`sorrry sir ${removeGuest} you are not invited for dinner\n\n\n`);
    
}
 for (let i = 0; i < Guest.length; i++) {
    console.log("Respected Sir,", Guest[i], "\nYou are still invited for dinner tomorrow\nTHANK YOU.\n\n");
}
console.log("remaining two guests are also not comming so nothing come to the dinner");

Guest.splice(0,2)
console.log(Guest);
