const productModel = require('../models/Product')

module.exports.index = async (req, res) => {
    const allProduct = await productModel.find()

    res.status(200).json({
        message: 'Success!',
        data: allProduct
    })
}

module.exports.store = async (req, res) => {
    const { productName, productCode, productPhoto, productPrice, flag, description } = req.body

    const newProduct = new productModel({
        productName,
        productCode,
        productPhoto,
        productPrice,
        flag,
        description
    });
    await newProduct.save().then((result) => {
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

    await productModel.findById(id).then((result) => {
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
    const { productName, productCode, productPhoto, productPrice, flag, description } = req.body
    const id = req.params.id

    await productModel.updateOne({ _id: id }, {
        $set: {
            productName,
            productCode,
            productPhoto,
            productPrice,
            flag,
            description
        }
    }).then((result) => {
        res.status(200).json({
            message: 'Success!',
            data: result
        })
    }).catch((err) => {
        res.status(200).json({
            message: err.message
        })
    })
}

module.exports.destroy = async (req, res) => {
    const id = req.params.id
    const deleteProduct = await productModel.findOne({ _id: id })

    if (!deleteProduct) {
        res.status(400).json({
            message: 'Product Not Found!'
        })
    } else {
        await productModel.deleteOne({ _id: id }).then((result) => {
            res.status(200).json({
                message: 'Success!',
            })
        }).catch((err) => {
            res.status(200).json({
                message: err.message
            })
        })
    }
}
