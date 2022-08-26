const mongoose = require('mongoose')

const TrOrdersDetailBackend = mongoose.model('TrOrdersDetailBackend', {
    trOrdersId: {
        type: String,
    },
    mSizeId: {
        type: String,
    },
    price: {
        type: String,
    },
    productsId: {
        type: String,
    },
    productsName: {
        type: String,
    },
    subTotal: {
        type: String,
    },
    qty: {
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

module.exports = TrOrdersDetailBackend