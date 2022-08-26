const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

const router = require('./routes/ProductRoutes')
const mCategoryRouter = require('./routes/MCategoryRoutes')
const mSizeRouter = require('./routes/MSizeRoutes')
const mTagsRouter = require('./routes/MTagsRoutes')
const routerAdmins = require('./routes/AdminsRoutes')
const routerCustomers = require('./routes/CustomersRoutes')
const routerTrOrders = require('./routes/TrOrdersRoutes')
const routerTrOrdersDetail = require('./routes/TrOrdersDetailRoutes')
const routerTrOrdersDetailBackend = require('./routes/TrOrdersDetailBackendRoutes')
const routerAddressCustomers = require('./routes/AddressCustomersRoutes')

app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

require('./utils/db')

app.use(router)
app.use(mCategoryRouter)
app.use(mSizeRouter)
app.use(mTagsRouter)
app.use(routerAdmins)
app.use(routerCustomers)
app.use(routerTrOrders)
app.use(routerTrOrdersDetail)
app.use(routerTrOrdersDetailBackend)
app.use(routerAddressCustomers)


app.listen(9000, console.log('App listening in the Port 9000...'))