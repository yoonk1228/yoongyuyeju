const express = require('express')
const adminRouter=require('./admin')
const router = express.Router()
const mainRouter = require('./main')

router.use('/',mainRouter)

router.use('/admin',adminRouter)

module.exports = router