var mongoose = require("mongoose");
// mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/chaperon" );

var User = require('./user');

module.exports.User = User;

// var mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost/chaperon");
//
// var User = require('./user');
//
// module.exports.User = User;
