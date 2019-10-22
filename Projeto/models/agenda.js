const mongoose = require('../database/connMongo.js');

const AgendaSchema = new mongoose.Schema({
	PROFESSOR: {
		type: String,
		ref: 'professor'
		required: true
	},
	MATÉRIA:{
		type: String,
		required: true
	},
	TIPO DE AYLA: {
		type: String,
		unique: true,
		required: true
	},
	ALUNO: {
		type: Number,
		required: true
	},
	DATA DA AULA: {
		type: String,
		required: true
	},
	HORÁRIO DA AULA: {
		type: Date,
		required: true
		
	},
	AULA DADA:{
		type: boolean,
		required: true,
		default: false
	}
});

const Agendamento = mongoose.model('agendamento', ProfessorSchema);

module.exports = Agendamento;