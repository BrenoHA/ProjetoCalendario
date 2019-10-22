const express = require('express');
const Professor = require('../models/professor');
const router = express.Router();


router.post('/cadastrar', async (req, res) => {

	try {
		const prof = await Professor.create(req.body);

		return res.send({ prof });
	} catch(err) {
		return res.status(400).send({ error: 'Registration failed:' + err});
	}
});

module.exports = app => app.use('/professor', router);