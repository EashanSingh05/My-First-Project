const express = require('express')
const {getUser,createUser,updatePassword,loginUser,showUserData, showUserName} = require('../controller/user-controller')

const router = express.Router()

router.get('/get-user',getUser)
router.post('/create-user',createUser)
router.post('/login-user',loginUser)
router.post('/update-password',updatePassword)
router.get('/last-data', showUserData)
router.get('/user-name', showUserName)


module.exports = router



