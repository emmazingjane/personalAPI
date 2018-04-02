var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/emmazing");

module.exports.Places = require("./places.js");
var PlacesModel = require('./places.js')

module.exports = {Places: PlacesModel}

// module.exports.Books = require("./books.js");
// var BooksModel = require('./books.js')

// module.exports = {Books: BooksModel}
