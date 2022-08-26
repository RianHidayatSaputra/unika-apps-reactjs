const mongoose = require('mongoose')

const MCategory = mongoose.model('MCategory', {
    name: {
        type: String,
        required: true
    }
})

module.exports = MCategory