const modelSize = require('../models/MSize')

module.exports.index = async (req, res) => {
    const allSize = await modelSize.find()

    res.status(200).json({
        message: 'Success!',
        data: allSize
    })
}

module.exports.store = async (req, res) => {
    const { name } = req.body

    const newSize = new modelSize({
        name
    })

    await newSize.save().then((result) => {
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

    await modelSize.findById(id).then((result) => {
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
    const { name } = req.body
    const id = req.params.id

    await modelSize.updateOne({ _id: id }, {
        $set: {
            name
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
    const deleteSize = await modelSize.findOne({ _id: id })

    if (!deleteSize) {
        res.status(400).json({
            message: 'Size Not Found!'
        })
    } else {
        await modelSize.deleteOne({ _id: id }).then((result) => {
            res.status(200).json({
                message: 'Success!'
            })
        }).catch((err) => {
            res.status(400).json({
                message: err.message
            })
        })
    }
}