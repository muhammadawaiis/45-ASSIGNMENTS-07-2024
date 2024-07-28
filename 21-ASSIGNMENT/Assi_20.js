function createBook(title, auther, price, publicationYear, genre) {
    return {
        title: title,
        auther: auther,
        price: price,
        publicationYear: publicationYear,
        genre: genre
    };
}
var book1 = createBook("To Kill a Mockingbird", "Harper Lee", 3000, 1960, "Fiction");
var book2 = createBook("1984", "George Orwell", 3000, 1949, "Dystopian");
var book3 = createBook("The Great Gatsby", "F. Scott Fitzgerald", 3000, 1925, "Romance");
console.log("\nBooks 1 Details Below !\n");
console.log(book1);
console.log("\nBooks 2 Details Below !\n");
console.log(book2);
console.log("\nBooks 3 Details Below !\n");
console.log(book3);
