const express = require('express')
const {getUser,createUser,updatePassword,loginUser,showUserData} = require('../controller/user-controller')

const router = express.Router()

router.get('/get-user',getUser)
router.post('/create-user',createUser)
router.post('/login-user',loginUser)
router.post('/update-password',updatePassword)
router.get('/last-data', showUserData)


// /user/create-user
// /user/get-user

module.exports = router