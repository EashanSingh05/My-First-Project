const {Router} = require('express');
const {createAdmin,loginAdmin} = require('../controller/admin-controller')

const router = Router()

router.post("/create-admin", createAdmin)
router.post("/login-admin", loginAdmin)

module.exports = router