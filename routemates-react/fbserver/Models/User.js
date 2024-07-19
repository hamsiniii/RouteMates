const mongoose = require('mongoose');


const usersSchema = new mongoose.Schema({
	name:String,
	email:String,
	suggestions:String
});

module.exports = mongoose.model("users",usersSchema);