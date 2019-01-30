const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const QuestionModel = require('../Models/questionModel');
//const answerModel = require('../Models/answerModel');
var router = express.Router();

var urlencodedParser = bodyParser.urlencoded({extended: false});

router.get('/addquestion', function(req,res){
  res.render('addQuestion');
});

router.get('/', function(req,res,next){
    QuestionModel.getQuestions(function(rows) {
        console.log('quuee');
        //res.json(rows);
        res.render('question',{ques : rows});
      });
});

router.post('/',urlencodedParser, function(req,res){
  QuestionModel.addQuestion(req.body,function(rows){
    //res.render('/Questions');
    //console.log('data added');
    res.redirect('/Questions');
    //res.json(rows);
  });
});
router.delete('/:id', function(req,res){
  QuestionModel.deleteQuestion(req.params.id,function(rows){
    res.render('/Questions');
  });
  //console.log('delet');
});
router.put('/', function(req,res){
  res.send('Users put');
});

module.exports = router;
