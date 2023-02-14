var express = require('express');
const db = require('../modules/db').con;


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


exports.insert = function(req,res){
  
  var  name='123';
  var  address='上海市';
  var  goodsId='100';
  var  price='80.00';
  var  isTrue='是';
  var  item ='无';
  

  db.query("insert into info (name,address,goodsID,price,isTrue,item) values (?,?,?,?,?,?)",[name,address,goodsId,price,isTrue,item],(err,result)=>{
    if(err){
      console.log(err)
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