const mongoose = require('mongoose');

const extraSchema = new mongoose.Schema({
    color: {
        type: String
    },
    interior: {
        type: String
    },
    accessories: {
        type: String
    }
});

const Extras = mongoose.model('extras', extraSchema);

module.exports = Extras;