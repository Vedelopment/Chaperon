var mongoose = require("mongoose");
mongoose.createConnection("mongodb://localhost/chaperon");

var User = require('./user');

module.exports.User = User;
