"use strict";
let biggerDinnerTable = ["Kinza", "Tooba", "Iqra"];
for (let i = 0; i < biggerDinnerTable.length; i++) {
    console.log(`Dear! ${biggerDinnerTable[i]} ,please on My Big Dinner I would be thankfull`);
}
console.log("\n I would Like To inform you that This is A Graet News For uncoming biggerDinnnerTable \n");
biggerDinnerTable.unshift("Ifran Khan");
biggerDinnerTable.splice(Math.floor(biggerDinnerTable.length / 2), 0, "Hasnain sher");
biggerDinnerTable.push("Nimra Khan");
for (let i = 0; i < biggerDinnerTable.length; i++) {
    console.log(`Dear! ${biggerDinnerTable[i]} ,please Come on My Big Dinner I would be thankfull`);
}
console.log(`Guess the number of people invited: ${biggerDinnerTable.length}`);
