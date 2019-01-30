const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');

var router = express.Router();

var urlencodedParser = bodyParser.urlencoded({extended: false});

//for get requests
router.get('/Answers',function(req,res,next){
  //get data from mongodb and pass it to view
  console.log('djkj');
});
router.get('/addAnswer.ejs', function(req,res){
  res.render('addAnswer.ejs');
});
//for post requests
router.post('/Answers',urlencodedParser, function(req, res){
  //get data from the view and add it to mongodb
  Answer(req.body).save(function(err, data){
    if(err) throw err;
    //console.log('item saved');
    res.json(data);
  });
});

router.delete('/Answers/:id',function(req,res){
  //delete the requested item from mongodb
  Answer.findByIdAndRemove(req.params.id,function(err, data){
      if(err) throw err;
      res.json(data);
  });
});

module.exports = router;
