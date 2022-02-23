exports.login = (req,res) => {
    res.render('user/login')
}

// exports.loginAction = (req,res)=>{
//     let {userid,userpw} = req.body
//     let [item] = user.filter(v=>(v.userid == userid && v.userpw == userpw))
//     //위 코드의 목적:
//     //사용자에게 받은정보를 서버에있는 리스트중에서 하나만 가져오기위해서.
//     //filter() = forEach()
//     if(item != undefined){
//         //로그인 할수있는경우
//         req.session.user={ ...item }
//         res.redirect('/')
//     }else{
//         //로그인 못하는경우
//         res.send(alertmove('/user/login','아이디와 패스워드가 일치하지않습니다'))
//     }
// }