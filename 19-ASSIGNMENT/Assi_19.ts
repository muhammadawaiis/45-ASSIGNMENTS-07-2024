let biggerDinnerTable:string[]=["Kinza","Tooba","Iqra"];
for(let i = 0; i < biggerDinnerTable.length;i++){
    console.log(`Dear! ${biggerDinnerTable[i]} ,please on My Big Dinner I would be thankfull`);

}

console.log("\n I would Like To inform you that This is A Graet News For uncoming biggerDinnnerTable \n");

biggerDinnerTable.unshift("Ifran Khan");
biggerDinnerTable.splice(Math.floor(biggerDinnerTable.length/2),0,"Hasnain sher");
biggerDinnerTable.push("Nimra Khan");





for(let i = 0; i < biggerDinnerTable.length;i++){
    console.log(`Dear! ${biggerDinnerTable[i]} ,please Come on My Big Dinner I would be thankfull`);

}

console.log(`\n I have Guessed that the number of people who invited are : ${biggerDinnerTable.length}`)