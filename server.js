const express = require('express')
const app = express()
const router = require('./routers')
const PORT = process.env.PORT || 3000

app.use(express.static('public'))
app.use(express.urlencoded({extended:true,}))
app.use('/',router)

app.listen(PORT,()=>{
  console.log(`node mini project 서버시작!!!, 포트번호 : ${PORT}`)
})