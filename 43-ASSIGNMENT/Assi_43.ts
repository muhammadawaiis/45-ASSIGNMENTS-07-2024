let magicians: string[] = ['David Copperfield', 'Harry Houdini', 'Dynamo', 'Penn Jillette', 'Teller'];

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push('The Great ' + magician);
    }
    return great_magicians;
}

let great_magicians = make_great([...magicians]);

console.log("Original Magicians:");
show_magicians(magicians);

console.log("\nGreat Magicians:");
show_magicians(great_magicians);
