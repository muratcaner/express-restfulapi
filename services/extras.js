const Extras = require('../models/extras');

const insertExtras = async ( color, interior, accessories ) => {
    return Extras.create({ color, interior, accessories });
}

module.exports = { insertExtras };