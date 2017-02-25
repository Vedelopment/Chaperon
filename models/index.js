var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/chaperon");

var User = require('./user');

module.exports.User = User;
// module.exports.Song = require('./song');
