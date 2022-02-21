const express = require('express')
const router = express.Router()
const listRouter = require('./list/index.js')

router.get('/list',(req,res)=>{
    res.send('list 페이지 ㄱㄱ')
})

router.use('/list',listRouter)


module.exports = router