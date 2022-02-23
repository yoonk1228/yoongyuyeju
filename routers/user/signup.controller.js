const db = require('../../db')

exports.join = (req,res)=>{
    res.render('user/signup')
}

exports.joinAction = (req,res) => {
    let userid =req.userid,
    userpw = req.userpw,
    username = req.username,
    nickname = req.nickname,
    gender = req.gender,
    adress = req.adress,
    email = req.email,
    tel = req.tel,
    birth = req.birth


    let sql = `insert into personal(userid, userpw, username, nickname, gender, adress, email, tel, birth) 
    values('${userid}','${userpw}','${username}', '${nickname}',
    '${gender}', '${adress}', '${email}', '${tel}', '${birth}')`

    db.getConnection( conn => {
        conn.query( sql, (err, result)=>{
            console.log(result)
            // if( error.errno == 1062 ) res.send('아이디가 중복됩니다. <a href="/user/join">회원가입 다시하기</a>')
            // else if(error) throw error
            // else if(result.affectedRows > 0) {
            //     res.redirect('/') // 성공            
            // }
        })
        // conn.release()
        res.redirect('/')
    })
}
