const express = require('express');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static('./public'));
app.set('views','./secao');

app.use(express.urlencoded({extended: true})); 
app.use(express.json());

require('./controller/authController')(app);
require('./controller/professorController')(app);
require('./controller/agendamentoController')(app);
const Agenda = require('./models/agenda');

app.get('/',function(req,res){
    res.render("Login");
   });

   app.get('/pagamentos',function(req,res){
    res.render("pagamentos");
    
    });

       app.get('/professores',function(req,res){
        res.render("professores");
        
        });


app.listen(3000,()=>{
console.log('Servidor ON!');
});
