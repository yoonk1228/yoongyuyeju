require('dotenv').config()
const mysql = require('mysql')

const host = process.env.DB_HOST || 'localhost'
const user = process.env.DB_USER || 'gyuri'
const password = process.env.DB_PASSWORD || 'Rbfl0821*'
const database = process.env.DB_DATABASE || 'YGYJ'


const config = {host,user,password,database}
const pool = mysql.createPool(config)

//여기부터 아래 주석까지 '규리' 만듦
exports.getConnection = (cb) => {
    pool.getConnection((err,conn)=>{
        if(!err) {
            cb(conn)
        }

        pool.releaseConnection(conn)
    })
}
//여기까지