var ObjectID = require('mongodb').ObjectID;

// lista locais
exports.listar = function (req, res) {
  req.db.collection('locais').find().toArray(function(err, loc) {
    if (err) {
      return res.sendStatus(503);
    }

    res.send(loc);
  });
};

// cria um novo local
exports.criar = function (req, res) {
  req.db.collection('locais').save(req.body, function(err, result) {
    if (err) {
      return res.sendStatus(503);
    }

    res.sendStatus(201);
  });
};

// atualiza um local
exports.atualizar = function (req, res) {
  var id = req.params.id;

  req.db.collection('locais').update({_id: ObjectID(id)}, { $set: req.body }, function(err, result) {
    if (err) {
      return res.sendStatus(503);
    }

    res.send(result);
  });
};

// remove um local utilizando o id
exports.apagar = function (req, res) {
  var id = req.params.id;

  req.db.collection('locais').remove({_id: ObjectID(id)}, {justOne: true}, function(err, result) {
    if (err) {
      return res.sendStatus(503);
    }

    res.sendStatus(200);
  });
};

// recupera um local utilizando o id
exports.recuperar = function (req, res) {
  var id = req.params.id;

  req.db.collection('locais').findOne({_id: ObjectID(id)}, function(err, result) {
    if (err) {
      return res.sendStatus(503);
    }

    if (!result) {
      return res.send(404);
    }

    res.send(result);
  });
};
