const { Router } = require('express')
const routerAddressCustomers = Router()
const { index, store, edit, update, destroy } = require('../controllers/AddressCustomersController')

routerAddressCustomers.get('/address-customers', index)
routerAddressCustomers.post('/address-customers/add', store)
routerAddressCustomers.get('/address-customers/edit/:id', edit)
routerAddressCustomers.put('/address-customers/update/:id', update)
routerAddressCustomers.delete('/address-customers/delete/:id', destroy)

module.exports = routerAddressCustomers