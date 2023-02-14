const mysql = require('mysql');
var con = mysql.createConnection({
    host:"39.96.50.201",
    user:"root",
    password:"",
    database:"platter"
})//数据库连接配置

// function query(sql,callback){
//     pool.getConnection(function(err,connection){
//         connection.query(sql, function (err,rows) {
//             callback(err,rows)
//             connection.release()
//         })
//     })
// }//对数据库进行增删改查操作的基础

exports.con = con;
