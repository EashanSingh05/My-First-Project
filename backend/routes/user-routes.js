const express = require('express')
const {getUser,createUser,updatePassword} = require('../controller/user-controller')

const router = express.Router()

router.get('/get-user',getUser)
router.post('/create-user',createUser)
router.post('/update-password',updatePassword)

// /user/create-user
// /user/get-user

module.exports = router