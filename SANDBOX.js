SERVER.JS??

// require express and other modules
var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    hbs = require('hbs'),
    mongoose = require('mongoose'),
    auth = require('./resources/auth');

// require and load dotenv
require('dotenv').load();

// configure bodyParser (for receiving form data)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// serve static files from public folder
app.use(express.static(__dirname + '/public'));

// set view engine to hbs (handlebars)
app.set('view engine', 'hbs');

// connect to mongodb
mongoose.connect('mongodb://localhost/chaperon');

// require User and Post models
var User = require('./models/user');
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// app.get ('api/users?username', function (req, res) {
app.get ('api/users', function (req, res) {
  User.findById(req.user, function (err, user) {
    res.send(user.populate('contacts'));
  });
