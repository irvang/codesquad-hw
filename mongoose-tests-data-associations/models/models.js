const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
	title: String,
	content: String
});



const userSchema = new mongoose.Schema({
	name: String,
	email: String,
	posts: [
		{
		type: mongoose.Schema.Types.ObjectId,
		ref: "Post"
	}
]
});

const User = mongoose.model('User', userSchema);
const Post =  mongoose.model('Post', postSchema); 

module.exports = { 
	User: User,
	Post: Post
}