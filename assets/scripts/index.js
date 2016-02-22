'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
// require('./example');

// require('./helpers/json.js');
// require('./helpers/title.js');

var bookListingTemplate = require('./book-listing.handlebars');

document.addEventListener("DOMContentLoaded", function() {
	var div = document.createElement('div');
	div.innerHTML = bookListingTemplate({
		username: "test",
		books: [
			{ title: "A book", synopsis: "With a description" },
			{ title: "Another book", synopsis: "From a very good author" },
			{ title: "Book without synopsis" }
		]
	});
	document.body.appendChild(div);
});
