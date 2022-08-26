const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/unika_apps', {
    usenewUrlParser: true,
    useUnifiedTopology: true
})

// const TrOrders = require('../models/TrOrders')
// const h = new TrOrders({
//     codeTransaction: 'tes woye',
//     customersId: 'tes',
//     quantity: 'iwefj',
//     status: 'sfjk',
//     totalPrice: 'sfjk'
// })

// h.save().then((err, result) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log(result)
// })