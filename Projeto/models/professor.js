const mongoose = require('../database/connMongo.js');

const ProfessorSchema = new mongoose.Schema({
	NOME: {
		type: String,
		required: true
	},
	TELEFONE:{
		type: String,
		required: true
	},
	EMAIL: {
		type: String,
		unique: true,
		required: true
	},
	IDADE: {
		type: Number,
		required: true
	},
	CPF: {
		type: String,
		required: true
	},
	AULA: {
		NOME:{
			type: String,
			required: true
		},
		VALOR: {
			type: Number,
			required: true
		}
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});

const Professor = mongoose.model('professor', ProfessorSchema);

module.exports = Professor;