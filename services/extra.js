const Extra = require('../models/extra');

const insertExtra = async ( color, accessory ) => {
    return Extra.create({ color, accessory });
}

module.exports = { insertExtra };