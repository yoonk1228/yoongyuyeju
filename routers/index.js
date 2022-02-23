<<<<<<< HEAD
const express = require('express')
const router = express.Router()

const userRouter = require('./user')
const boardRouter = require('./board')
const mainController = require("./main.controller");
const adminRouter = require('./admin')

// router.use('/',mainRouter)
router.use('/user',userRouter)
router.use('/board',boardRouter)
router.use('/admin',adminRouter)
router.use('/user', userRouter)
router.get('/',mainController.main)

=======
const express = require('express')
const router = express.Router()
const userRouter = require('./user')
const boardRouter = require('./board')
const mainController = require("./main.controller");
// const adminRouter = require('./admin')

router.get('/',mainController.main)
router.use('/user',userRouter)
router.use('/board',boardRouter)
// router.use('/admin',adminRouter)


>>>>>>> 87f5e0a7775909b412dec0c309d4d9ece54bb8a3
module.exports = router