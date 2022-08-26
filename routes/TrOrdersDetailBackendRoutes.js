const { Router } = require('express')
const routerTrOrdersDetailBackend = Router()
const { index, store, edit, update, destroy } = require('../controllers/TrOrderDetailBackendController')

routerTrOrdersDetailBackend.get('/trorders-detail-backend', index)
routerTrOrdersDetailBackend.post('/trorders-detail-backend/add', store)
routerTrOrdersDetailBackend.get('/trorders-detail-backend/edit/:id', edit)
routerTrOrdersDetailBackend.put('/trorders-detail-backend/update/:id', update)
routerTrOrdersDetailBackend.delete('/trorders-detail-backend/delete/:id', destroy)

module.exports = routerTrOrdersDetailBackend