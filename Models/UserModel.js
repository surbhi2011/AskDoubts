const mongoose = require('mongoose');

mongoose.connect('mongodb://ask_surbhi:surbhi20@ds125871.mlab.com:25871/askdoubts', {useNewUrlParser: true});

//create schema
var user = mongoose.Schema({
  name : {type: String},
  password: {type: String},
  email : String
});

var User = mongoose.model('User',user);

var UserModel = {
  User : User,
  getUsers: function(callback) {
        User.find({}, function(err,data){
          if(err) throw err;
          return callback(data);
      });
    },
  addUser: function(userdata,callback){
      return User(userdata).save(function(err,data){
       if(err) throw err;
       return callback(data);
     });
  },
  deleteUser: function(id,callback){
    User.findByIdAndRemove(id, function(err, data){
      if(err) throw err;
      return callback(data);
    });
  }
};
module.exports = UserModel;
