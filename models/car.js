const mongoose = require('mongoose');
const { Schema } = mongoose;

const carSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    horsepower: {
        required: true,
        type: Number
    },
    extras: [{ type: Schema.Types.ObjectId, ref: 'extraSchema' }]
});

const Car = mongoose.model('cars', carSchema);

module.exports = Car;

