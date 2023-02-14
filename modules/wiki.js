var express = require('express');
const db = require('../modules/db').con;

exports.wiki_name = function (req, res) {
    db.query('select name from baike_next order by rand() limit 5', (err, result) => {
        if (err) {
            res.send({
                status: 0,
                info: 'error',
                message: '数据库错误'
            })
        } else {
            res.send(result);
        }
    });
}

exports.wiki_baike = function(req,res){
    db.query('select content from baike order by rand() limit 5', (err, result) => {
        if (err) {
            res.send({
                status: 0,
                info: 'error',
                message: '数据库错误'
            })
        } else {
            res.send(result);
        }
    });
}

exports.baike_next = function(req,res){
    var food_search =  req.query.food_search;
    console.log("asd a",food_search);
    // `select * from baike_next where culture like '%${food_search}%'`
    db.query(`select * from baike_next where name like '%${food_search}%'`,[food_search], (err, result) => {
        if (err) {
            res.send({
                status: 0,
                info: 'error',
                message: '数据库错误'
            })
        } else {
            res.send(result);
        }
    });
}