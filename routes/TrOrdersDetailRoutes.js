const { Router } = require('express')
const routerTrOrdersDetail = Router()
const { index, store, edit, update, destroy, destroyMany } = require('../controllers/TrOrdersDetailController')

routerTrOrdersDetail.get('/trorders-detail', index)
routerTrOrdersDetail.post('/trorders-detail/add', store)
routerTrOrdersDetail.get('/trorders-detail/edit/:id', edit)
routerTrOrdersDetail.put('/trorders-detail/update/:id', update)
routerTrOrdersDetail.delete('/trorders-detail/delete/:id', destroy)
routerTrOrdersDetail.delete('/trorders-detail/delete', destroyMany)

module.exports = routerTrOrdersDetail