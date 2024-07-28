"use strict";
// let car: string = 'Subaru';
// let age: number = 24;
// let city: string = 'New York';
// let isStudent: boolean = true;
// let languages: string[] = ['JavaScript', 'Python', 'TypeScript'];
// let temperature: number = 30;
// let favoriteColor: string = 'blue';
// let friends: string[] = ['Alice', 'Bob', 'Charlie'];
// let hasPet: boolean = false;
// let score: number = 85;
// Tests for equality and inequality with strings
console.log("Is car == 'Subaru'? I predict True.");
console.log(car == 'Subaru'); // True
console.log("Is car != 'Honda'? I predict True.");
console.log(car != 'Honda'); // True
console.log("Is car == 'Toyota'? I predict False.");
console.log(car == 'Toyota'); // False
console.log("Is car != 'Subaru'? I predict False.");
console.log(car != 'Subaru'); // False
// Tests using the lower case function
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(car.toLowerCase() == 'subaru'); // True
console.log("Is car.toLowerCase() == 'Subaru'? I predict False.");
console.log(car.toLowerCase() == 'Subaru'); // False
// Numerical tests
console.log("Is age == 24? I predict True.");
console.log(age == 24); // True
console.log("Is age != 30? I predict True.");
console.log(age != 30); // True
console.log("Is age > 20? I predict True.");
console.log(age > 20); // True
console.log("Is age < 30? I predict True.");
console.log(age < 30); // True
console.log("Is age >= 24? I predict True.");
console.log(age >= 24); // True
console.log("Is age <= 24? I predict True.");
console.log(age <= 24); // True
console.log("Is age < 24? I predict False.");
console.log(age < 24); // False
console.log("Is age > 30? I predict False.");
console.log(age > 30); // False
// Tests using "and" and "or" operators
console.log("Is age > 20 and age < 30? I predict True.");
console.log(age > 20 && age < 30); // True
console.log("Is age > 20 or age < 25? I predict True.");
console.log(age > 20 || age < 25); // True
console.log("Is age < 20 and age < 30? I predict False.");
console.log(age < 20 && age < 30); // False
console.log("Is age < 20 or age > 30? I predict False.");
console.log(age < 20 || age > 30); // False
// Test whether an item is in an array
console.log("Is 'Python' in languages? I predict True.");
console.log(languages.includes('Python')); // True
console.log("Is 'Ruby' in languages? I predict False.");
console.log(languages.includes('Ruby')); // False
// Test whether an item is not in an array
console.log("Is 'Ruby' not in languages? I predict True.");
console.log(!languages.includes('Ruby')); // True
console.log("Is 'Python' not in languages? I predict False.");
console.log(!languages.includes('Python')); // False
