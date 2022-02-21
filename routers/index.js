const express = require('express')
const router = express.Router()
// const mainRouter = require('./main')

// const userRouter = require('./user')
const boardRouter = require('./board')
// const adminRouter = require('./admin')

// router.use('/',mainRouter)
// router.use('/user',userRouter)
router.use('/board',boardRouter)
// router.use('/admin',adminRouter)

module.exports = router