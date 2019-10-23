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

/*router.get('/agenda', (req, res) => {

	Agenda.find().then((agendamento) => {

    	res.render('agenda', { agendamento });

	});

});*/


module.exports = app => app.use('', router);