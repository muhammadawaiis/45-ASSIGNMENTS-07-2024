// // Name Cases: Store a person’s name in a variable,
//  and then print that person’s name in lowercase, uppercase, and titlecase.
var person_nam = "Muhammad Awais Khan Khattak";
console.log("To Lower Case :", person_nam.toLowerCase());
console.log("To upper case :", person_nam.toUpperCase());
console.log("To Tital Case :", person_nam.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
