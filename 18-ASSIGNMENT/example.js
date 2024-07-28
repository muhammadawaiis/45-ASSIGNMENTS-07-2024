"use strict";
// Store the locations in an array. Make sure the array is not in alphabetical order.
let placesToVisit = ["Kyoto", "Barcelona", "New York", "Sydney", "Cape Town"];
// Print the array in its original order
console.log("Original order:");
console.log(placesToVisit);
// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical order:");
console.log([...placesToVisit].sort());
// Show that the array is still in its original order by printing it
console.log("\nStill in original order:");
console.log(placesToVisit);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse alphabetical order:");
console.log([...placesToVisit].sort().reverse());
// Show that the array is still in its original order by printing it again
console.log("\nStill in original order:");
console.log(placesToVisit);
// Reverse the order of the list
placesToVisit.reverse();
console.log("\nOrder reversed:");
console.log(placesToVisit);
// Reverse the order of the list again to get back to the original order
placesToVisit.reverse();
console.log("\nReversed back to original order:");
console.log(placesToVisit);
// Sort the array so it’s stored in alphabetical order
placesToVisit.sort();
console.log("\nSorted in alphabetical order:");
console.log(placesToVisit);
// Sort to change the array so it’s stored in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in reverse alphabetical order:");
console.log(placesToVisit);
