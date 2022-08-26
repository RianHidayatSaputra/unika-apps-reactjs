const mongoose = require('mongoose')

const Customers = mongoose.model('Customers', {
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

module.exports = Customers