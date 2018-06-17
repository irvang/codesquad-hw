const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dataassociations');

const { User, Post } = require('./models/models');

let newPost = new Post({
	title: 'Some title',
	content: "Some content"
});

function saveNewPost() {
	newPost.save(function (err, post) {
		if (err) return console.error(err);
		console.log('\n Post saved successfully! \n\n' + post);
	});
}
function editOne() {
	User.findOne({ name: 'Bob Loblaw' }, function (err, user) {
		if (err) {
			console.log(err);
		} else {
			user.posts.push({
				title: 'Bob Loblaw no habla Espanol',
				content: 'I wish I could learn Spanish'
			});
			user.save(function (err, user) {
				if (err) {
					console.log(err);
				} else {
					console.log(user);
				}
			});
		}
	});
}


function saveNewUserWithPost() {
	let newUser = new User({
		name: 'Bob The law',
		email: "bobLoblaw.com"
	});

	newUser.posts.push({
		title: 'Why Bob Loblaw blogs about the Law',
		content: 'Blah blah blah blah'
	});

	newUser.save(function (err, user) {
		if (err) return console.error(err);
		console.log('\n User saved successfully! \n\n' + user);
	});
}

// saveNewUserWithPost();
// saveNewPost();
// editOne();
