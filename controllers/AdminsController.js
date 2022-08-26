const modelAdmins = require('../models/Admins')

module.exports.index = async (req, res) => {
    const allAdmins = await modelAdmins.find()

    res.status(200).json({
        message: 'Success!',
        data: allAdmins
    })
}

module.exports.store = async (req, res) => {
    const { name, photo, email, password } = req.body

    const newAdmins = new modelAdmins({
        name,
        photo,
        email,
        password
    })

    await newAdmins.save().then((result) => {
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

    await modelAdmins.findById(id).then((result) => {
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
    const { name, photo, email, password } = req.body
    const id = req.params.id

    await modelAdmins.updateOne({ _id: id }, {
        $set: {
            name,
            photo,
            email,
            password,
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
    const deleteAdmins = await modelAdmins.findOne({ _id: id })

    if (!deleteAdmins) {
        res.status(400).json({
            message: 'Admins Not Found!'
        })
    } else {
        await modelAdmins.deleteOne({ _id: id }).then((result) => {
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