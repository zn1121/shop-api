var express = require('express');
const db = require('../modules/db').con;
const date = require('date-and-time')

//请求所有数据
exports.getGoods = function(req,res){
  var id = req.query.id;
  db.query('select * from goods',(err,result)=>{
    // console.log("result",result[0].id)
    if(err){
      res.send({
        status: 0,
        info: 'error',
        message: '数据库错误'
      })
    }else{
      res.send(result);
    }
  });
}


//测试翻页接口数据请求
exports.getGoodsPage = function(req,res){
  var min = req.query.index*10;
  var max = min+9
  db.query('select * from goods limit ?,?',[min,max],(err,result)=>{
    // console.log("result",result[0].id)
    if(err){
      res.send({
        status: 0,
        info: 'error',
        message: '数据库错误'
      })
    }else{
      res.send(result);
    }
  });
}

exports.insert = function(req,res){
  console.log("req.query:",req.query);
  var now = new Date()
  var  name=req.query.name;//下单用户名
  var  num=req.query.num;//下单数量
  var  goodsId=req.query.goodsID;//下单商品ID
  var  price=req.query.price;
  var  time =date.format(now,'YYYY/MM/DD HH:mm:ss');
  var  mail_name = req.query.mail_name;
  var  mail_address = req.query.mail_address;
  var  mail_number = req.query.mail_number;
  var  remark = req.query.remark
  //插入信息
  db.query("insert into info (name,num,goodsID,price,time,mail_name,mail_address,mail_number,remark) values (?,?,?,?,?,?,?,?,?)",[name,num,goodsId,price,time,mail_name,mail_address,mail_number,remark],(err,result)=>{
    if(err){
      res.send({
        status: 0,
        info: 'error',
        message: '数据库错误'
      })
    }else{
      res.send(result);
    }
  })
}