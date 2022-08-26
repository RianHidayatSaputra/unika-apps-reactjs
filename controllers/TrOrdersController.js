const modelTrOrders = require('../models/TrOrders')

module.exports.index = async (req, res) => {
    const allTrOrders = await modelTrOrders.find()

    res.status(200).json({
        message: 'Success!',
        data: allTrOrders
    })
}

module.exports.store = async (req, res) => {
    const { codeTransaction, customersId, totalQuantity, status, totalPrice } = req.body

    const newTrOrders = new modelTrOrders({
        codeTransaction,
        customersId,
        totalQuantity,
        status,
        totalPrice
    })

    await newTrOrders.save().then((result) => {
        res.status(200).json({
            message: 'Success!',
            data: result
        })
    }).catch((err) => {
        res.status(400).json({
            message: err.message
        })
    })
}

module.exports.edit = async (req, res) => {
    const id = req.params.id

    await modelTrOrders.findById(id).then((result) => {
        res.status(200).json({
            message: 'Success!',
            data: result
        })
    }).catch((err) => {
        res.status(400).json({
            message: err.message
        })
    })
}

module.exports.update = async (req, res) => {
    const { codeTransaction, customersId, totalQuantity, status, totalPrice } = req.body
    const id = req.params.id

    await modelTrOrders.updateOne({ _id: id }, {
        $set: {
            codeTransaction,
            customersId,
            totalQuantity,
            status,
            totalPrice
        }
    }).then((result) => {
        res.status(200).json({
            message: 'Success!',
            data: result
        })
    }).catch((err) => {
        res.status(400).json({
            message: err.message
        })
    })
}

module.exports.destroy = async (req, res) => {
    const id = req.params.id
    const deleteTrOrders = await modelTrOrders.findOne({ _id: id })

    if (!deleteTrOrders) {
        res.status(400).json({
            message: 'TrOrder Not Found!'
        })
    } else {
        await modelTrOrders.deleteOne({ _id: id }).then((result) => {
            res.status(200).json({
                message: 'Success!',
            })
        }).catch((err) => {
            res.status(400).json({
                message: err.massage
            })
        })
    }
}