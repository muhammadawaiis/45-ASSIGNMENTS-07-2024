function create_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var _b = options_1[_a], key = _b[0], value = _b[1];
        car[key] = value;
    }
    return car;
}
var car1 = create_car('Toyota', 'Corolla', ['color', 'Blue'], ['sunroof', true]);
var car2 = create_car('Tesla', 'Model S', ['color', 'Red'], ['autopilot', true], ['battery', '100 kWh']);
console.log(car1);
console.log(car2);
