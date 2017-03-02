var db = require("./models");

var userList =[];

userList.push(

  {"username":"LDean","first_name":"LD","last_name":"Dean","email":"ld@example.com","phone":null,"password":"ld","contacts":[]},
  {"username":"sgeorge0","first_name":"Stephen","last_name":"George","email":"sgeorge0@nih.gov","phone":null,"password":"uXoCz7","contacts":[]},
  {"username":"bbailey1","first_name":"Bobby","last_name":"Bailey","email":"bbailey1@mtv.com","phone":null,"password":"QbYFkGJx","contacts":[]},
  {"username":"priley2","first_name":"Patricia","last_name":"Riley","email":"priley2@epa.gov","phone":null,"password":"8rq4ZotcqSl8","contacts":[]},
  {"username":"lharrison3","first_name":"Lillian","last_name":"Harrison","email":"lharrison3@opera.com","phone":null,"password":"dfVuLWI","contacts":[]},
  {"username":"kstephens4","first_name":"Kelly","last_name":"Stephens","email":"kstephens4@usa.gov","phone":null,"password":"afvY1fO5hz","contacts":[]},
  {"username":"skelley5","first_name":"Stephanie","last_name":"Kelley","email":"skelley5@vistaprint.com","phone":null,"password":"HS12ZH","contacts":[]},
  {"username":"mfoster6","first_name":"Martin","last_name":"Foster","email":"mfoster6@gizmodo.com","phone":null,"password":"wv0amB","contacts":[]},
  {"username":"krose7","first_name":"Kenneth","last_name":"Rose","email":"krose7@nyu.edu","phone":null,"password":"9nTWiou","contacts":[]},
  {"username":"lkelley8","first_name":"Larry","last_name":"Kelley","email":"lkelley8@live.com","phone":null,"password":"8QFtIR","contacts":[]},
  {"username":"ataylor9","first_name":"Amy","last_name":"Taylor","email":"ataylor9@pagesperso-orange.fr","phone":null,"password":"r4GGNJUPgQi","contacts":[]},
  {"username":"bstonea","first_name":"Brandon","last_name":"Stone","email":"bstonea@dmoz.org","phone":null,"password":"ezeEgP82zgUc","contacts":[]},
  {"username":"dknightb","first_name":"Daniel","last_name":"Knight","email":"dknightb@ocn.ne.jp","phone":null,"password":"BzZx3MsOsA","contacts":[]},
  {"username":"bporterc","first_name":"Brandon","last_name":"Porter","email":"bporterc@istockphoto.com","phone":null,"password":"GUb1lQajFItA","contacts":[]},
  {"username":"prichardsd","first_name":"Paul","last_name":"Richards","email":"prichardsd@adobe.com","phone":null,"password":"yxkOSg","contacts":[]},
  {"username":"sshawe","first_name":"Steve","last_name":"Shaw","email":"sshawe@sohu.com","phone":null,"password":"mGNqbi0kS","contacts":[]},
  {"username":"tstanleyf","first_name":"Timothy","last_name":"Stanley","email":"tstanleyf@tiny.cc","phone":null,"password":"r1chSZh","contacts":[]},
  {"username":"pclarkg","first_name":"Pamela","last_name":"Clark","email":"pclarkg@ed.gov","phone":null,"password":"QQPwwx","contacts":[]},
  {"username":"crobertsonh","first_name":"Cheryl","last_name":"Robertson","email":"crobertsonh@si.edu","phone":null,"password":"kghkjPLYcVg9","contacts":[]},
  {"username":"eclarki","first_name":"Elizabeth","last_name":"Clark","email":"eclarki@cyberchimps.com","phone":null,"password":"HpIhjuCPklT","contacts":[]},
  {"username":"rstonej","first_name":"Randy","last_name":"Stone","email":"rstonej@bloomberg.com","phone":null,"password":"6LzGc2w0mfM","contacts":[]},
  {"username":"rreedk","first_name":"Ruth","last_name":"Reed","email":"rreedk@reuters.com","phone":null,"password":"wWVIxw63pyE","contacts":[]},
  {"username":"bdeanl","first_name":"Bonnie","last_name":"Dean","email":"bdeanl@virginia.edu","phone":null,"password":"rVr0GslyYpA","contacts":[]},
  {"username":"ddaym","first_name":"Dennis","last_name":"Day","email":"ddaym@ycombinator.com","phone":null,"password":"80i6n7cli","contacts":[]}

);

db.User.remove({}, function(err, users){

  db.User.create(userList, function(err, users){
    if (err) { return console.log('ERROR seeding: ', err); }
    console.log("users:", users);
    console.log("I made ", users.length, "of the things!");
    process.exit();
  });

});
