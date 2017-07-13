var ObjectID = require('mongodb').ObjectID;

// lista locais
exports.ordenar = function (req, res, $scope) {
  req.db.collection('locais').find().toArray(function(err, loc) {
    if (err) {
      //return res.sendStatus(503);
      return console.log(err);
    };

    res.send(loc);
  });
};

// cria um novo local
exports.atualizar = function (req, res) {
  req.db.collection('locais').save(req.body, function(err, result) {
    if (err) {
      return res.sendStatus(503);
    }

    res.sendStatus(201);
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
