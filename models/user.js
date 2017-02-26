var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  username: String,
  first_name: String,
  last_name: String,
  email: String,
  phone: String,
  contacts: []
});

var User = mongoose.model('User', UserSchema);

module.exports = User;
