const mysql = require('mysql');
/*-------------------------------------*/
// var con = mysql.createConnection({
//     host: '60.205.191.36',
//     port: '3306',
//     user: 'root',
//     password: '686011Ab!',
//     database: 'goods'
// })
// .connect((err) => {
//     if (err) { 
//         console.log(err)
//         console.log("连接失败") }
//     else { console.log("连接成功") }
// })
/*-------------------------------------*/

//数据库连接配置
var connection = {
    host: '60.205.191.36',
    port: '3306',
    user: 'root',
    password: '686011Ab!',
    database: 'goods'
}
// 用于保存数据连接实例
var con = null;
var pingInterval;
// 如果数据连接出错，则重新连接
function handleError(err) {
    logger.info(err.stack || err);
    connect();
}
// 建立数据库连接
function connect() {
    if (con !== null) {
        con.destroy();
        con = null;
    }
    con = mysql.createConnection(connection);
    con.connect(function (err) {
        if (err) {
            logger.info("error when connecting to db,reConnecting after 2 seconds:", err);
            setTimeout(connect, 2000);
        }
    });
    con.on("error", handleError);
    // 每3个小时ping一次数据库，保持数据库连接状态
    clearInterval(pingInterval);
    pingInterval = setInterval(() => {
        console.log('ping...');
        con.ping((err) => {
            if (err) {
                console.log('ping error: ' + JSON.stringify(err));
            }
        });
    }, 3600000);
}
connect();

exports.con = con;
