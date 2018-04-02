var db = require('./modals');

var places_list = [
  {
  	city: "San Francisco"
  },
  {
  	city: "Torino"
  },
  {
  	city: "Napa"
  }
];

var books_list = [
  {
  	title: "Harry Potter"
  },
 {
  	title: "Outrageous Openness"
  },
   {
  	title: "Outliers"
  }
];

// db.Places.remove({}, function(err, places) {
//   console.log('removed all places');
  db.Places.create(places_list, function(err, places){
    if (err) {
      console.log(err);
      return;
    }
    console.log('recreated all authors');
    console.log("created", places.length, "places");

    
});
// })

db.Books.remove({}, function(err, books) {
  console.log('removed all books');
  db.Books.create(books_list, function(err, books){
    if (err) {
      console.log(err);
      return;
    }
    console.log('recreated all books');
    console.log("created", books.length, "books");
});
});
