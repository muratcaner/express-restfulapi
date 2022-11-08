const { Router } = require('express');
const { insertExtra } = require('../services/extra');

const router = Router();

//Various methods to be added

//Post Method
router.post('/', async (req, res) => {
    const { color, accessory } = req.body;

    try {
        const extras = await insertExtra( color, accessory )
        res.status(201).json(extras)
    }
    catch (error) {
        console.error(error);
        res.status(500).json({message: "failed"})
    }
})

module.exports = router;

