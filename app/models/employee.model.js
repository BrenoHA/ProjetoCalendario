const mongoose = require('mongoose');
var employeeSchema = new mongoose.Schema({
nome:{
    type:String
},
telefone:{
    type:String
},
email:{
    type:String
},
idade:{
    type:Number
},
cpf:{
    type:String
},
aula:{
    type:Object
}

});
mongoose.model('Employee',employeeSchema);
