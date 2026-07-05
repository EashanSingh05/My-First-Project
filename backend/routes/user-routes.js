const express = require('express')
const {getUser,createUser} = require('../controller/user-controller')

const router = express.Router()

router.post('/get-user',getUser)
router.get('/create-user',createUser)


// /user/create-user
// /user/get-user

module.exports = router