
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.


let users :string []= ["Admin", "Awais ","Ali","Hasnain","Kinza"];
//users = [] ;         //Remove all of the usernames from your array,
if(users.length===0){
    console.log("We need to find some users!");

}for (let user of users){
    if(user ==="Admin"){
        console.log(`Hello ${user} Most Welcome To The Side `);
    }else{
        console.log(`Welcome ${user}! to login again`);
    }
  }


