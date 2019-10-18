require('./models/db');
const express = require ('express');
const path = require('path');
const exphbs = require('express-handlebars');

const employeeController = require('./controllers/employeeController');
var app = express();
app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs',exphbs({extname:'hbs',defaultlayout:'mainLayout',layoutsDir:__dirname + '/views/layouts/'}))
app.set('view engine','hbs');
app.use('/employee',employeeController);
app.listen(3000,()=>{
console.log('Express server started at port : 3000');
});
