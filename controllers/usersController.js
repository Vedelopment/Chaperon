/************
 * DATABASE *
 ************/

var db = require('../models');

// GET /api/users
function index(req, res) {
  db.User.find({}, function(err, allUsers) {
    res.json(allUsers);
  });
}

function create(req, res) {
  console.log('body', req.body);

  db.User.create(req.body, function(err, user) {
    if (err) { console.log('error', err); }
    console.log(("In server controller"));
    res.json(user);
  });
}

function show(req, res) {
  db.User.findById(req.params.userId, function(err, foundUser) {
    if(err) { console.log('usersController.show error', err); }
    console.log('usersController.show responding with', foundUser);
    res.json(foundUser);
  });
}

function destroy(req, res) {
  db.User.findOneAndRemove({ _id: req.params.userId }, function(err, foundUser){
    // Send 200 and the deleted entity
    res.json(foundUser);
  });
}

function update(req, res) {
  console.log('updating with data', req.body);
  db.User.findById(req.params.userId, function(err, foundUser) {
    if(err) { console.log('usersController.update error', err); }
    foundUser.first_name = req.body.first_name;
    foundUser.last_name = req.body.last_name;
    foundUser.email = req.body.email;
    foundUser.phone = req.body.phone;
    foundUser.contacts = req.body.contacts;
    foundUser.save(function(err, savedUser) {
      if(err) { console.log('saving altered user failed'); }
      res.json(savedUser);
    });
  });

}

// export public methods
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
