const { Router } = require('express')
const mTagsRouter = Router()
const { index, store, edit, update, destroy } = require('../controllers/MTagsController')

mTagsRouter.get('/mtags', index)
mTagsRouter.post('/mtags/add', store)
mTagsRouter.get('/mtags/edit/:id', edit)
mTagsRouter.put('/mtags/update/:id', update)
mTagsRouter.delete('/mtags/delete/:id', destroy)

module.exports = mTagsRouter