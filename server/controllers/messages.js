
var http = require("http");
var https = require("https");
var md5 = require('js-md5');
var request = require("request");

var mongoose = require('mongoose'),
Messages = mongoose.model('Messages');

exports.get = function(req, res){
  Messages.find({},function(err, results) {
    return res.send(results);
  });
};

exports.getDelta = function(req, res){
  Messages.find({},function(err, results) {
    return res.send(results);
  });
};

exports.findById = function() {};
exports.add = function(req , res) {
     req.body.img = "https://www.gravatar.com/avatar/"+md5(req.body.email);
     Messages.create(req.body, function (err, message) {
        if (err) return console.log(err);
        return res.send(message);
      });

};

exports.filter = function(req, res){
 Messages.find({ $or: [ { "email": req.params.filter }, { "msg": {$regex :new RegExp("/"+req.params.filter+"/" , 'i');  } } ] },function(err, results) {
    return res.send(results);
  });
}
exports.update = function() {};
exports.delete = function() {};