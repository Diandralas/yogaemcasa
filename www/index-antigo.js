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
app.listen(3000, function() {
  console.log('Acesse o servidor http://localhost:3000');
});

// importa controllers
var LocaisController = require('./www/js/LocaisController.js');

// cria enpoints para funcoes de controllers
app.get('/locais', LocaisController.listar);
app.post('/locais', LocaisController.criar);
app.put('/locais/:id', LocaisController.atualizar);
app.get('/locais/:id', LocaisController.recuperar);
app.delete('/locais/:id', LocaisController.apagar);
