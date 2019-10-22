const express = require('express');

const Professor = require('../models/professor');
const Login = require('../models/login');

const router = express.Router();

router.post('/register', async (req, res) => {

	try {
		const prof = await Professor.create(req.body);

		return res.send({ prof });
	} catch(err) {
		return res.status(400). send({ error: 'Registration failed:' + err});
	}
});

router.post('/logar', async (req, res) => {
	const {login, senha} = req.body;

	const log = await Login.findOne({LOGIN: login, SENHA: senha});



	if(!log){
	return res.status(400).send({ error: 'Login inválido'});
	}

	
	return log;
});

module.exports = app => app.use('/auth', router);