var express = require('express');
var bodyParser = require('body-parser');
var expressMongoDb = require('express-mongo-db');


// inicializa o express
var app = express();

// inicializa o body parser
app.use(bodyParser.json());

// inicializa mongo e expoe para o express
app.use(expressMongoDb('mongodb://localhost:27017/yoga'));

// inicializa o servidor na porta especificada
app.listen(3001, function() {
  console.log('Acesse o servidor http://localhost:3001');
});

// importa controllers
var LocaisController = require('./www/js/LocaisController.js');

// cria enpoints para funcoes de controllers
app.get('/home/LocaisController', LocaisController.listar);
app.post('/home/LocaisController', LocaisController.criar);
