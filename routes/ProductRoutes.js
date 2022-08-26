const { Router } = require('express')
const router = Router()

const { index, store, edit, update, destroy } = require('../controllers/ProductControlller')

router.get('/products', index)
router.post('/products/add', store)
router.get('/products/edit/:id', edit)
router.put('/products/update/:id', update)
router.delete('/products/delete/:id', destroy)


module.exports = router