var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
// need to add this so that we can accept request payloads
app.use(bodyParser.json());

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

// all other routes should defer to angular routing
app.get('/:name', function templates(req, res) {
  var name = req.params.name;
  res.sendFile(__dirname + '/views/templates/' + name + '.html');
});

/*
 * JSON API Endpoints
 */

app.get('/api', controllers.api.index);

app.get('/api/users', controllers.users.index);
app.get('/api/users/:userId', controllers.users.show);
app.post('/api/users', controllers.users.create);
app.delete('/api/users/:userId', controllers.users.destroy);
app.put('/api/users/:userId', controllers.users.update);

// ALL OTHER ROUTES (ANGULAR HANDLES)
// redirect all other paths to index
app.get('*', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

////////////////////
//    SERVER      //
////////////////////

// listen to env OR on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/ because AWESOME.');
});
