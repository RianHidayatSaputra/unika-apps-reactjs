const mongoose = require('mongoose')

const MTags = mongoose.model('MTags', {
    name: {
        type: String,
        required: true
    }
})

module.exports = MTags