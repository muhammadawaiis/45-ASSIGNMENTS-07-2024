"use strict";
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 1];
for (let number of numbers) {
    let Ordinal;
    if (number === 1) {
        Ordinal = "1st";
    }
    else {
        Ordinal = number + "rd";
    }
    console.log(Ordinal);
}
