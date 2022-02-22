require('dotenv').config()
const mysql = require('mysql')

const host = process.env.DB_HOST || 'localhost'
const user = process.env.DB_USER || 'ingoo'
const password = process.env.DB_PASSWORD || 'ingoo'
const database = process.env.DB_DATABASE || 'YGYJ'


const config = {host,user,password,database}
const pool = mysql.createPool(config)


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