const mysql = require('mysql');

var con = mysql.createConnection({
    host:'60.205.191.36',
    port:'3306',
    user:'root',
    password:'686011Ab!',
    database:'goods'
})
// .connect((err) => {
//     if (err) { 
//         console.log(err)
//         console.log("连接失败") }
//     else { console.log("连接成功") }
// })


//数据库连接配置

// function query(sql,callback){
//     pool.getConnection(function(err,connection){
//         connection.query(sql, function (err,rows) {
//             callback(err,rows)
//             connection.release()
//         })
//     })
// }//对数据库进行增删改查操作的基础

exports.con = con;
