let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9 ];

for (let number of numbers){
    let Ordinal : string;
    if(number === 1){
        Ordinal = "1st";
    }else{
        Ordinal = number + "th";
    }
    console.log(Ordinal);
}
