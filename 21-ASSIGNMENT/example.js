"use strict";
function createBook(title, author, price, publicationYear, genre) {
    return {
        title: title,
        author: author,
        price: price,
        publisherYear: publicationYear,
        genre: genre
    };
}
let book_1 = createBook("The hero", "Muhammad Awais", 290, 2023, "Struggle");
let book_2 = createBook("My hero", "Muhammad Awais", 490, 2024, "Struggle");
let book_3 = createBook("Natinal  hero", "Muhammad Awais", 1190, 2024, "Complete");
console.log("\nBook_1 Details below\n");
console.log(book_1);
console.log("\nBook_2 Details below\n");
console.log(book_2);
console.log("\nBook_3 Details below\n");
console.log(book_3);
