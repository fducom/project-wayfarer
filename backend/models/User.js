const mongoose = require('../db/connection')

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
		unique: true 
	},
    password: {
        type: String, 
        required: true
	},
	city: {
        type: String
	}
})

mongoose.model('User', UserSchema)

module.exports = mongoose