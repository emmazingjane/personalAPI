var express = require('express'),
  bodyParser = require('body-parser'),
  db = require('./modals');

var app = express();

app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

// define a root route: localhost:3000/
app.get('/', function (req, res) {
  res.sendFile('./index.html' , { root : __dirname});
});





app.get('/api/places', function (req, res) {
      // send all books as JSON response
   db.Places.find()
     .exec(function(err, places){
          if (err) { console.log("index error: " + err); }
          res.json(places);
        });
  });

// app.get('/api/books', function (req, res) {
//       // send all books as JSON response
//       db.Book.find()
//         .exec(function(err, books){
//           if (err) { console.log("index error: " + err); }
//           res.json(books);
//         });
// });

// app.post('/api/books', function (req, res) {
//    var newBook = new db.Book({
//      title: req.body.title,
// });
// });

app.post('/api/places', function (req, res) {
   var newPlaces = new db.Places({
     title: req.body.places,
});
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});





