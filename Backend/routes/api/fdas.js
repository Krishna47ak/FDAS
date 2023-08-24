const express = require('express')
const { check, validationResult } = require('express-validator');
const Fdas = require('../../models/Fdas')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const fdas = await Fdas.find().sort({ date: -1 })
        res.json(fdas)
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ errors: "Server error" })
    }
})

router.post('/', [
    check('temp', 'Temperature is required').not().isEmpty(),
    check('humidity', 'Humidity is required').not().isEmpty()
], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try {
        const newFdas = new Fdas({
            temp: req.body.temp,
            humidity: req.body.humidity,
            co: req.body.co,
            triggers: req.body.triggers
        })
        const fdas = await newFdas.save()
        res.json(fdas)
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ errors: "Server error" })
    }
})

module.exports = router