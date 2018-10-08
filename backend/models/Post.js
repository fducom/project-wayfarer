const mongoose = require('../db/connection')
Schema = mongoose.Schema;

const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    _user: {type: Schema.Types.ObjectId, ref: "User"},
    _city: {type: Schema.Types.ObjectId, ref: "City"}
})

mongoose.model('Post', PostSchema)

module.exports = mongoose