const { Router } = require('express')
const routerAdmins = Router()
const { index, store, edit, update, destroy } = require('../controllers/AdminsController')

routerAdmins.get('/admins', index)
routerAdmins.post('/admins/add', store)
routerAdmins.get('/admins/edit/:id', edit)
routerAdmins.put('/admins/update/:id', update)
routerAdmins.delete('/admins/delete/:id', destroy)

module.exports = routerAdmins