var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var download = require('./modules/dowmload');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bang = require('./modules/bangnipin');
var suiji = require('./modules/suijipin');
var zizhu = require('./modules/zizhupin');
var wiki_cq = require('./modules/wiki')
var db = require('./modules/db');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//下载.doc
app.get('/download',download.file_download);
//帮你拼
app.get('/bangnipin',bang.bangnipin);
//帮你拼荤菜接口
app.get('/help_hc',bang.help_hc);
//帮你拼素菜接口
app.get('/help_sc',bang.help_sc);
//随机拼
app.get('/suijipin',suiji.suijipin);
//自主拼
app.get('/zizhupin',zizhu.zizhupin);
//自主拼的二级页面
app.get('/zizhupin_index',zizhu.zizhupin_index);
//自主拼推荐页
app.get('/zizhupin_tuijian',zizhu.zizhupin_tuijian);
//食物百科为你推荐
app.get('/wiki_name',wiki_cq.wiki_name);
//食物百科小贴士
app.get('/wiki_tieshi',wiki_cq.wiki_baike);
//食物百科搜索页面
app.get('/wiki_baike',wiki_cq.baike_next);


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
