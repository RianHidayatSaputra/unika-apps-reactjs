const modelTrOrdersDetailBackend = require('../models/TrOrdersDetailBackend')

module.exports.index = async (req, res) => {
    const allTrOrdersDetailBackend = await modelTrOrdersDetailBackend.find()

    res.status(200).json({
        message: 'Success!',
        data: allTrOrdersDetailBackend
    })
}

module.exports.store = async (req, res) => {
    const { trOrdersId, mSizeId, price, productsId, productsName, subTotal, qty } = req.body

    const newTrOrdersDetailBackend = new modelTrOrdersDetailBackend({
        trOrdersId,
        mSizeId,
        price,
        productsId,
        productsName,
        subTotal,
        qty
    })

    await newTrOrdersDetailBackend.save().then((result) => {
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

    await modelTrOrdersDetailBackend.findById(id).then((result) => {
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
    const { trOrdersId, mSizeId, price, productsId, productsName, subTotal, qty } = req.body
    const id = req.params.id

    await modelTrOrdersDetailBackend.updateOne({ _id: id }, {
        $set: {
            trOrdersId,
            mSizeId,
            price,
            productsId,
            productsName,
            subTotal,
            qty
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
    const deleteTrOrdersDetailBackend = await modelTrOrdersDetailBackend.findOne({ _id: id })

    if (!deleteTrOrdersDetailBackend) {
        res.status(400).json({
            message: 'TrOrderDetail Not Found!'
        })
    } else {
        await modelTrOrdersDetailBackend.deleteOne({ _id: id }).then((result) => {
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