var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/*
 here goes our Routers
*/



var app = express();

app.use(logger('dev'));
app.use(express.json({ type: 'application/json', }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*
    CHANGES HERE
*/

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');



app.use('/', indexRouter);
app.use('/users', usersRouter);






var mongoose = require('mongoose');
const db_name ="test"
const db = mongoose.connect(`mongodb://localhost/${db_name}`, { useNewUrlParser: true, useUnifiedTopology: true });
db.then(() => {
    console.log("db connected ...")
}).catch(err => {
    console.error("connection failed ... : ", err)
})

module.exports = app;
