"use strict";
let biggerDinerTable = ["Kinza", "Tooba", "Iqra"];
for (let i = 0; i < biggerDinerTable.length; i++) {
    console.log(`Dear! ${biggerDinerTable[i]}, ,please on My Big Dinner I would be thankfull`);
}
console.log("\n I would Like To inform you that This is A Graet News For uncoming biggerDinnnerTable \n");
biggerDinerTable.unshift("Irfan Khan");
biggerDinerTable.splice(Math.floor(biggerDinerTable.length / 2), 0, "Hasnain Sher");
biggerDinerTable.push("Ali");
for (let i = 0; i < biggerDinerTable.length; i++) {
    console.log(`Dear! ${biggerDinerTable[i]}, ,please on My Big Dinner I would be thankfull`);
}
//Guess The Number of peoples:
console.log(`\nGuess the Nomber of the people we invites ${biggerDinerTable.length}\n`);
console.log("\nUnfortunity we have runnning for table i can just invite only two people for dinner.\n");
// Remove guests until only two names remain
while (biggerDinerTable.length > 2) {
    let removedlist = biggerDinerTable.pop();
    console.log(`Dear! ${removedlist} ,Sorry Have less Table ,ane  sorry you can’t invite you to dinner.`);
}
//Conformation
console.log("\n You Both are still invite for Dinner pleace come on time\n");
//Angan print for Two Weather they are still gettting Invatation
for (let i = 0; i < biggerDinerTable.length; i++) {
    console.log(`Dear! ${biggerDinerTable[i]}, You are still invite for Dinner pleace come on time`);
}
console.log("\nRemove the last two names from the list and check .Array is empty of not\n");
// Remove the last two names from the list
biggerDinerTable.pop();
biggerDinerTable.pop();
//Check Array ,weather it is empty or not
console.log("\n Array Is empty\n");
//Again print for checking
for (let i = 0; i < biggerDinerTable.length; i++) {
    console.log(`Dear! ${biggerDinerTable[i]}, ,please on My Big Dinner I would be thankfull`);
}
console.log(`Guess the Nomber of the people we invites ${biggerDinerTable.length}`);
