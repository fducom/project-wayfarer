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

// app.post('/posts', function (req, res) {
//   let newPost = req.body;
//   db.Post.create(newPost,(err,savedPost)=>{
//       if(err){ return res.status(400).json({err: "error has occured"})}; 
//       res.json({data:savedPost})
//   })
// });

// Get all posts by city id
// /api/posts/:city => All posts by city
// router.get("/:cityName",(req,res)=>{
//   let cityName = req.params.cityName
//     Post.find({})
//         .populate("_city")
//         .populate("_user")
//         .exec(function(err,posts){
//           if (err) {console.log("index error: " + err);}
//           Post.find({"_city.cityName":cityName})
//           .then(posts => res.json(posts))
//   })
// })

// router.get("/:cityName",(req,res)=>{
//   Post.find({lastname: 'Robertson'},function(err, docs) {

//     // Map the docs into an array of just the _ids
//     var ids = docs.map(function(doc) { return doc._id; });

//     // Get the companies whose founders are in that set.
//     Company.find({founder: {$in: ids}}, function(err, docs) {
//         // docs contains your answer
//     });
//   });
// })

// router.post('/posts', function (req, res) {
//   let newPost = req.body;
//   db.Post.create(newPost,(err,savedPost)=>{
//       if(err){ return res.status(400).json({err: "error has occured"})}; 
//       res.json({data:savedPost})
//   })
// });


module.exports = router