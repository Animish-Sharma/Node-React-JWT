var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const cors = require('cors')

var app = express();

mongoose.connect("mongodb://localhost:27017/users",{useNewUrlParser:true,useUnifiedTopology:true})

const db=  mongoose.connection;

db.on('error', console.log.bind(console.log,'Error'));
db.once('open',()=>{
    console.log("Connection Established")
})
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
