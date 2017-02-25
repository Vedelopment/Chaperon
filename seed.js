var db = require("./models");

var userList =[];

userList.push(

{"id":1,"first_name":"Janet","last_name":"Richardson","email":"jrichardson0@facebook.com","phone":"404-406-8332","contacts":"33, 46, 30, 39, 16"},
{"id":2,"first_name":"Beverly","last_name":"Kelley","email":"bkelley1@squidoo.com","phone":"404-406-8332","contacts":"49, 34, 62, 35, 55"},
{"id":3,"first_name":"Eugene","last_name":"Myers","email":"emyers2@freewebs.com","phone":"404-406-8332","contacts":"31, 98, 67, 04, 84"},
{"id":4,"first_name":"Martha","last_name":"Powell","email":"mpowell3@studiopress.com","phone":"404-406-8332","contacts":"74, 05, 30, 86, 10"},
{"id":5,"first_name":"George","last_name":"Elliott","email":"gelliott4@howstuffworks.com","phone":"404-406-8332","contacts":"39, 80, 42, 24, 31"},
{"id":6,"first_name":"Jason","last_name":"Martinez","email":"jmartinez5@businesswire.com","phone":"404-406-8332","contacts":"31, 37, 55, 23, 70"},
{"id":7,"first_name":"Lori","last_name":"Burton","email":"lburton6@un.org","phone":"404-406-8332","contacts":"94, 96, 82, 86, 87"},
{"id":8,"first_name":"Heather","last_name":"Palmer","email":"hpalmer7@xinhuanet.com","phone":"404-406-8332","contacts":"60, 59, 07, 60, 73"},
{"id":9,"first_name":"Diana","last_name":"Wilson","email":"dwilson8@craigslist.org","phone":"404-406-8332","contacts":"90, 17, 79, 20, 64"},
{"id":10,"first_name":"Craig","last_name":"Harvey","email":"charvey9@addthis.com","phone":"404-406-8332","contacts":"59, 24, 72, 97, 04"},
{"id":11,"first_name":"Stephanie","last_name":"Bowman","email":"sbowmana@cocolog-nifty.com","phone":"404-406-8332","contacts":"43, 13, 27, 66, 45"},
{"id":12,"first_name":"Carlos","last_name":"Russell","email":"crussellb@ft.com","phone":"404-406-8332","contacts":"54, 51, 45, 02, 88"},
{"id":13,"first_name":"Rachel","last_name":"Dean","email":"rdeanc@biblegateway.com","phone":"404-406-8332","contacts":"61, 23, 84, 15, 62"},
{"id":14,"first_name":"Benjamin","last_name":"Fuller","email":"bfullerd@smh.com.au","phone":"404-406-8332","contacts":"44, 10, 68, 03, 13"},
{"id":15,"first_name":"Robin","last_name":"Howell","email":"rhowelle@twitpic.com","phone":"404-406-8332","contacts":"40, 97, 20, 79, 99"},
{"id":16,"first_name":"Debra","last_name":"Gonzales","email":"dgonzalesf@google.de","phone":"404-406-8332","contacts":"97, 90, 62, 06, 35"},
{"id":17,"first_name":"Jack","last_name":"Lewis","email":"jlewisg@kickstarter.com","phone":"404-406-8332","contacts":"50, 94, 29, 44, 57"},
{"id":18,"first_name":"Marilyn","last_name":"Sullivan","email":"msullivanh@amazonaws.com","phone":"404-406-8332","contacts":"14, 06, 55, 62, 96"},
{"id":19,"first_name":"Andrew","last_name":"Hamilton","email":"ahamiltoni@timesonline.co.uk","phone":"404-406-8332","contacts":"53, 36, 20, 75, 14"},
{"id":20,"first_name":"Alice","last_name":"Cole","email":"acolej@loc.gov","phone":"404-406-8332","contacts":"04, 77, 47, 35, 50"},
{"id":21,"first_name":"Steve","last_name":"Spencer","email":"sspencerk@wufoo.com","phone":"48-(671)430-8547","contacts":"63, 61, 32, 21, 30"},
{"id":22,"first_name":"Gary","last_name":"Garcia","email":"ggarcial@microsoft.com","phone":"404-406-8332","contacts":"92, 65, 25, 83, 59"},
{"id":23,"first_name":"Barbara","last_name":"Shaw","email":"bshawm@wp.com","phone":"404-406-8332","contacts":"57, 59, 12, 90, 71"},
{"id":24,"first_name":"Samuel","last_name":"Barnes","email":"sbarnesn@nih.gov","phone":"404-406-8332","contacts":"19, 86, 52, 25, 46"},
{"id":25,"first_name":"Joshua","last_name":"Spencer","email":"jspencero@sun.com","phone":"404-406-8332","contacts":"60, 45, 58, 78, 49"},
{"id":26,"first_name":"Angela","last_name":"Wallace","email":"awallacep@time.com","phone":"404-406-8332","contacts":"29, 86, 24, 24, 42"},
{"id":27,"first_name":"Debra","last_name":"Hughes","email":"dhughesq@digg.com","phone":"404-406-8332","contacts":"68, 93, 69, 82, 51"},
{"id":28,"first_name":"Gary","last_name":"Roberts","email":"grobertsr@ft.com","phone":"404-406-8332","contacts":"75, 96, 99, 08, 49"},
{"id":29,"first_name":"Ruby","last_name":"Kelley","email":"rkelleys@istockphoto.com","phone":"404-406-8332","contacts":"34, 23, 04, 72, 20"},
{"id":30,"first_name":"Todd","last_name":"Richardson","email":"trichardsont@smh.com.au","phone":"404-406-8332","contacts":"13, 21, 31, 25, 50"},
{"id":31,"first_name":"Janice","last_name":"Willis","email":"jwillisu@yahoo.co.jp","phone":"404-406-8332","contacts":"12, 46, 23, 83, 15"},
{"id":32,"first_name":"Lawrence","last_name":"Jacobs","email":"ljacobsv@photobucket.com","phone":"404-406-8332","contacts":"39, 55, 99, 60, 97"},
{"id":33,"first_name":"Eric","last_name":"Smith","email":"esmithw@123-reg.co.uk","phone":"404-406-8332","contacts":"87, 08, 53, 66, 71"},
{"id":34,"first_name":"Rachel","last_name":"Hill","email":"rhillx@google.com.br","phone":"404-406-8332","contacts":"30, 13, 69, 06, 59"},
{"id":35,"first_name":"Brandon","last_name":"Fisher","email":"bfishery@nasa.gov","phone":"404-406-8332","contacts":"95, 23, 19, 32, 74"},
{"id":36,"first_name":"Randy","last_name":"Wallace","email":"rwallacez@github.io","phone":"404-406-8332","contacts":"86, 98, 03, 01, 68"},
{"id":37,"first_name":"Harry","last_name":"Lopez","email":"hlopez10@merriam-webster.com","phone":"404-406-8332","contacts":"54, 92, 15, 28, 21"},
{"id":38,"first_name":"Marilyn","last_name":"Pierce","email":"mpierce11@narod.ru","phone":"404-406-8332","contacts":"90, 00, 82, 05, 02"},
{"id":39,"first_name":"Craig","last_name":"Rodriguez","email":"crodriguez12@vk.com","phone":"404-406-8332","contacts":"88, 31, 81, 48, 80"},
{"id":40,"first_name":"David","last_name":"Wells","email":"dwells13@washingtonpost.com","phone":"404-406-8332","contacts":"31, 59, 81, 66, 60"},
{"id":41,"first_name":"Douglas","last_name":"Hall","email":"dhall14@whitehouse.gov","phone":"404-406-8332","contacts":"76, 64, 71, 66, 30"},
{"id":42,"first_name":"Bonnie","last_name":"Butler","email":"bbutler15@ca.gov","phone":"404-406-8332","contacts":"49, 29, 04, 65, 33"},
{"id":43,"first_name":"Daniel","last_name":"Little","email":"dlittle16@webnode.com","phone":"404-406-8332","contacts":"76, 11, 67, 15, 16"},
{"id":44,"first_name":"Mark","last_name":"Gordon","email":"mgordon17@cnbc.com","phone":"404-406-8332","contacts":"00, 42, 08, 91, 62"},
{"id":45,"first_name":"Bobby","last_name":"Franklin","email":"bfranklin18@multiply.com","phone":"404-406-8332","contacts":"02, 38, 27, 74, 12"},
{"id":46,"first_name":"Timothy","last_name":"Burton","email":"tburton19@engadget.com","phone":"404-406-8332","contacts":"13, 61, 47, 66, 59"},
{"id":47,"first_name":"Frances","last_name":"Bailey","email":"fbailey1a@nyu.edu","phone":"404-406-8332","contacts":"18, 99, 39, 97, 77"},
{"id":48,"first_name":"Emily","last_name":"Burns","email":"eburns1b@va.gov","phone":"404-406-8332","contacts":"54, 59, 53, 78, 90"},
{"id":49,"first_name":"Andrew","last_name":"Stanley","email":"astanley1c@addthis.com","phone":"404-406-8332","contacts":"48, 53, 01, 10, 01"},
{"id":50,"first_name":"Heather","last_name":"Weaver","email":"hweaver1d@creativecommons.org","phone":"404-406-8332","contacts":"14, 20, 58, 59, 26"},
{"id":51,"first_name":"Tammy","last_name":"Hawkins","email":"thawkins1e@nifty.com","phone":"404-406-8332","contacts":"09, 60, 96, 01, 89"},
{"id":52,"first_name":"Patricia","last_name":"Wells","email":"pwells1f@woothemes.com","phone":"404-406-8332","contacts":"76, 83, 87, 40, 85"},
{"id":53,"first_name":"Julie","last_name":"Porter","email":"jporter1g@sfgate.com","phone":"404-406-8332","contacts":"30, 73, 10, 00, 38"},
{"id":54,"first_name":"Rachel","last_name":"Castillo","email":"rcastillo1h@g.co","phone":"404-406-8332","contacts":"53, 46, 77, 25, 72"},
{"id":55,"first_name":"Amy","last_name":"Campbell","email":"acampbell1i@creativecommons.org","phone":"404-406-8332","contacts":"13, 70, 47, 65, 20"},
{"id":56,"first_name":"Terry","last_name":"Hicks","email":"thicks1j@census.gov","phone":"404-406-8332","contacts":"41, 53, 99, 84, 54"},
{"id":57,"first_name":"Joyce","last_name":"Rose","email":"jrose1k@furl.net","phone":"404-406-8332","contacts":"92, 23, 76, 90, 04"},
{"id":58,"first_name":"Joseph","last_name":"Schmidt","email":"jschmidt1l@freewebs.com","phone":"404-406-8332","contacts":"92, 22, 19, 94, 35"},
{"id":59,"first_name":"Deborah","last_name":"Stephens","email":"dstephens1m@angelfire.com","phone":"404-406-8332","contacts":"06, 76, 41, 36, 28"},
{"id":60,"first_name":"Virginia","last_name":"Clark","email":"vclark1n@taobao.com","phone":"404-406-8332","contacts":"27, 63, 47, 33, 86"},
{"id":61,"first_name":"Gregory","last_name":"Simmons","email":"gsimmons1o@4shared.com","phone":"404-406-8332","contacts":"65, 22, 47, 99, 77"},
{"id":62,"first_name":"Gloria","last_name":"Alexander","email":"galexander1p@mapquest.com","phone":"404-406-8332","contacts":"21, 68, 68, 88, 59"},
{"id":63,"first_name":"Joe","last_name":"Grant","email":"jgrant1q@ameblo.jp","phone":"404-406-8332","contacts":"54, 77, 59, 56, 65"},
{"id":64,"first_name":"John","last_name":"Martinez","email":"jmartinez1r@elpais.com","phone":"404-406-8332","contacts":"47, 88, 05, 78, 98"},
{"id":65,"first_name":"Lawrence","last_name":"Perkins","email":"lperkins1s@nasa.gov","phone":"404-406-8332","contacts":"58, 69, 28, 77, 71"},
{"id":66,"first_name":"Alice","last_name":"Taylor","email":"ataylor1t@digg.com","phone":"404-406-8332","contacts":"59, 80, 24, 90, 72"},
{"id":67,"first_name":"Christine","last_name":"Grant","email":"cgrant1u@blinklist.com","phone":"404-406-8332","contacts":"15, 25, 13, 80, 17"},
{"id":68,"first_name":"Martha","last_name":"Lane","email":"mlane1v@blogspot.com","phone":"404-406-8332","contacts":"64, 61, 29, 35, 82"},
{"id":69,"first_name":"Anne","last_name":"Welch","email":"awelch1w@people.com.cn","phone":"404-406-8332","contacts":"12, 18, 49, 57, 08"},
{"id":70,"first_name":"Brandon","last_name":"Kelley","email":"bkelley1x@i2i.jp","phone":"404-406-8332","contacts":"19, 77, 27, 63, 29"},
{"id":71,"first_name":"Philip","last_name":"Armstrong","email":"parmstrong1y@bandcamp.com","phone":"404-406-8332","contacts":"74, 58, 43, 52, 40"},
{"id":72,"first_name":"Randy","last_name":"Collins","email":"rcollins1z@sun.com","phone":"404-406-8332","contacts":"65, 70, 51, 83, 86"},
{"id":73,"first_name":"Carl","last_name":"Green","email":"cgreen20@xrea.com","phone":"404-406-8332","contacts":"87, 04, 89, 34, 85"},
{"id":74,"first_name":"Ronald","last_name":"Collins","email":"rcollins21@tiny.cc","phone":"404-406-8332","contacts":"59, 11, 22, 65, 65"},
{"id":75,"first_name":"Chris","last_name":"Richards","email":"crichards22@51.la","phone":"404-406-8332","contacts":"37, 43, 13, 82, 92"},
{"id":76,"first_name":"Karen","last_name":"Sanchez","email":"ksanchez23@gmpg.org","phone":"404-406-8332","contacts":"81, 27, 20, 71, 84"},
{"id":77,"first_name":"Jennifer","last_name":"Matthews","email":"jmatthews24@miibeian.gov.cn","phone":"404-406-8332","contacts":"23, 00, 29, 19, 80"},
{"id":78,"first_name":"Debra","last_name":"Perez","email":"dperez25@sogou.com","phone":"404-406-8332","contacts":"06, 22, 49, 34, 94"},
{"id":79,"first_name":"Phillip","last_name":"Roberts","email":"proberts26@dropbox.com","phone":"404-406-8332","contacts":"55, 47, 23, 68, 30"},
{"id":80,"first_name":"Betty","last_name":"Daniels","email":"bdaniels27@jimdo.com","phone":"404-406-8332","contacts":"91, 41, 29, 15, 54"},
{"id":81,"first_name":"Billy","last_name":"Watkins","email":"bwatkins28@ted.com","phone":"404-406-8332","contacts":"77, 70, 12, 11, 94"},
{"id":82,"first_name":"Steven","last_name":"Cooper","email":"scooper29@washingtonpost.com","phone":"404-406-8332","contacts":"05, 36, 09, 73, 74"},
{"id":83,"first_name":"Howard","last_name":"Perkins","email":"hperkins2a@mozilla.com","phone":"404-406-8332","contacts":"65, 01, 99, 18, 15"},
{"id":84,"first_name":"Bobby","last_name":"Perry","email":"bperry2b@multiply.com","phone":"404-406-8332","contacts":"33, 06, 70, 94, 27"},
{"id":85,"first_name":"Steve","last_name":"Olson","email":"solson2c@rakuten.co.jp","phone":"404-406-8332","contacts":"42, 75, 55, 34, 05"},
{"id":86,"first_name":"Helen","last_name":"Gonzalez","email":"hgonzalez2d@addthis.com","phone":"404-406-8332","contacts":"00, 80, 38, 52, 58"},
{"id":87,"first_name":"Doris","last_name":"Flores","email":"dflores2e@uol.com.br","phone":"404-406-8332","contacts":"90, 60, 61, 08, 25"},
{"id":88,"first_name":"Charles","last_name":"Wagner","email":"cwagner2f@slashdot.org","phone":"404-406-8332","contacts":"34, 14, 97, 67, 57"},
{"id":89,"first_name":"Alice","last_name":"Ward","email":"award2g@businesswire.com","phone":"404-406-8332","contacts":"20, 33, 82, 85, 51"},
{"id":90,"first_name":"Teresa","last_name":"Thomas","email":"tthomas2h@bandcamp.com","phone":"404-406-8332","contacts":"49, 59, 57, 18, 90"},
{"id":91,"first_name":"Earl","last_name":"Black","email":"eblack2i@dmoz.org","phone":"404-406-8332","contacts":"35, 81, 61, 12, 57"},
{"id":92,"first_name":"George","last_name":"Mcdonald","email":"gmcdonald2j@blinklist.com","phone":"404-406-8332","contacts":"31, 26, 28, 58, 15"},
{"id":93,"first_name":"Gerald","last_name":"Hunt","email":"ghunt2k@dagondesign.com","phone":"404-406-8332","contacts":"66, 32, 72, 92, 25"},
{"id":94,"first_name":"Eric","last_name":"Green","email":"egreen2l@geocities.com","phone":"404-406-8332","contacts":"10, 43, 10, 69, 23"},
{"id":95,"first_name":"Karen","last_name":"Stone","email":"kstone2m@techcrunch.com","phone":"404-406-8332","contacts":"50, 73, 91, 99, 10"},
{"id":96,"first_name":"Patricia","last_name":"Webb","email":"pwebb2n@scientificamerican.com","phone":"404-406-8332","contacts":"96, 72, 96, 95, 09"},
{"id":97,"first_name":"Margaret","last_name":"Phillips","email":"mphillips2o@ed.gov","phone":"404-406-8332","contacts":"52, 14, 01, 05, 71"},
{"id":98,"first_name":"Bonnie","last_name":"Spencer","email":"bspencer2p@addthis.com","phone":"404-406-8332","contacts":"97, 73, 41, 47, 38"},
{"id":99,"first_name":"Carolyn","last_name":"Washington","email":"cwashington2q@ustream.tv","phone":"404-406-8332","contacts":"01, 51, 03, 42, 52"},
{"id":100,"first_name":"Michael","last_name":"Sanders","email":"msanders2r@businessinsider.com","phone":"404-406-8332","contacts":"28, 43, 07, 39, 02"}

);

// populate each albums song list
// albumList.forEach(function(album) {
//   album.songs = sampleSongs;
// });


db.User.remove({}, function(err, users){

  db.User.create(userList, function(err, users){
    if (err) { return console.log('ERROR seeding: ', err); }
    console.log("users:", users);
    console.log("I made ", users.length, "of the things!");
    process.exit();
  });

});
