var mongoose = require('mongoose'),
autoIncrement = require('mongoose-auto-increment'),
Schema = mongoose.Schema;


var connection = mongoose.createConnection("mongodb://localhost/angular-seed");
autoIncrement.initialize(connection);

var MessagesSchema = new Schema({
  id: Number,
  email: String,
  msg: String,
  img : String
});
MessagesSchema.plugin(autoIncrement.plugin, 'Messages');
mongoose.model('Messages', MessagesSchema);