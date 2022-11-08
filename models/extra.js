const mongoose = require('mongoose');

const extraSchema = new mongoose.Schema({
    color: {
        type: String
    },
    accessory: {
        type: String
    }
});

const Extra = mongoose.model('extras', extraSchema);

module.exports = Extra;