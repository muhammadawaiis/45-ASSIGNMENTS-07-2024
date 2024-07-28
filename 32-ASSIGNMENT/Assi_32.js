"use strict";
let current_users = ["Awais", "Halil", "ali", "Zia", "Irfan", "Zoha"];
let new_users = ["Ali", "Zia", "Hasnain", "Zain", "Zoha"];
for (let new_user of new_users) {
    let new_user_lower = new_user.toLowerCase();
    let user_exsits = current_users.some(user => user.toLowerCase() === new_user_lower);
    if (user_exsits) {
        console.log(`Sorry ${new_user} is already taken Select any Other Username`);
    }
    else {
        console.log(`Congrats ${new_user} is available to use`);
    }
}
