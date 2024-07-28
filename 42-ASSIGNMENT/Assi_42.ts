let magicians: string[] = ['David Copperfield', 'Harry Houdini', 'Dynamo', 'Penn Jillette', 'Teller'];

function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = 'The Great ' + magicians[i];
    }
    return magicians;
}

magicians = make_great(magicians);
show_magicians(magicians);
