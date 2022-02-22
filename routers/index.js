const express = require('express')
const router = express.Router()

const userRouter = require('./user')
const boardRouter = require('./board')
const mainController = require("./main.controller");
// const adminRouter = require('./admin')

// router.use('/',mainRouter)
router.use('/user',userRouter)
router.use('/board',boardRouter)
// router.use('/admin',adminRouter)
router.use('/user', userRouter)
router.get('/',mainController.main)

module.exports = router