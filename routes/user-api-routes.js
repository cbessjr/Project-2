var db = require("../models");

module.exports = function(app) {
  app.get("/api/users", function(req, res) {
    db.Users.findAll({})
      .then(function(dbData) {
        res.json(dbData);
      })
      .catch(function(err) {
        if (err) {
          console.log(err.stack);
        }
      });
  });

  app.get("/api/users/:id", function(req, res) {
    db.Users.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbData) {
      res.json(dbData);
    });
  });

  app.post("/api/users", function(req, res) {
    db.Users.create(req.body).then(function(dbData) {
      res.json(dbData);
    });
  });

  app.delete("/api/users/:id", function(req, res) {
    db.Users.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbData) {
      res.json(dbData);
    });
  });
};
