const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const passport = require('./config/passport')()

const cityController = require('./controllers/cities.js')
const userController = require('./controllers/users.js')
const postController = require('./controllers/posts.js')
const app = express()

app.use(passport.initialize())
app.use(cors())
app.use(parser.json())

app.use('/api/posts', postController)
app.use('/api/cities', cityController)
app.use('/users', userController)



app.post('/verify', verifyToken, (req, res) => {
    let verified= jwt.verify(req.token, 'JwtS3cr3tK3Y')
    res.json(verified)
})


function verifyToken(req, res, next) {
    // Get auth header value
    // when we send our token, we want to send it in our header
    const bearerHeader = req.headers['authorization'];
    // console.log(bearerHeader)
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(' ');
        // Get token from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next();
    
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}


app.listen(3001, () => console.log('Listening on port 3001 :)'))