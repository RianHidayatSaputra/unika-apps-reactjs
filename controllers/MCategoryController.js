const modelCategory = require('../models/MCatergory')

module.exports.index = async (req, res) => {
    const allCategory = await modelCategory.find()

    res.status(200).json({
        message: 'Success!',
        data: allCategory
    })
}

module.exports.store = async (req, res) => {
    const { name } = req.body

    const newCategory = new modelCategory({
        name
    })

    await newCategory.save().then((result) => {
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

    await modelCategory.findById(id).then((result) => {
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

    await modelCategory.updateOne({ _id: id }, {
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
    const deleteCategory = await modelCategory.findOne({ _id: id })

    if (!deleteCategory) {
        res.status(400).json({
            message: 'Category Not Found!'
        })
    } else {
        await modelCategory.deleteOne({ _id: id }).then((result) => {
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