const { Router } = require('express')
const routerTrOrders = Router()
const { index, store, edit, update, destroy } = require('../controllers/TrOrdersController')

routerTrOrders.get('/trorders', index)
routerTrOrders.post('/trorders/add', store)
routerTrOrders.get('/trorders/edit/:id', edit)
routerTrOrders.put('/trorders/update/:id', update)
routerTrOrders.delete('/trorders/delete/:id', destroy)

module.exports = routerTrOrders