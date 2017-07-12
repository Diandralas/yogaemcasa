var ObjectID = require('mongodb').ObjectID;

// listar
exports.listar = function (req, res, $scope) {
  req.db.collection('glossario').find().toArray(function(err, result) {
    if (err) {
      return console.log(err)
    };

    res.send(result);
  });
};

// cria um novo item
exports.criar = function (req, res) {
  req.db.collection('glossario').save(req.body, function(err, result) {
    if (err) {
      return res.sendStatus(503);
    }

    res.sendStatus(201);
  });
};
