const express = require('express');
const UserModel = require('../Models/UserModel');
const bodyParser = require('body-parser');
const session = require('express-session');
const questionRoute = require('./questionRoute');
var router = express.Router();
var urlencodedParser = bodyParser.urlencoded({extended: false});

var ssn;
router.get('/', function(req,res,next){
  // ssn= req.session;
  // ssn.name;
  // ssn.password;
   res.render('login');
  console.log('gettt');
});

router.post('/', urlencodedParser, function(req,res,next){
  console.log('post');
//  ssn = req.session;
    UserModel.User.find({name: req.body.name}, function(err,user){
      if(!user){
        //res.redirect('signup');
        console.log('user not found');
      }
      else {
        if(req.body.password === user[0].password){
          // ssn.name= req.body.name;
          // ssn.password = req.body.password;
          // //res.json(ssn);
          console.log(req.body.password + '   '+ user[0].password);
          res.redirect('/Users');
          //console.log(ssn.name);
        }
        else {
          //res.redirect('/login');
          console.log('error pass');
        }
      }
    });
  console.log('post req');
});

module.exports = router;
