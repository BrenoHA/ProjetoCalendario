const express = require('express');
const bcrypt = require('bcryptjs');

const Login = require('../models/login');

const router = express.Router();

router.post('/register/logar', async (req, res) => {

	try {
		const login = await Login.create(req.body);

		return res.send({ login });
	} catch(err){
		return res.status(400).send({ error: 'Registration failed err' + err});
	}
});

router.post('/', async (req, res) => {

	const {LOGIN, SENHA} = req.body;

	const log = await Login.findOne({LOGIN}).select('+SENHA');

	if(!log)
	return res.status(400).send({ error: 'Login inválido'});
	if(!await bcrypt.compare(SENHA, log.SENHA))
	return res.status(400).send({ error: 'Senha inválida'});

	res.render('agenda');
});

module.exports = app => app.use('', router);