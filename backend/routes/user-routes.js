const express = require('express')
const {getUser,createUser} = require('../controller/user-controller')

const router = express.Router()

router.post('/',getUser)
router.get('/',createUser)


module.exports = router