const mongoose = require('mongoose')

const Product = mongoose.model('Product', {
    productName: {
        type: String,
        required: true
    },
    productCode: {
        type: String,
        required: true
    },
    productPhoto: {
        type: String,
        required: true
    },
    productPrice: {
        type: Number,
        required: true
    },
    flag: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    }
})

module.exports = Product