let current_users:string[] = ["shaheer", "ahmad", "muzammil", "anas", "admin"];
let new_users:string[]=["Ali","hassan","akbar","admin","soban"];
 new_users.forEach((newUser)=>{

    if(
        current_users.some((currentUser)=>currentUser.toLowerCase()===newUser.toLowerCase())
    )
 {
    console.log(`${newUser} will need to enter new username `);
    
 }
 else{
    console.log(`${newUser} is available `);
    
 }
});