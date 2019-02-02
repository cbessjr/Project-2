// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  // GET route for getting all of the reports
  app.get("/api/reports", function(req, res) {
    db.Reports.findAll({}).then(function(dbData) {
      res.json(dbData);
    });
  });

  // Get route for retrieving a single post
  app.get("/api/reports/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    db.Reports.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbData) {
      res.json(dbData);
    });
  });

  // POST route for saving a new post
  app.post("/api/reports", function(req, res) {
    db.Reports.create(req.body).then(function(dbData) {
      res.json(dbData);
    });
  });

  // DELETE route for deleting reports
  app.delete("/api/reports/:id", function(req, res) {
    db.Reports.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbData) {
      res.json(dbData);
    });
  });

  // PUT route for updating reports
  app.put("/api/reports", function(req, res) {
    db.Reports.update(req.body, {
      where: {
        id: req.body.id
      }
    }).then(function(dbData) {
      res.json(dbData);
    });
  });
};
