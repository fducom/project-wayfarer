const express = require('express')
const router = express.Router()

const mongoose = require('../models/City')
const City = mongoose.model('City')

// /api/cities/  => Cities Index
router.get('/', (req, res) => {
    City.find({})
        .then(cities => res.json(cities))
})
// /api/cities/:cityname  => City Index
router.get('/:cityname', (req, res) => {
    City.find({cityName: req.params.cityname})
        .then(city => res.json(city))
})


module.exports = router