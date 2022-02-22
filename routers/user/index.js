const express = require('express')
const router = express.Router()
const loginController = require('./login.controller')
// const profileController = require('./profile.controller')
// const signupController = requre('./signup.controller')
// const updateController = require('./update.controller')

router.get('/login',loginController.login)
// router.post('/login',login.Contoller.loginAction)

router.post('/logout', (req, res)=>{
    res.send('로그아웃 완료')
})

router.get('/profile', (req,res)=>{
    res.send('프로필페이지입니다.')
})


router.get('/signup', (req,res)=>{
    res.send('회원가입 페이지입니다.')
})

router.post('/signup', (req,res)=>{
    res.send('회원가입 완료')
})

router.get('/update', (req,res)=>{
    res.send('회원정보수정 페이지입니다.')
})

router.post('/update', (req,res)=>{
    res.send('회원정보수정 완료')
})

router.post('/resign', (req,res)=>{
    res.send('회원 탈퇴 완료')
})
// router.get('/logout', usercontroller)
module.exports = router