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
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/chaperon');

// require User and Post models
var User = require('./models/user');

/*
 * API Routes
 */

// DEFINING API ROUTES

app.get('/api/me', auth.ensureAuthenticated, function (req, res) {
  User.findById(req.user, function (err, user) {
    res.send(user.populate('contacts'));
  });
  // User.findById(id)
  //  .populate('friends')
  //  .exec(function (err, user) {
  //      if (err) throw err;
  //
  //      // user.friends is array of users
  //      console.log(user.friends)
  //  })
});

app.put('/api/me', auth.ensureAuthenticated, function (req, res) {
  User.findById(req.user, function (err, user) {
    if (!user) {
      return res.status(400).send({ message: 'User not found.' });
    }
    user.username = req.body.username || user.username;
    user.email = req.body.email || user.email;
    user.save(function(err) {
      res.send(user);
    });
  });
});

app.get('/api/contacts', function (req, res) {
  res.json([
  {
    first_name: "John",
    last_name: "Leslie",
    phone: "555-555-5555"
  },
  {
    first_name: "Marsha",
    last_name: "Leslie",
    phone: "555-555-5555"
  }
  ]);
});


/*
 * Auth Routes
 */

// DEFINING AUTH ROUTES

app.post('/auth/signup', function (req, res) {
  User.findOne({ email: req.body.email }, function (err, existingUser) {
    if (existingUser) {
      return res.status(409).send({ message: 'Email is already taken.' });
    }
    var user = new User({
      username: req.body.username,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      password: req.body.password
    });
    user.save(function (err, result) {
      if (err) {
        res.status(500).send({ message: err.message });
      }
      res.send({ token: auth.createJWT(result) });
    });
  });
});

app.post('/auth/login', function (req, res) {
  User.findOne({ email: req.body.email }, '+password', function (err, user) {
    if (!user) {
      return res.status(401).send({ message: 'Invalid email or password.' });
    }
    user.comparePassword(req.body.password, function (err, isMatch) {
      if (!isMatch) {
        return res.status(401).send({ message: 'Invalid email or password.' });
      }
      res.send({ token: auth.createJWT(user) });
    });
  });
});


/*
 * Catch All Route
 */
app.get(['/', '/signup', '/login', '/logout', '/profile'], function (req, res) {
  res.render('index');
});


/*
 * Listen on localhost:9000
 */
// app.listen(9000, function() {
//   console.log('server started');
// });
app.listen(process.env.PORT || 9000, function () {
  console.log('Express server is running on http://localhost:9000/ because AWESOME.');
});
