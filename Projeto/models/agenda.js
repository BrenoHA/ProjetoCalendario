const mongoose = require('../database/connMongo.js');

const AgendaSchema = new mongoose.Schema({
	PROFESSOR: {
		type: String,
		ref: 'professor',
		required: true
	},
	MATÉRIA:{
		type: String,
		required: true
	},
	TIPO_DE_AULA: {
		type: String,
		unique: true,
		required: true
	},
	ALUNO: {
		type: String,
		required: true
	},
	DATA_DA_AULA: {
		type: Date,
		required: true
	},
	HORÁRIO_DA_AULA: {
		type: String,
		required: true
		
	},
	AULA_DADA:{
		type: Boolean,
		required: true,
		default: false
	}
});

const Agendamento = mongoose.model('agendamento', AgendaSchema);

module.exports = Agendamento;