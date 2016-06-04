var mongoose = require('mongoose'),
autoIncrement = require("mongodb-autoincrement");
Schema = mongoose.Schema;



var MessagesSchema = new Schema({
  id: Number,
  email: String,
  msg: String,
  img : String
});

mongoose.model('Messages', MessagesSchema);