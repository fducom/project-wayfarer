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
router.get('/:title', (req, res) => {
    let title = req.params.title
    User.findOne({ title: title })
      .then(user => res.send(user))
      .catch(function(err) { 
  
        res.status.json(404)
      })
});
    
router.post('/createPost', (req, res)=>{
    let email = req.body.email
    User.findOne({ email: email })
    .then(user =>{
      if(!user){res.status(500)}
      res.send(user)
    })
    .catch(function(err) { 
      res.status(404)
    })
});


module.exports = router