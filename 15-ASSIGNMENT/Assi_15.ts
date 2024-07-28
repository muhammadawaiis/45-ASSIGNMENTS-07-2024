let invatation:string[]=["Kinza ","Iqra","Awais"];
for(let i = 0; i< invatation.length;i++){
    console.log(`Dear! ${invatation[i]} ,Would you Like Have Dinner with ME?`);
}

console.log("\t\nUnfortunaty Did't attend over Dinner.\n");
invatation[2]="Tooba";

for(let i = 0; i< invatation.length;i++){
    console.log(`Dear! ${invatation[i]} ,Would you Like Have Dinner with ME?`);
}