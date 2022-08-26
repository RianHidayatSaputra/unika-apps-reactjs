const { Router } = require('express')
const mCategoryRouter = Router()
const { index, store, edit, update, destroy } = require('../controllers/MCategoryController')

mCategoryRouter.get('/mcategory', index)
mCategoryRouter.post('/mcategory/add', store)
mCategoryRouter.get('/mcategory/edit/:id', edit)
mCategoryRouter.put('/mcategory/update/:id', update)
mCategoryRouter.delete('/mcategory/delete/:id', destroy)

module.exports = mCategoryRouter