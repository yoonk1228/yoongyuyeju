const express=require('express')
const app=express()
const router=express.Router()

app.use(express.urlencoded({extended:true,}))

router.post('/login',(req,res)=>{
    console.log('로그인완료')
    res.send('로그인')
})


app.get('/admin/list/forced out',(req,res)=>{
    res.render('')
})


app.post('/admin/list/forced out',(req,res)=>{
    res.render('')
})

app.get('/admin/list/Managing_board',(req,res)=>{
    res.render('')
})

app.post('/admin/list/Managing_board',(req,res)=>{
    res.render('')
})

app.get('/admin/list/level adjustment',(req,res)=>{
    res.render('')
})

app.post('/admin/list/level adjustment',(req,res)=>{
    res.render('')
})

module.exports=router