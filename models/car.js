const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    horsepower: {
        required: true,
        type: Number
    }
});

const Car = mongoose.model('cars', carSchema);

module.exports = Car;
