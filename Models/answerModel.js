const mongoose = require('mongoose');

mongoose.connect('mongodb://ask_surbhi:surbhi20@ds125871.mlab.com:25871/askdoubts', {useNewUrlParser: true});

//create schema
var answer = mongoose.Schema({
  aname : {type: String},
  adetail: {type: String},
  aqid: {type: String},
  auid: {type: String},
  alike: Number,
  adislike: Number
});

var Answer = mongoose.model('Answer',answer);

var answerModel = {
  Answer : Answer,
  getAnswers: function(callback) {
        Answer.find({}, function(err,data){
          if(err) throw err;
          return callback(data);
      });
    },
  addAnswer: function(ansdata,callback){
      return Answer(ansdata).save(function(err,data){
       if(err) throw err;
       return callback(data);
     });
  },
  deleteAnswer: function(id,callback){
    User.findByIdAndRemove(id, function(err, data){
      if(err) throw err;
      return callback(data);
    });
  }
};
module.exports = answerModel;
