const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect('mongodb+srv://admin:adminelo@mongoelo-q49mj.gcp.mongodb.net/sistemaCalendario').then(() =>{
	console.log("Conexão com o banco estabelecida");
}).catch((err) => {
	console.log("A conexão não pode ser estabelecida, devido ao erro: " + err);
});


module.exports = mongoose;