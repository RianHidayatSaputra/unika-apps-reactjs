const { Router } = require('express')
const routerCustomers = Router()
const { index, store, edit, update, destroy } = require('../controllers/CustomersController')

routerCustomers.get('/customers', index)
routerCustomers.post('/customers/add', store)
routerCustomers.get('/customers/edit/:id', edit)
routerCustomers.put('/customers/update/:id', update)
routerCustomers.delete('/customers/delete/:id', destroy)

module.exports = routerCustomers