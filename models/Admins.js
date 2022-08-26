const mongoose = require('mongoose')

const Admins = mongoose.model('Admins', {
    name: {
        type: String,
        require: true
    },
    photo: {
        type: String,
        reequired: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = Admins