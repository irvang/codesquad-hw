const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	title: String,
	content: String
});

// const Post = mongoose.model('Post', postSchema);

const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	posts: [
	// 	{
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: "Post"
	// }
]
});

// const User = mongoose.model('User', userSchema);

module.exports = { 
	User: mongoose.model('User', userSchema), 
	Post: mongoose.model('Post', postSchema) 
}