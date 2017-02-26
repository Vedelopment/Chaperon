var db = require("./models");

var userList =[];

userList.push(

  {"id":1,"username":"scoleman0","first_name":"Sarah","last_name":"Coleman","email":"scoleman0@ted.com","phone":null,"contacts":"99, 61, 56, 03, 18"},
  {"id":2,"username":"rlane1","first_name":"Richard","last_name":"Lane","email":"rlane1@123-reg.co.uk","phone":null,"contacts":"71, 11, 28, 36, 54"},
  {"id":3,"username":"dwatkins2","first_name":"Doris","last_name":"Watkins","email":"dwatkins2@list-manage.com","phone":null,"contacts":"51, 03, 71, 73, 00"},
  {"id":4,"username":"eryan3","first_name":"Elizabeth","last_name":"Ryan","email":"eryan3@ezinearticles.com","phone":null,"contacts":"72, 87, 36, 12, 76"},
  {"id":5,"username":"jperry4","first_name":"Justin","last_name":"Perry","email":"jperry4@baidu.com","phone":null,"contacts":"11, 64, 25, 80, 86"},
  {"id":6,"username":"cwright5","first_name":"Carol","last_name":"Wright","email":"cwright5@symantec.com","phone":null,"contacts":"96, 43, 48, 06, 40"},
  {"id":7,"username":"nblack6","first_name":"Nancy","last_name":"Black","email":"nblack6@scientificamerican.com","phone":null,"contacts":"92, 60, 97, 09, 64"},
  {"id":8,"username":"rfisher7","first_name":"Rachel","last_name":"Fisher","email":"rfisher7@sphinn.com","phone":null,"contacts":"33, 74, 78, 94, 15"},
  {"id":9,"username":"cburns8","first_name":"Charles","last_name":"Burns","email":"cburns8@washington.edu","phone":null,"contacts":"94, 33, 46, 86, 07"},
  {"id":10,"username":"ljacobs9","first_name":"Linda","last_name":"Jacobs","email":"ljacobs9@rambler.ru","phone":null,"contacts":"01, 50, 08, 10, 57"},
  {"id":11,"username":"cwatsona","first_name":"Craig","last_name":"Watson","email":"cwatsona@wufoo.com","phone":null,"contacts":"57, 80, 58, 33, 64"},
  {"id":12,"username":"tfieldsb","first_name":"Terry","last_name":"Fields","email":"tfieldsb@google.it","phone":null,"contacts":"22, 49, 40, 92, 97"},
  {"id":13,"username":"jcarpenterc","first_name":"Jesse","last_name":"Carpenter","email":"jcarpenterc@uiuc.edu","phone":null,"contacts":"90, 56, 94, 66, 36"},
  {"id":14,"username":"rchavezd","first_name":"Richard","last_name":"Chavez","email":"rchavezd@sohu.com","phone":null,"contacts":"36, 61, 12, 62, 88"},
  {"id":15,"username":"kcooke","first_name":"Kathryn","last_name":"Cook","email":"kcooke@chron.com","phone":null,"contacts":"51, 99, 78, 99, 67"},
  {"id":16,"username":"bwatkinsf","first_name":"Beverly","last_name":"Watkins","email":"bwatkinsf@github.io","phone":null,"contacts":"79, 54, 25, 97, 94"},
  {"id":17,"username":"wcarpenterg","first_name":"Wanda","last_name":"Carpenter","email":"wcarpenterg@nytimes.com","phone":null,"contacts":"09, 89, 44, 61, 48"},
  {"id":18,"username":"srobinsonh","first_name":"Steven","last_name":"Robinson","email":"srobinsonh@weibo.com","phone":null,"contacts":"51, 31, 75, 63, 90"},
  {"id":19,"username":"jrodriguezi","first_name":"Johnny","last_name":"Rodriguez","email":"jrodriguezi@prnewswire.com","phone":null,"contacts":"72, 25, 57, 08, 64"},
  {"id":20,"username":"msmithj","first_name":"Melissa","last_name":"Smith","email":"msmithj@earthlink.net","phone":null,"contacts":"43, 58, 63, 88, 85"},
  {"id":21,"username":"freynoldsk","first_name":"Frances","last_name":"Reynolds","email":"freynoldsk@house.gov","phone":null,"contacts":"70, 03, 88, 67, 49"},
  {"id":22,"username":"wsimmonsl","first_name":"Willie","last_name":"Simmons","email":"wsimmonsl@cnet.com","phone":null,"contacts":"24, 77, 84, 39, 40"},
  {"id":23,"username":"cgonzalesm","first_name":"Catherine","last_name":"Gonzales","email":"cgonzalesm@dell.com","phone":null,"contacts":"32, 20, 37, 13, 28"},
  {"id":24,"username":"medwardsn","first_name":"Martin","last_name":"Edwards","email":"medwardsn@geocities.jp","phone":null,"contacts":"67, 29, 14, 31, 72"},
  {"id":25,"username":"cwellso","first_name":"Carol","last_name":"Wells","email":"cwellso@digg.com","phone":null,"contacts":"03, 09, 92, 40, 70"},
  {"id":26,"username":"twalkerp","first_name":"Todd","last_name":"Walker","email":"twalkerp@icio.us","phone":null,"contacts":"87, 92, 45, 61, 27"},
  {"id":27,"username":"mwagnerq","first_name":"Michael","last_name":"Wagner","email":"mwagnerq@dropbox.com","phone":null,"contacts":"14, 29, 11, 08, 58"},
  {"id":28,"username":"jpetersr","first_name":"Justin","last_name":"Peters","email":"jpetersr@hostgator.com","phone":null,"contacts":"65, 99, 99, 70, 13"},
  {"id":29,"username":"tdunns","first_name":"Teresa","last_name":"Dunn","email":"tdunns@google.de","phone":null,"contacts":"11, 80, 26, 83, 40"},
  {"id":30,"username":"garmstrongt","first_name":"Gregory","last_name":"Armstrong","email":"garmstrongt@uol.com.br","phone":null,"contacts":"68, 64, 21, 62, 59"},
  {"id":31,"username":"driceu","first_name":"Donald","last_name":"Rice","email":"driceu@ovh.net","phone":null,"contacts":"15, 73, 80, 05, 88"},
  {"id":32,"username":"jhamiltonv","first_name":"Judith","last_name":"Hamilton","email":"jhamiltonv@quantcast.com","phone":null,"contacts":"21, 26, 20, 05, 87"},
  {"id":33,"username":"ewillisw","first_name":"Eugene","last_name":"Willis","email":"ewillisw@1und1.de","phone":null,"contacts":"03, 28, 12, 95, 34"},
  {"id":34,"username":"dramosx","first_name":"Diana","last_name":"Ramos","email":"dramosx@newsvine.com","phone":null,"contacts":"26, 75, 95, 36, 70"},
  {"id":35,"username":"jmatthewsy","first_name":"Judith","last_name":"Matthews","email":"jmatthewsy@miibeian.gov.cn","phone":null,"contacts":"95, 64, 38, 45, 47"},
  {"id":36,"username":"ahansonz","first_name":"Ashley","last_name":"Hanson","email":"ahansonz@dagondesign.com","phone":null,"contacts":"03, 33, 84, 59, 73"},
  {"id":37,"username":"jmorgan10","first_name":"Judy","last_name":"Morgan","email":"jmorgan10@meetup.com","phone":null,"contacts":"69, 25, 85, 86, 32"},
  {"id":38,"username":"dhawkins11","first_name":"Donna","last_name":"Hawkins","email":"dhawkins11@bravesites.com","phone":null,"contacts":"37, 53, 19, 25, 73"},
  {"id":39,"username":"agreen12","first_name":"Albert","last_name":"Green","email":"agreen12@wix.com","phone":null,"contacts":"27, 20, 31, 42, 00"},
  {"id":40,"username":"rscott13","first_name":"Rachel","last_name":"Scott","email":"rscott13@ucsd.edu","phone":null,"contacts":"01, 43, 19, 03, 91"},
  {"id":41,"username":"kprice14","first_name":"Kathleen","last_name":"Price","email":"kprice14@posterous.com","phone":null,"contacts":"60, 90, 51, 55, 26"},
  {"id":42,"username":"smarshall15","first_name":"Shirley","last_name":"Marshall","email":"smarshall15@nih.gov","phone":null,"contacts":"12, 14, 45, 57, 04"},
  {"id":43,"username":"creyes16","first_name":"Christina","last_name":"Reyes","email":"creyes16@opensource.org","phone":null,"contacts":"93, 54, 82, 19, 65"},
  {"id":44,"username":"gfields17","first_name":"Gerald","last_name":"Fields","email":"gfields17@senate.gov","phone":null,"contacts":"96, 19, 94, 89, 49"},
  {"id":45,"username":"hbradley18","first_name":"Heather","last_name":"Bradley","email":"hbradley18@ezinearticles.com","phone":null,"contacts":"35, 32, 28, 81, 62"},
  {"id":46,"username":"hjames19","first_name":"Harold","last_name":"James","email":"hjames19@google.com","phone":null,"contacts":"76, 55, 97, 09, 74"},
  {"id":47,"username":"rsims1a","first_name":"Randy","last_name":"Sims","email":"rsims1a@ocn.ne.jp","phone":null,"contacts":"71, 78, 85, 25, 86"},
  {"id":48,"username":"wlynch1b","first_name":"Wayne","last_name":"Lynch","email":"wlynch1b@jiathis.com","phone":null,"contacts":"52, 37, 76, 07, 78"},
  {"id":49,"username":"jkelly1c","first_name":"Jesse","last_name":"Kelly","email":"jkelly1c@angelfire.com","phone":null,"contacts":"16, 10, 60, 28, 64"},
  {"id":50,"username":"elopez1d","first_name":"Elizabeth","last_name":"Lopez","email":"elopez1d@taobao.com","phone":null,"contacts":"23, 95, 33, 64, 18"},
  {"id":51,"username":"tcarr1e","first_name":"Todd","last_name":"Carr","email":"tcarr1e@jimdo.com","phone":null,"contacts":"22, 87, 13, 07, 85"},
  {"id":52,"username":"erodriguez1f","first_name":"Elizabeth","last_name":"Rodriguez","email":"erodriguez1f@last.fm","phone":null,"contacts":"77, 13, 55, 46, 59"},
  {"id":53,"username":"istanley1g","first_name":"Irene","last_name":"Stanley","email":"istanley1g@gov.uk","phone":null,"contacts":"29, 42, 82, 40, 80"},
  {"id":54,"username":"jrivera1h","first_name":"Judith","last_name":"Rivera","email":"jrivera1h@nps.gov","phone":null,"contacts":"59, 42, 09, 59, 09"},
  {"id":55,"username":"wmorgan1i","first_name":"Willie","last_name":"Morgan","email":"wmorgan1i@hp.com","phone":null,"contacts":"96, 87, 49, 39, 47"},
  {"id":56,"username":"khughes1j","first_name":"Kevin","last_name":"Hughes","email":"khughes1j@g.co","phone":null,"contacts":"57, 00, 97, 31, 48"},
  {"id":57,"username":"dgreen1k","first_name":"Donald","last_name":"Green","email":"dgreen1k@clickbank.net","phone":null,"contacts":"60, 08, 28, 74, 15"},
  {"id":58,"username":"abarnes1l","first_name":"Albert","last_name":"Barnes","email":"abarnes1l@opensource.org","phone":null,"contacts":"07, 23, 29, 85, 49"},
  {"id":59,"username":"jchavez1m","first_name":"Joseph","last_name":"Chavez","email":"jchavez1m@altervista.org","phone":null,"contacts":"18, 38, 65, 26, 70"},
  {"id":60,"username":"wmorgan1n","first_name":"Wayne","last_name":"Morgan","email":"wmorgan1n@behance.net","phone":null,"contacts":"14, 04, 94, 80, 93"},
  {"id":61,"username":"egutierrez1o","first_name":"Edward","last_name":"Gutierrez","email":"egutierrez1o@comcast.net","phone":null,"contacts":"50, 14, 29, 47, 06"},
  {"id":62,"username":"ahicks1p","first_name":"Amy","last_name":"Hicks","email":"ahicks1p@themeforest.net","phone":null,"contacts":"88, 52, 61, 93, 32"},
  {"id":63,"username":"alee1q","first_name":"Andrea","last_name":"Lee","email":"alee1q@dagondesign.com","phone":null,"contacts":"43, 43, 33, 16, 11"},
  {"id":64,"username":"aphillips1r","first_name":"Anne","last_name":"Phillips","email":"aphillips1r@nymag.com","phone":null,"contacts":"39, 40, 57, 75, 16"},
  {"id":65,"username":"jwilliamson1s","first_name":"Janet","last_name":"Williamson","email":"jwilliamson1s@blogger.com","phone":null,"contacts":"97, 11, 20, 01, 30"},
  {"id":66,"username":"lhenry1t","first_name":"Lisa","last_name":"Henry","email":"lhenry1t@time.com","phone":null,"contacts":"51, 98, 70, 16, 25"},
  {"id":67,"username":"rnelson1u","first_name":"Robert","last_name":"Nelson","email":"rnelson1u@networksolutions.com","phone":null,"contacts":"63, 66, 91, 44, 07"},
  {"id":68,"username":"rwhite1v","first_name":"Rose","last_name":"White","email":"rwhite1v@slate.com","phone":null,"contacts":"36, 59, 06, 58, 70"},
  {"id":69,"username":"psanders1w","first_name":"Paula","last_name":"Sanders","email":"psanders1w@abc.net.au","phone":null,"contacts":"68, 51, 58, 73, 00"},
  {"id":70,"username":"htorres1x","first_name":"Harold","last_name":"Torres","email":"htorres1x@wsj.com","phone":null,"contacts":"46, 70, 58, 99, 00"},
  {"id":71,"username":"kwells1y","first_name":"Katherine","last_name":"Wells","email":"kwells1y@sakura.ne.jp","phone":null,"contacts":"86, 83, 71, 86, 34"},
  {"id":72,"username":"rjacobs1z","first_name":"Roger","last_name":"Jacobs","email":"rjacobs1z@vinaora.com","phone":null,"contacts":"59, 02, 95, 44, 60"},
  {"id":73,"username":"rwilliams20","first_name":"Randy","last_name":"Williams","email":"rwilliams20@europa.eu","phone":null,"contacts":"67, 48, 20, 82, 50"},
  {"id":74,"username":"mpayne21","first_name":"Mark","last_name":"Payne","email":"mpayne21@google.cn","phone":null,"contacts":"19, 82, 08, 88, 61"},
  {"id":75,"username":"pcruz22","first_name":"Paula","last_name":"Cruz","email":"pcruz22@angelfire.com","phone":null,"contacts":"98, 58, 99, 33, 00"},
  {"id":76,"username":"rhamilton23","first_name":"Ralph","last_name":"Hamilton","email":"rhamilton23@ft.com","phone":null,"contacts":"55, 13, 19, 17, 29"},
  {"id":77,"username":"aadams24","first_name":"Andrew","last_name":"Adams","email":"aadams24@businessinsider.com","phone":null,"contacts":"93, 38, 17, 03, 38"},
  {"id":78,"username":"kprice25","first_name":"Kenneth","last_name":"Price","email":"kprice25@elegantthemes.com","phone":null,"contacts":"96, 77, 57, 44, 93"},
  {"id":79,"username":"dburns26","first_name":"Dorothy","last_name":"Burns","email":"dburns26@pagesperso-orange.fr","phone":null,"contacts":"87, 77, 83, 41, 45"},
  {"id":80,"username":"dharris27","first_name":"Douglas","last_name":"Harris","email":"dharris27@house.gov","phone":null,"contacts":"74, 26, 42, 58, 93"},
  {"id":81,"username":"aaustin28","first_name":"Andrew","last_name":"Austin","email":"aaustin28@umich.edu","phone":null,"contacts":"86, 70, 41, 75, 96"},
  {"id":82,"username":"etucker29","first_name":"Ernest","last_name":"Tucker","email":"etucker29@domainmarket.com","phone":null,"contacts":"77, 22, 39, 70, 32"},
  {"id":83,"username":"lfreeman2a","first_name":"Linda","last_name":"Freeman","email":"lfreeman2a@examiner.com","phone":null,"contacts":"05, 73, 85, 41, 66"},
  {"id":84,"username":"egonzales2b","first_name":"Eric","last_name":"Gonzales","email":"egonzales2b@mozilla.org","phone":null,"contacts":"09, 01, 05, 76, 42"},
  {"id":85,"username":"droberts2c","first_name":"Donald","last_name":"Roberts","email":"droberts2c@tinyurl.com","phone":null,"contacts":"82, 59, 71, 73, 87"},
  {"id":86,"username":"jbowman2d","first_name":"Jason","last_name":"Bowman","email":"jbowman2d@prweb.com","phone":null,"contacts":"70, 15, 99, 81, 55"},
  {"id":87,"username":"ljacobs2e","first_name":"Lawrence","last_name":"Jacobs","email":"ljacobs2e@nhs.uk","phone":null,"contacts":"96, 64, 32, 40, 38"},
  {"id":88,"username":"amcdonald2f","first_name":"Amanda","last_name":"Mcdonald","email":"amcdonald2f@deviantart.com","phone":null,"contacts":"29, 00, 51, 28, 03"},
  {"id":89,"username":"vmcdonald2g","first_name":"Victor","last_name":"Mcdonald","email":"vmcdonald2g@usgs.gov","phone":null,"contacts":"06, 92, 29, 86, 75"},
  {"id":90,"username":"maustin2h","first_name":"Margaret","last_name":"Austin","email":"maustin2h@tamu.edu","phone":null,"contacts":"84, 33, 91, 03, 29"},
  {"id":91,"username":"spatterson2i","first_name":"Steve","last_name":"Patterson","email":"spatterson2i@mail.ru","phone":null,"contacts":"99, 53, 16, 53, 95"},
  {"id":92,"username":"dbarnes2j","first_name":"Donald","last_name":"Barnes","email":"dbarnes2j@spiegel.de","phone":null,"contacts":"28, 26, 72, 46, 66"},
  {"id":93,"username":"ecrawford2k","first_name":"Earl","last_name":"Crawford","email":"ecrawford2k@ovh.net","phone":null,"contacts":"19, 30, 88, 42, 80"},
  {"id":94,"username":"rperry2l","first_name":"Robert","last_name":"Perry","email":"rperry2l@ocn.ne.jp","phone":null,"contacts":"52, 32, 23, 01, 34"},
  {"id":95,"username":"icook2m","first_name":"Irene","last_name":"Cook","email":"icook2m@nhs.uk","phone":null,"contacts":"10, 36, 01, 68, 46"},
  {"id":96,"username":"efernandez2n","first_name":"Ernest","last_name":"Fernandez","email":"efernandez2n@va.gov","phone":null,"contacts":"50, 62, 22, 24, 79"},
  {"id":97,"username":"rgarcia2o","first_name":"Ruby","last_name":"Garcia","email":"rgarcia2o@twitpic.com","phone":null,"contacts":"03, 75, 57, 88, 25"},
  {"id":98,"username":"sphillips2p","first_name":"Samuel","last_name":"Phillips","email":"sphillips2p@sourceforge.net","phone":null,"contacts":"49, 17, 16, 44, 11"},
  {"id":99,"username":"tprice2q","first_name":"Tina","last_name":"Price","email":"tprice2q@storify.com","phone":null,"contacts":"02, 99, 72, 38, 08"},
  {"id":100,"username":"wfuller2r","first_name":"William","last_name":"Fuller","email":"wfuller2r@cmu.edu","phone":null,"contacts":"39, 39, 06, 49, 92"}

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
