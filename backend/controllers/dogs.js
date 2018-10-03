const express = require('express')
const router = express.Router()

const mongoose = require('../models/Dog')
const Dog = mongoose.model('Dog')

// /api/dogs/  => Dog Index
router.get('/', (req, res) => {
    Dog.find({})
        .then(dogs => res.json(dogs))
})

module.exports = router
