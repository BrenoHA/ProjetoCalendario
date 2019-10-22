const express = require('express');
const bcrypt = require('bcryptjs');

const Professor = require('../models/professor');
const Login = require('../models/login');

const router = express.Router();

router.post('/register', async (req, res) => {

	try {
		const prof = await Professor.create(req.body);

		return res.send({ prof });
	} catch(err) {
		return res.status(400).send({ error: 'Registration failed:' + err});
	}
});

router.post('/registerlogar', async (req, res) => {

	try {
		const login = await Login.create(req.body);

		return res.send({ login });
	} catch(err){
		return res.status(400).send({ error: 'Registration failed err' + err});
	}
});

router.post('/logar', async (req, res) => {

	const {LOGIN, SENHA} = req.body;

	const log = await Login.findOne({LOGIN}).select('+SENHA');

	if(!log)
	return res.status(400).send({ error: 'Login inválido'});
	if(!await bcrypt.compare(SENHA, log.SENHA))
	return res.status(400).send({ error: 'Senha inválida'});

	res.send ({ log });

});

module.exports = app => app.use('/auth', router);