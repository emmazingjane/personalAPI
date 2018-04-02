var mongoose = require('mongoose'),
 Schema = mongoose.Schema;

var BooksSchema = new Schema ({
	city: String,
})


var Books = mongoose.model('Books', BooksSchema);
module.exports = Books;