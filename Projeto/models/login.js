const mongoose = require('../database/connMongo.js');

const LoginSchema = new mongoose.Schema({
	
	LOGIN:{
		type: String,
		required: true
	},
	SENHA:{
		type: String,
		required: true
	}
});

const Login = mongoose.model('login', LoginSchema);

module.exports = Login;