const express = require('express')
const router = express.Router()

// router.post('/delete',(req,res)=>{
//     res.redirect('/board/list')
// })

router.get('/update',(req,res)=>{
    res.send('update get')
})

// router.post('/update',(req,res)=>{
//     res.redirect('/board/list')
// })


module.exports = router