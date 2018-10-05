const mongoose = require('../db/connection')

const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    _user: {type: Schema.Types.ObjectId, ref: "User"}
})

mongoose.model('Post', PostSchema)

module.exports = mongoose