const mongoose = require('../db/connection')

const PostSchema = new mongoose.Schema({
    title: String,
    description: String,

})

mongoose.model('Post', PostSchema)

module.exports = mongoose