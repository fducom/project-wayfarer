const express = require('express')
const router = express.Router()

const mongoose = require('../models/Post')
const Post = mongoose.model('Post')


// /api/posts/  => Posts Index
router.get('/', (req, res) => {
    Post.find({})
      .populate("_city")
      .populate("_user")
        .then(posts => res.json(posts))
})

// Create post
router.post('/new', function (req, res) {
  let newPost = req.body;
  Post.create(newPost,(err,savedPost)=>{
      if(err){ return res.status(400).json({err: "error has occured"})}; 
      res.json({data:savedPost})
  })
});

// Delete post
router.delete('/:id', (req, res) => {
  let postId = req.params.id;
  Post.deleteOne(
      { _id: postId },
      (err, deletedPost) => {
          if(err){ return res.status(400).json({err: "error has occured"})}
          res.json({data:deletedPost});
  });
});

// Get all posts by city id
// /api/posts/:city => All posts by city
router.get("/cities/:cityId",(req,res)=>{
  console.log(req.params.cityId)
  Post.find({_city: req.params.cityId}, (err, cityPosts)=>{
    if(err){console.log(err)}
    else{
      console.log("City posts: "+cityPosts)
      res.json(cityPosts)
    }
  })
})
// Get all posts by user id
// /api/posts/users/:id => All posts by city
router.get("/users/:id",(req,res)=>{
  Post.find()
    .populate({
      path: '_city'
    }).populate({
      path: '_user'
    }).exec(function(err, users) {
    let array = []
    users.forEach(elem =>{
      if (elem._user._id == req.params.id){
        array.push(elem)
      }
    })
    res.json({data:array})
  });
})

module.exports = router