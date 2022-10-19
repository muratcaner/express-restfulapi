const Car = require('../models/car');

const insertCar = async ( name, horsepower ) => {
    return Car.create({ name, horsepower });
}

module.exports = { insertCar };

