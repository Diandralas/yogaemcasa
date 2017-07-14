// Projeto Yoga
var express = require('express');
var bodyParser = require('body-parser');
var expressMongoDb = require('express-mongo-db');

// inicializa o express
var app = express();

// inicializa o body parser
app.use(bodyParser.json());

// inicializa mongo e expoe para o express
app.use(expressMongoDb('mongodb://localhost:27017/yoga'));

//libera acesso à API de qualquer host/cliente. Para conectar com o Front-End geral.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// inicializa o servidor na porta especificada
app.listen(3000, function() {
  console.log('Acesse o servidor http://localhost:3000');
});

// importa controllers
var GlossarioController = require('./controllers/glossario.js');
var LocaisController = require('./controllers/locais.js');

// cria endpoints para funcoes de controllers
app.get('/glossario', GlossarioController.listar);
app.post('/glossario', GlossarioController.criar);
app.get('/locais', LocaisController.ordenar);
app.post('/locais', LocaisController.atualizar);
app.delete('/locais', LocaisController.apagar);
app.get('/mapa', LocaisController.ordenar);
