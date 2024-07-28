let placeToVisite:string[]=["Kyoto", "Barcelona", "New York", "Sydney", "Cape Town"];

// Print the array in its original order
console.log("orignal Order");
console.log(placeToVisite);


// Print the array in alphabetical order without modifying the actual list
console.log("alphabetical order");
console.log([...placeToVisite].sort());

// Show that the array is still in its original order by printing it
console.log("Checl array is Still in a orignat Condation");
console.log(placeToVisite);

// Print the array in reverse alphabetical order without changing the order of the original list

console.log("Reverse alphabetical order");
console.log([...placeToVisite].reverse());

console.log(" Show that your array is still in its original order by printing it again.");
console.log(placeToVisite);

console.log("• Reverse the order of your list. Print the array to show that its order has changed.");
console.log(placeToVisite.reverse());

console.log("• Reverse the order of your list again. Print the list to show it’s back to its original order");
console.log(placeToVisite.reverse());

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

console.log("• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.");
console.log(placeToVisite.sort());

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("• Sort to change your array so it’s stored in reverse alphabetical order. Print the");
console.log(placeToVisite.reverse().sort());
