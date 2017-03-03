# Chaperon

Chaperon is a personal safety app. You can store your emergency contacts in a secure profile. If you feel safe at any time, just open your app, hit your panic button and your emergency contacts will be notified immediately with a text message that includes your stored gps location.

[Chaperon v.1.2](https://mychaperon.herokuapp.com/)

[Chaperon v.1.0](https://chaperon-vedelopment.herokuapp.com)

## Technologies:

[MongoDB](https://www.mongodb.com/)

MongoDB is a free and open-source cross-platform document-oriented database program. Classified as a NoSQL database.

[Express](http://expressjs.com/)

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

[Angular](https://angularjs.org/)

Angular is a development platform for building mobile and desktop web applications using Typescript/JavaScript (JS) and other languages.

[Node](https://nodejs.org/en/)

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.

[Satellizer - Angular auth module](https://github.com/sahat/satellizer)

Satellizer is a simple to use, end-to-end, token-based authentication module for AngularJS

[AngularUI Router](https://github.com/angular-ui/ui-router)

Angular UI-Router is a client-side Single Page Application routing framework for AngularJS.

## Future Chaperon
  - start a tracking session with an emergency contact
  - three statuses during session: safe, warning and danger
  - check in at an interval you specify (20 minutes for example) and keep your status at "safe"
  - if you haven't checked in with a 4 digit pin within that time frame your emergency contact is notified via text with your geolocation and a "warning" session starts with a timer (5 minutes for example)
  - if you haven't checked in again after this warning period has expired, your emergency contact as well as two other contacts are notified via text that your status is now "danger" and is given your geolocation
  - the 4 digit pin gives an extra layer of protection so that not just anyone can use your phone to check in for you
  - if you are coerced into checking in, you have an alternate 4 digit pin that will appear to shut down the app, but will send a special warning "danger" status to your three emergency contacts over text with your geolocation

## Uses

Here are just a few use cases:

  - for parents with kids going out on their own
  - for users of dating apps that might be meeting people outside of their network
  - for people with medical conditions that need family or attendants to track them during more vulnerable times of day or during certain activities
  - people who might get separated from loved ones or friends at large music festivals, demonstrations or events

## Planning and user research
![oblique strategies](https://s-media-cache-ak0.pinimg.com/736x/04/05/93/04059394c5b812b4fc343f9a43520a95.jpg)

[Oblique Strategies](http://www.rtqe.net/ObliqueStrategies/)

- A brief note about design - as minimal and obvious to use as possible!
- browser app first (plans for mobile option)
- User research and planning stages were important to decide the stack, mobile or web MVP, mobile or web first, and what the MVP should include
- User research/features:
  - user research started in summer of 2016
    - interviewed young people who go on tinder etc. dates
    - interviewed older parents with medical considerations who would want to be tracked by their adult children
  - some requested more privacy, navigate to app in phone browser instead of app installed on phone
  - contact confirmation to add contacts to list
  - ***panic button, in session or not***
  - geolocation
  - [How Designers Destroyed the World - Mike Monteiro](https://vimeo.com/68470326 "How Designers Destroyed the World - Mike Monteiro")

## MVP features
  - user will be able to create and account and log in and out
  - user can add other users as emergency contacts (can ony look up by unique username in order to minimize strangers from finding or viewing identifying information and do not have to be verified)
  - user can trigger panic button at any time in order to send an immediate text message with their geolocation to three emergency contacts

## Stack
- MEAN stack to include trickier DOM manipulation, potential for multiple user states and timers
- Angular for client-side templating of database of user information
- referenced data in mongoDB for user contacts since there are no complicated relationships, only users to other users as a reference array
- New technologies: [Satellizer](https://github.com/sahat/satellizer "Satellizer"), [AngularUI Router](https://ui-router.github.io/about/features "ui-router")
- Satellizer for authentication and authorization
- AngularUI Router integrated with Satellizer and option for future template nesting of user contacts
- CODE
  - challenges in having to completely rebuilding routing to conform to satellizer tutorials, AngularUI Router
  - challenges in learning how to set up user to user reference data as contacts

## Code


### app.js
```
angular
  .module('chaperon', [
    'ui.router',
    'satellizer'
  ])

// ROUTE //
// you might notice .state instead of .when and .otherwise //

// for any unmatched URL redirect to /
$urlRouterProvider.otherwise("/");

$stateProvider
  .state('home', {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'HomeController',
    controllerAs: 'home'
  })
```

### index.hbs
```
<html ng-app="chaperon">

  <head>
    <title>Chaperon</title>
  </head>

  <body ng-controller="MainController as main">
      <ui-view>
  </body>

</html>
```

### auth in server.js
Signup:
```
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
```
Login:
```
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
```

### auth in resources/auth.js
```
createJWT: function (user) {
  var payload = {
    sub: user._id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  };
  return jwt.encode(payload, process.env.TOKEN_SECRET);
}
};
```

### including TOKEN_SECRET in .evn
```
TOKEN_SECRET=extremepartyparrot
```
