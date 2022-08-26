const modelTags = require('../models/MTags')

module.exports.index = async (req, res) => {
    const allTags = await modelTags.find()

    res.status(200).json({
        message: 'Success!',
        data: allTags
    })
}

module.exports.store = async (req, res) => {
    const { name } = req.body

    const newTags = new modelTags({
        name
    })

    await newTags.save().then((result) => {
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

    await modelTags.findById(id).then((result) => {
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

    await modelTags.updateOne({ _id: id }, {
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
    const deleteTags = await modelTags.findOne({ _id: id })

    if (!deleteTags) {
        res.status(400).json({
            message: 'Tags Not Found!'
        })
    } else {
        await modelTags.deleteOne({ _id: id }).then((result) => {
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