const mongoose = require('mongoose');
const { User, Post } = require('./models/models');

mongoose.connect('mongodb://localhost/dataassociations');
function createUsers ( ){
	User.create({
		name: 'Hermione Granger',
		email: 'hermione@hogwarts.edu'
	});
}
// createUsers();

Post.create({
	title: 'Hermione loves the other dude',
	content: 'She ain\'t lovin the potter'
}, function (err, post) {
	console.log(err? 'error, ' : 'no error, ', post ? 'there is post' : 'there is no post');

	User.findOne({
		email: "hermione@hogwarts.edu"
	}, userFoundCB(post));
});

function userFoundCB(post) {
	return function (err, foundUser) {
		if (err) return console.error(err);

		if (foundUser) {
			// console.log(foundUser);
			foundUser.posts.push(post);
			foundUser.save((err, data) => {
				if (err) {
					console.log(err);
				} else {
					console.log(data)
				}
			})
		} else {
			console.log('No such user found.');
		}
	}
}

/* 

http://mongoosejs.com/docs/queries.html

Anywhere a callback is passed to a query in Mongoose, the callback follows the pattern callback(error, results)

If an error occurs executing the query, the error parameter will contain an error document, and result will be null. If the query is successful, the error parameter will be null, and the result will be populated with the results of the query.

 */