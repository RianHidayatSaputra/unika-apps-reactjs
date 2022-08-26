const mongoose = require('mongoose')

const MSize = mongoose.model('MSize', {
    name: {
        type: String,
        required: true
    }
})

module.exports = MSize