"use strict";
let usernames = ["Admin", "Awais", "Ishfaq", "Irfan", "Kinza"];
for (let username of usernames)
    if (username === "Admin") {
        console.log("Hello Admin, would you like to see a status report?\n");
    }
    else {
        console.log(`hello ${username} Thank you for logging in again.`);
    }
