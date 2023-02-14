var express = require('express');
const db = require('../modules/db').con;


exports.zizhupin = function(req,res){
  var food_name = req.query.food_name;
  
  db.query('select * from bangni where name=?',[food_name],(err,result)=>{
    if(err){
      res.send({
        status: 0,
        info: 'error',
        message: '数据库错误'
      })
    }else{
        if(result[0].hunsu == "荤菜"){
          db.query('select * from sucai order by rand() limit 5',(err,result)=>{
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
        }else{
          db.query('select * from huncai order by rand() limit 5',(err,result)=>{
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
    }
  });
  }

exports.zizhupin_index = function(req,res){
  var food_name = req.query.food_name;
  db.query('select * from bangni where name=?',[food_name],(err,result)=>{
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

exports.zizhupin_tuijian = function(req,res){
  db.query('select name from  bangni order by rand() limit 8',(err,result) => {
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