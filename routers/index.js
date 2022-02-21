const express = require('express')
const adminRouter=require('./admin')
const router = express.Router()
const mainRouter = require('./main')
const userRouter = require('./user')
// const boardRouter = require('./board')
// const adminRouter = require('./admin')

router.use('/',mainRouter, (req, res)=>{
    res.send('ㅎㅇ')
})
router.use('/user',userRouter)
// router.use('/board',boardRouter)
// router.use('/admin',adminRouter)

router.use('/admin',adminRouter)

module.exports = router