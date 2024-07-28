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




//How Its Works // Explanation of each test:

// // 1. **Tests for equality and inequality with strings:**
// //    - `car == 'Subaru'` checks if `car` is equal to 'Subaru'. This is true.
// //    - `car != 'Honda'` checks if `car` is not equal to 'Honda'. This is true.
// //    - `car == 'Toyota'` checks if `car` is equal to 'Toyota'. This is false.
// //    - `car != 'Subaru'` checks if `car` is not equal to 'Subaru'. This is false.

// // 2. **Tests using the lower case function:**
// //    - `car.toLowerCase() == 'subaru'` checks if the lowercase version of `car` is 'subaru'. This is true.
// //    - `car.toLowerCase() == 'Subaru'` checks if the lowercase version of `car` is 'Subaru'. This is false.

// // 3. **Numerical tests:**
// //    - `age == 24` checks if `age` is equal to 24. This is true.
// //    - `age != 30` checks if `age` is not equal to 30. This is true.
// //    - `age > 20` checks if `age` is greater than 20. This is true.
// //    - `age < 30` checks if `age` is less than 30. This is true.
// //    - `age >= 24` checks if `age` is greater than or equal to 24. This is true.
// //    - `age <= 24` checks if `age` is less than or equal to 24. This is true.
// //    - `age < 24` checks if `age` is less than 24. This is false.
// //    - `age > 30` checks if `age` is greater than 30. This is false.

// // 4. **Tests using "and" and "or" operators:**
// //    - `age > 20 && age < 30` checks if `age` is greater than 20 and less than 30. This is true.
// //    - `age > 20 || age < 25` checks if `age` is greater than 20 or less than 25. This is true.
// //    - `age < 20 && age < 30` checks if `age` is less than 20 and less than 30. This is false.
// //    - `age < 20 || age > 30` checks if `age` is less than 20 or greater than 30. This is false.

// // 5. **Test whether an item is in an array:**
// //    - `languages.includes('Python')` checks if 'Python' is in the `languages` array. This is true.
// //    - `languages.includes('Ruby')` checks if 'Ruby' is in the `languages` array. This is false.

// // 6. **Test whether an item is not in an array:**
// //    - `!languages.includes('Ruby')` checks if 'Ruby' is not in the `languages` array. This is true.
// //    - `!languages.includes('Python')` checks if 'Python' is not in the `languages` array. This is false.