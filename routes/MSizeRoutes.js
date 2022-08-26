const { Router } = require('express')
const mSizeRouter = Router()
const { index, store, edit, update, destroy } = require('../controllers/MSizeController')

mSizeRouter.get('/msize', index)
mSizeRouter.post('/msize/add', store)
mSizeRouter.get('/msize/edit/:id', edit)
mSizeRouter.put('/msize/update/:id', update)
mSizeRouter.delete('/msize/delete/:id', destroy)

module.exports = mSizeRouter