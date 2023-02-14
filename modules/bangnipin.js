var express = require('express');
const db = require('../modules/db').con;


exports.bangnipin = function(req,res){
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
  });
}
exports.help_hc = function(req,res){
  var food_hc_taste = req.query.food_hc_taste;
  var food_hc_caixi = req.query.food_hc_caixi;
  db.query('select * from huncai where taste=? and caixi=?',[food_hc_taste,food_hc_caixi],(err,result)=>{
    if(err){
      res.send({
        status: 0,
        info: 'error',
        message: '数据库错误'
      })
    }else{
      res.send(result);
      console.log(result);
    }
  })
}
exports.help_sc = function(req,res){
  var food_sc_taste = req.query.food_sc_taste;
  var food_sc_caixi = req.query.food_sc_caixi;
  db.query('select * from sucai where taste=? and caixi=?',[food_sc_taste,food_sc_caixi],(err,result)=>{
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