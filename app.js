const express = require('express');
const mongoose = require('mongoose');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const userRoute = require('./Routes/userRoute');
const questionRoute = require('./Routes/questionRoute');
const login = require('./Routes/login');
const router = require('express-route');
const path = require('path');
const session = require('express-session');
const answerRoute = require('./Routes/answerRoute');
//var router = express.Router();
var app = express();

//set up view engine
app.set('views', path.join(__dirname, 'Views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: false }));
//app.use(express.cookieParser());
// app.use(session({secret: 'surbhi_jain',
//   user: {name: String, password: String},
//   //store : sessionStore,
//   proxy: true,
//   resave: true,
//   saveUninitialized: true
// }));

//for static files
app.use(express.static('./public'));

//app.use('database',db);
 //app.use(app);
 // app.use('/', function(req,res){
 //   res.redirect('/Questions');
 // });

 app.use('/login',login);
 app.use('/Users', userRoute);
 app.use('/Questions', questionRoute);
 app.use('/Answers',answerRoute);
 app.use('/',function(req,res,next){
   res.send('Hello');
 });
//answerRoute(app);
// var ssn;
//  app.get('/', function(req,res,next){
//    ssn = req.session;
//    //console.log('get reqq');
//    ssn.name;
//    ssn.password;
//
//    if(ssn.name)
//    {
//      console.log('users');
//      //res.render('user');
//    }
//    else {
//      //console.log('sry');
//      res.render('login');
//    }
//  });
//  app.use(app);


app.listen(3000);
console.log('listening');
//module.exports = app;
