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

app.listen(3001, () => console.log('Listening on port 3001 :)'))