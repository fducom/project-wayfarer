const mongoose = require('../models/Post')
const data_posts = require('./data_posts')

const Post = mongoose.model('Post')

Post.remove({})
    .then(_ => {
        Post.collection.insert(data_posts)
            .then(seededEntries => {
                console.log(seededEntries)
                process.exit()
            })
    })
    .catch(err => {
        console.log(err)
    })