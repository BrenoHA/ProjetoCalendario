const mongoose = require('../database/connMongo.js');
const bcrypt = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
	
	LOGIN:{
		type: String,
		required: true
	},
	SENHA:{
		type: String,
		required: true,
		select:false
	}, 
	createdAt: {
		type: Date,
		default: Date.now
	}
});

LoginSchema.pre('save', async function(next){
	const hash = await bcrypt.hash(this.SENHA, 10);
	this.SENHA = hash;

	next();
});

const Login = mongoose.model('login', LoginSchema);

module.exports = Login;