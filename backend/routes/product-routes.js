const {Router} = require('express')
const {addProduct} = require('../controller/product-controller')

const router = express.Router()

route.post('/add-product', addProduct)

module.exports = router
