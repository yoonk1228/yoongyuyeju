const express=require('express')
const app=express()
const router=express.Router()

router.post('/forced_out',(req,res)=>{
    console.log('강퇴완료')
    res.send('강퇴')
})

router.post('/managing_board',(req,res)=>{
    console.log('게시판관리완료')
    res.send('게시판삭제')
})

router.post('/level_adjustment',(req,res)=>{
    console.log('등급관리완료')
    res.send('등급관리')
})

app.get('/admin/user/forced out',(req,res)=>{
    res.render('')
})

app.post('/admin/user/forced out',(req,res)=>{
    res.render('')
})

app.get('/admin/board/Managing_board',(req,res)=>{
    res.render('')
})

app.post('/admin/board/Managing_board',(req,res)=>{
    res.render('')
})

app.get('/admin/user/level adjustment',(req,res)=>{
    res.render('')
})

app.post('/admin/user/level adjustment',(req,res)=>{
    res.render('')
})

module.exports=router