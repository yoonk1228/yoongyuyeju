const express = require('express')
const router = express.Router()
const viewRouter = require('./view/index.js')


router.get('/view',(req,res)=>{
    res.send('view')
})

router.get('/write',(req,res)=>{
    res.send('write')
})

router.post('write',(req,res)=>{
    res.redirect('/board/list')
})

router.use('view',viewRouter)

module.exports = router