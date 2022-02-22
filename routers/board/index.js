const express = require('express')
const router = express.Router()
const listRouter = require('./list/index.js')
// const data = require('../../moels/뭐 어디지?')

router.get('/list',(req,res)=>{
    res.render('board/list.html')
})

// router.get('/list',(req,res)=>{
//     res.render('board/list.html',{
//         data,
//     })
// })
    // 데이터베이스 오면 바로진행
    // DB에서 가져온 데이터 넌젹스로 나열하기
    // 만약 write에서 글이 써진다면 배열로 만들어진 DB라서 push를 해주면 자동으로 올라감

router.use('/list',listRouter) //


module.exports = router