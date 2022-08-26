const addressCustomers = require('../models/AddressCustomers')
const validator = require('validator')

module.exports.index = async (req, res) => {
    const allAddressCustomers = await addressCustomers.find()

    res.status(200).json({
        message: 'Success!',
        data: allAddressCustomers
    })
}

module.exports.store = async (req, res) => {
    const { fullName, streetAddress, townCity, phone, email } = req.body
    let patternEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let patternPhoneNumberID = /^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/g

    if (fullName == '') {
        res.status(400).json({
            message: {
                fullName: 'Full Name Has Been Required!',
            }
        })
    } else if (fullName.length < 3) {
        res.status(400).json({
            message: {
                fullName: 'Full Name Must Be longer Than 3 Characters',
            }
        })
    } else if (streetAddress == '') {
        res.status(400).json({
            message: {
                streetAddress: 'Street Address Has Been Required!',
            }
        })
    } else if (townCity == '') {
        res.status(400).json({
            message: {
                townCity: 'Town City Has Been Required!',
            }
        })
    } else if (phone == '') {
        res.status(400).json({
            message: {
                phone: 'Phone Has Been Required!',
            }
        })
    } else if (!phone.match(patternPhoneNumberID)) {
        res.status(400).json({
            message: {
                phone: 'Please Enter Valid Phone Number!',
            }
        })
    } else if (email == '') {
        res.status(400).json({
            message: {
                email: 'Email Has Been Required!',
            }
        })
    } else if (!email.match(patternEmail)) {
        res.status(400).json({
            message: {
                email: 'Please Enter Valid Email Address!',
            }
        })
    } else {

        const newAddressCustomers = new addressCustomers({
            fullName,
            streetAddress,
            townCity,
            phone,
            email
        })

        await newAddressCustomers.save().then((result) => {
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

}

module.exports.edit = async (req, res) => {
    const id = req.params.id

    await addressCustomers.findById(id).then((result) => {
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
    const { fullName, streetAddress, townCity, phone, email } = req.body
    const id = req.params.id

    await addressCustomers.updateOne({ _id: id }, {
        $set: {
            fullName,
            streetAddress,
            townCity,
            phone,
            email
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
    const deleteAddressCustomers = await addressCustomers.findOne({ _id: id })

    if (!deleteAddressCustomers) {
        res.status(400).json({
            message: 'Admins Not Found!'
        })
    } else {
        await addressCustomers.deleteOne({ _id: id }).then((result) => {
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