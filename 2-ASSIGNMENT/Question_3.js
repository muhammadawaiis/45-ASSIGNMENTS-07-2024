var person_nam = "muhammad Awais kahn khattak";
console.log("To Lower Case:", person_nam.toLowerCase());
console.log("To Upper Case :", person_nam.toUpperCase());
console.log("To Tital Case :", person_nam.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
