const mongoose = require('../db/connection')

const CitySchema = new mongoose.Schema({
    cityName: String,
    country: String,
    imageUrl: String, 
})

mongoose.model('City', CitySchema)

module.exports = mongoose