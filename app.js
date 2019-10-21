var express = require('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('./napp/public'));
app.set('views','./napp/views');
app.get('/',function(req,res){
    res.render("secao/Login");
   })
   app.get('/Pagamento.html',function(req,res){
    res.render("secao/pagamentos");
    
    });
    app.get('/Agenda.html',function(req,res){
        res.render("secao/agenda");
       
       });
       app.get('/Professores.html',function(req,res){
        res.render("secao/professores");
        
        });







app.listen(3000,()=>{
console.log('Express server started at port : 3000');
});
