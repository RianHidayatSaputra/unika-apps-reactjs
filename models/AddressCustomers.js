const mongoose = require('mongoose')

const AddressCustomers = mongoose.model('AddressCustomers', {
    fullName: {
        type: String,
        required: true
    },
    streetAddress: {
        type: String,
        required: true
    },
    townCity: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
})

module.exports = AddressCustomers