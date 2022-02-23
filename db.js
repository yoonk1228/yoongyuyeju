require('dotenv').config()
const mysql = require('mysql2')

const host = process.env.DB_HOST || 'localhost'
const user = process.env.DB_USER || 'ingoo'
const password = process.env.DB_PASSWORD || 'ingoo'
const database = process.env.DB_DATABASE || 'YGYJ'


const config = {host,user,password,database,connectionLimit: 10}

const pool = mysql.createPool(config)

// // connection 생성 이벤트
// pool.on('acquire',(connection)=>{
//     console.log(`Connection acquire ${connection.threadId}`)
// })

// // connection 반환 이벤트 
// pool.on('release',(connection)=>{
//     console.log(`Connection released ${connection.threadId}`)
// })

// pool.getConnection( (err,conn)=>{
//     conn.query('select * from board',(error,result)=>{
//         console.log(result)
//     })
// })

module.exports = pool


// exports.getConnection = (cb) => {
//     pool.getConnection((err,conn)=>{
//         if(!err) {
//             cb(conn)
//         }
//         pool.releaseConnection(conn)
//     })
// }