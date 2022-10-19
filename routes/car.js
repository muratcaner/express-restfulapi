const { Router } = require('express');
const Car = require('../models/car');
const { insertCar } = require('../services/car');

const router = Router();

//Post Method
router.post('/', async (req, res) => {
    const { name, horsepower } = req.body;

    try {
        const car = await insertCar( name, horsepower )
        res.status(201).json(car,extras)
    }
    catch (error) {
        console.error(error);
        res.status(500).json({message: "failed"})
    }
})

//Get all Method
router.get('/', async (req, res) => {
    try{
        const cars = await Car.find();
        res.json(cars) 
    }
    catch(error) {
        console.error(error);
        res.status(500).json({message: "failed"})
    }
})


//Get by ID Method
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try{
        const car = await Car.findById(id);
        if(!car) {
            return res.status(404).json({ message: "not found" })
        }
        return res.json(car)
    }
    catch(error){
        console.error(error);
        return res.status(500).json({ message: "failed" })
    }
})


//Update by ID Method
router.patch('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Model.findByIdAndUpdate(
            id, updatedData, options           
        )
        res.send(result)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Delete by ID Method
router.delete('/:id', async (req, res) => {
    try{
        const id = req.params.id;
        const car = await car.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted`)
    }
    catch (error) {
        res.status(500).json({ message: error.message })
    }
})


module.exports = router;