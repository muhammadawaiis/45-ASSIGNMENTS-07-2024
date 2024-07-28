interface book{
    title:string;
    auther:string;
    price:number;
    publicationYear:number;
    genre:string;
}

function createBook(title:string,auther:string,price:number,publicationYear:number,genre:string){
    return{
        title,
        auther,
        price,
        publicationYear,
        genre
    };

}
let  book1 = createBook("To Kill a Mockingbird","Harper Lee",3000, 1960, "Fiction");

let book2 = createBook("1984", "George Orwell", 3000,1949, "Dystopian");

let book3 = createBook("The Great Gatsby", "F. Scott Fitzgerald",3000, 1925, "Romance");


console.log("\nBooks 1 Details Below !\n")
console.log(book1);
console.log("\nBooks 2 Details Below !\n")
console.log(book2);
console.log("\nBooks 3 Details Below !\n")
console.log(book3);