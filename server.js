var express = require('express');
var bodyParser = require('body-parser');

var app = express();

mongoose.connect(process.env.MONGOLAB_URI);

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
// need to add this so that we can accept request payloads
app.use(bodyParser.json());

// We'll serve jQuery and bootstrap from a local bower cache avoiding CDNs
// We're placing these under /vendor to differentiate them from our own assets
// app.use('/vendor', express.static(__dirname + '/bower_components'));

var controllers = require('./controllers');

////////////////////
//    ROUTES      //
////////////////////

// route to homepage
app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// route to special page of meow
app.get('/meow', function homepage (req, res) {
  res.sendFile(__dirname + '/views/templates/meow.html');
});

// use all other routes to find angular templates
app.get('/templates/:name', function templates(req, res) {
  var name = req.params.name;
  res.sendFile(__dirname + '/views/templates/' + name + '.html');
});

////////////////////
//    SERVER      //
////////////////////

// listen to env OR on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/ because AWESOME.');
});
