const mongoose = require('mongoose')

const TrOrders = mongoose.model('TrOrders', {
    codeTransaction: {
        type: String,
    },
    customersId: {
        type: String,
    },
    totalQuantity: {
        type: String,
    },
    status: {
        type: String,
    },
    totalPrice: {
        type: String,
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

module.exports = TrOrders