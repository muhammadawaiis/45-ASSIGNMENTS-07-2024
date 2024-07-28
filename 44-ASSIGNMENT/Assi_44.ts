function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("Your sandwich is ready!\n");
}

make_sandwich('Ham', 'Cheese', 'Lettuce');
make_sandwich('Turkey', 'Tomato', 'Mayonnaise', 'Pickles');
make_sandwich('Peanut Butter', 'Jelly');
