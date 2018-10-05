const mongoose = require('../db/connection')
Post = require('./Post')

const CitySchema = new mongoose.Schema({
    cityName: String,
    country: String,
    imageUrl: String, 
    Posts: [Post.schema]
})

mongoose.model('City', CitySchema)

module.exports = mongoose