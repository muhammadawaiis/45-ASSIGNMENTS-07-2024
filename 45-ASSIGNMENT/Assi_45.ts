function create_car(manufacturer: string, model: string, ...options: [string, any][]): { [key: string]: any } {
    let car: { [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    for (let [key, value] of options) {
        car[key] = value;
    }

    return car;
}

let car1 = create_car('Toyota', 'Corolla', ['color', 'Blue'], ['sunroof', true]);
let car2 = create_car('Tesla', 'Model S', ['color', 'Red'], ['autopilot', true], ['battery', '100 kWh']);

console.log(car1);
console.log(car2);
