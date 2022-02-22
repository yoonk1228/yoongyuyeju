const express = require('express')
const router = express.Router()
// const adminRouter=require('./admin')
const userRouter = require('./user')
const boardRouter = require('./board')
const mainController = require("./main.controller");
const adminRouter = require('./admin')

router.use('/board',boardRouter)
// router.use('/admin',adminRouter)
router.use('/user', userRouter)
router.get('/',mainController.main)

module.exports = router