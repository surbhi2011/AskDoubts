const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var UserModel = require('../Models/UserModel');
var router = express.Router();

var urlencodedParser = bodyParser.urlencoded({extended: false});

router.get('/adduser', function(req,res){
  res.render('adduser');
});

router.get('/', function(req,res){
  //console.log('users');
  UserModel.getUsers(function(err,rows) {
      if(err) console.log(err);
        res.render('user',{ users : rows});
    //console.log('data');
  });
});

router.post('/',urlencodedParser, function(req,res,next){
  UserModel.addUser(req.body,function(rows){
    //this.get('/');
    //console.log('added');
    res.redirect('/Users');
  });
});

router.delete('/:id', function(req,res){
  UserModel.deleteUser(req.params.id,function(rows){
    //console.log('deleted '+rows);
    res.redirect('/Users');
  });

});

router.put('/', function(req,res){
  res.send('Users put');
});


module.exports = router;
