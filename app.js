// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');
// var logger = require('morgan');
// var mongoose = require('mongoose');
//
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
//
// var app = express();
//
// mongoose.connect('mongodb://localhost/express-api');
//
// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');
//
// // app.use(bodyParser.json({limit: "50mb"}));
// // app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
//
// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.post('/hello', (req, res) => {
//   console.log(req);
//
// });
// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });
//
// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
// var server = app.listen(process.env.PORT || 4000, function () {
//   var host = server.address().address
//   var port = server.address().port
//   console.log('App listening at http://%s:%s', host, port)
// })
// module.exports = app;


var express = require('express'),
  app = express();

function anyBodyParser(req, res, next) {
  var data = '';
  // req.setEncoding('utf8');
  req.on('data', function (chunk) {
    data += chunk;
  });
  req.on('end', function () {
    req.rawBody = data;
    next();
  });
}
app.use(anyBodyParser);
app.get('/', function (req, res) {
  res.send("<h1>Hello</h1>");
});

app.listen(7000, (err) => {
  if (err) console.log(err);
  console.log("working");
});
