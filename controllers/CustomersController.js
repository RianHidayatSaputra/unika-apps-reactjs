const modelCustomers = require('../models/Customers')

module.exports.index = async (req, res) => {
    const allCustomers = await modelCustomers.find()

    res.status(200).json({
        message: 'Success!',
        data: allCustomers
    })
}

module.exports.store = async (req, res) => {
    const { name, photo, email, password } = req.body

    const newCustomers = new modelCustomers({
        name,
        photo,
        email,
        password
    })

    await newCustomers.save().then((result) => {
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

    await modelCustomers.findById(id).then((result) => {
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

    await modelCustomers.updateOne({ _id: id }, {
        $set: {
            name,
            photo,
            email,
            password
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
    const deleteCustomers = await modelCustomers.findOne({ _id: id })

    if (!deleteCustomers) {
        res.status(400).json({
            message: 'Customers Not Found!'
        })
    } else {
        await modelCustomers.deleteOne({ _id: id }).then((result) => {
            res.status(200).json({
                message: 'Success!'
            })
        }).catch((err) => {
            res.status(200).json({
                message: err.message
            })
        })
    }
}