interface country{
    name:string;
    capital:string;
    population:number;

}

let countries:country[]=[

    {name:"Pakistan",capital:"islamabad",population:1200000},
    {name:"India",capital:"new delhi",population:1200000},
    {name:"China",capital:"beijing",population:1200000},
    {name:"USA",capital:"washington",population:1200000},
];

//using forEach loop for itraction;

countries.forEach(
    (country)=>{
    console.log(`Name: ${country.name}`);
    console.log(`Capital: ${country.capital}`);
    console.log(`Population: ${country.population}`);
    console.log("------------------------");
    
    
});

