require('./app/models/db');
var express = require ('express');
var app = express();
app.set('view engine', 'ejs');
app.use(express.static('./app/public'));

app.get('/',function(req,res){
    res.render("secao/agenda");
})

app.get('/Agenda.html',function(_req,res){
res.render("secao/agenda");

})
app.get('/Pagamento.html',function(_req,res){
    res.render("secao/pagamentos");
    
    })
    app.get('/Professores.html',function(_req,res){
        res.render("secao/professores");
        
        })


app.listen(3000,()=>{
console.log('Express server started at port : 3000');
});
