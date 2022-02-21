const express = require('express')
const router = express.Router()
const loginController = require('./login.controller')

router.get('/login',logincontroller.login)
// router.post('/login',login.Contoller.loginAction)

// router.get('/logout', usercontroller)
module.exports = router