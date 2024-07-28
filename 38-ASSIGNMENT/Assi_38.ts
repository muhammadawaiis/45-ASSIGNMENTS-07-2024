// Cities: Write a function called describe_city() that accepts the name of a city and its country. 
// The function should print a simple sentence, such as Karachi is in Pakistan.
//  Give the parameter for the country a default value. 
// Call your function for three different cities,
//  at least one of which is not in the default country.


// Function to print city and country details with default parameter for country
function describe_city(City:string , Country:string="Pakistan",){
    console.log(`${City} is in ${Country}`);

}
// Call the function with different cities
describe_city("karachi"); // Default country
describe_city("lahore");  // Default country
describe_city("Mombai","India"); // Different country