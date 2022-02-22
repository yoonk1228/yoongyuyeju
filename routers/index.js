const express = require('express')
const adminRouter=require('./admin')
// const mainRouter=require('./main')
const router = express.Router()
// const mainRouter = require('./main')

// const userRouter = require('./user')
const boardRouter = require('./board')
const mainController = require("./main.controller");
// const adminRouter = require('./admin')

// router.use('/',mainRouter)
// router.use('/user',userRouter)
router.use('/board',boardRouter)
// router.use('/admin',adminRouter)

router.use('/admin',adminRouter)
// router.use('/main',mainRouter)
router.get('/',mainController.main)

module.exports = router