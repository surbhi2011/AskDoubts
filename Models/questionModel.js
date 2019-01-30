const mongoose = require('mongoose');

mongoose.connect('mongodb://ask_surbhi:surbhi20@ds125871.mlab.com:25871/askdoubts', {useNewUrlParser: true});

  //create schema
  var question = mongoose.Schema({
    qname : {type : String, required:true} ,
    qdetail : String,
    quid : {type: String},
    qflag : {type: Boolean, default: true}
  });

var Question = mongoose.model('Question', question);

module.exports = {
  Question: Question,
  getQuestions: function(callback) {
        Question.find({}, function(err,data){
          if(err) throw err;
          return callback(data);
        });
    },
    addQuestion: function(qdata,callback){
        return Question(qdata).save(function(err,data){
         if(err) throw err;
         return callback(data);
       });
    },
    deleteQuestion: function(id,callback){
      return Question.findByIdAndRemove(id, function(err, data){
        if(err) throw err;
        return callback(data);
      });
    }
};
