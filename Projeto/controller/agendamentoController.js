const express = require('express');
const Agenda = require('../models/agenda');
const router = express.Router();


router.post('/agendar', async (req, res) => {

	try {
		const agenda = await Agenda.create(req.body);

		return res.send({ agenda });
	} catch(err) {
		return res.status(400).send({ error: 'Registration failed:' + err});
	}
});

router.get('/agenda', async (req, res) => {

	const agendados = await Agenda.find();

	res.send({ agendados });

	//res.render('agenda', {agendados});

});


module.exports = app => app.use('', router);