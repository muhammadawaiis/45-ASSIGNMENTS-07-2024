"use strict";
let car = 'Subaru';
let age = 24;
let city = 'New York';
let isStudent = true;
let languages = ['JavaScript', 'Python', 'TypeScript'];
let temperature = 30;
let favoriteColor = 'blue';
let friends = ['Alice', 'Bob', 'Charlie'];
let hasPet = false;
let score = 85;
console.log("car is == Sharu? my answer is True!");
console.log(car == "Subaru");
console.log("car is != Sharu? my answer is True!");
console.log(car != "Honda");
console.log("car is == Toyota? my answer is Fasle!");
console.log(car == "Toyota");
console.log("car is != Subaru? my answer is Fasle!");
console.log(car != "Subaru");
// Tests using the lower case function
console.log("car is car.TolowerCase() == subaru? my answer is True!");
console.log(car.toLowerCase() == "subaru");
console.log("Is car.toLowerCase() == 'Subaru'? I predict False.");
console.log(car.toLowerCase() == 'Subaru'); // False
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Age == 24 ? i predict True");
console.log(age == 24); // True
console.log("Age == 24 ? i predict False");
console.log(age != 24); // Fasle
console.log("age < 24 && > 30? i predict True");
console.log(age > 20 && age < 30); // True
console.log("age < 20 && ==  24? i predict True");
console.log(age < 20 || age == 24); // False
console.log("Is 'Python' in languages? I predict True.");
console.log(languages.includes("Python"));
console.log("Is 'Ruby' in languages? I predict False.");
console.log(languages.includes("ruby")); //False
console.log("Is hasPet is True? I predict True.");
console.log(hasPet); // True
