var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// var usersRouter = require('./routes/build');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/u', usersRouter);
// app.use('/build', indexRouter);

app.use(function (req, res) {
  res.status(404);
  res.render('404.hbs', {
    // layout: 'errorPages.handlebars',
    title: '404: Page Not Found',
  });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// Handle 500
app.use(function (error, req, res, next) {
  res.status(500);
  res.render('500', {
    title: '500: Internal Server Error',
    error: error,
  });
});

const port = process.env.PORT || 5001;

app.listen(port, () => {
  console.log(`Making web application babies on port ${port}...`);
  console.log('Launch Successful');
});

module.exports = app;
