const express = require('express')
const router = express.Router()

const mongoose = require('../models/Post')
const Post = mongoose.model('Post')

// /api/cities/  => Cities Index
router.get('/', (req, res) => {
    Post.find({})
        .then(posts => res.json(posts))
})
// /api/cities/:cityname  => City Index
router.get('/:post', (req, res) => {
    Post.find({title: req.params.post})
        .then(post => res.json(post))
})


module.exports = router