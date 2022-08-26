const modelTrOrdersDetail = require('../models/TrOrdersDetail')
const localStorageNode = require('store2')

module.exports.index = async (req, res) => {
    const allTrOrdersDetail = await modelTrOrdersDetail.find()

    localStorageNode.set('tes', allTrOrdersDetail)
    console.log(localStorageNode('tes'))

    res.status(200).json({
        message: 'Success!',
        data: allTrOrdersDetail
    })
}

module.exports.store = async (req, res) => {
    const { trOrdersId, mSizeId, price, productsId, productsName, subTotal, qty } = req.body

    const newTrOrdersDetail = new modelTrOrdersDetail({
        trOrdersId,
        mSizeId,
        price,
        productsId,
        productsName,
        subTotal,
        qty
    })

    await newTrOrdersDetail.save().then((result) => {
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

    await modelTrOrdersDetail.findById(id).then((result) => {
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

    await modelTrOrdersDetail.updateOne({ _id: id }, {
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
    const deleteTrOrdersDetail = await modelTrOrdersDetail.findOne({ _id: id })

    if (!deleteTrOrdersDetail) {
        res.status(400).json({
            message: 'TrOrderDetail Not Found!'
        })
    } else {
        await modelTrOrdersDetail.deleteOne({ _id: id }).then((result) => {
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

module.exports.destroyMany = async (req, res) => {

    if (modelTrOrdersDetail.data == []) {
        res.status(400).json({
            message: 'TrOrderDetail Not Found!'
        })
    } else {
        await modelTrOrdersDetail.deleteMany({}).then((result) => {
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