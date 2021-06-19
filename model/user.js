const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    bio: { 
        type: String, 
        defalut: null
     },
    image: { 
        type: String, 
        defalut: null
    },
    createdAt: { 
        type: Date, default: 
        Date.now 
    },
    updatedAt: { 
        type: Date, 
        default: Date.now 
    }
})

module.exports = mongoose.model('User',UserSchema)