"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a 
// message that reads I love TypeScript. Make a large shirt and 
// a medium shirt with the default message, and a shirt of any size with a different message.
function makeShirt(size = "large", message = "I love TypeScript") {
    console.log(`The size of the shirt is "${size}" and the message is "${message}"`);
}
makeShirt();
makeShirt("medium");
makeShirt("small", "Keep Calm and Code On");
makeShirt("Any Size", "Costumization");
