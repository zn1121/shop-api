var express = require('express');
var app = express();

exports.file_download = function(req,res){
  res.download('zn-resume.pdf');
}
