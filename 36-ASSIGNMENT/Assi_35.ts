// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a 
// message that should be printed on the shirt. The function 
// should print a sentence summarizing the size of the shirt and the m
// essage printed on it. Call the function.

function make_shirt(size : string , message :string):void{
    console.log(`The size of the shirt is "${size}" and the message printed on it is "${message}" `);
}

make_shirt("Lager","Hello word");
make_shirt("Medaim","i love Typescript");
make_shirt("small","Keep Calm and Code On");
