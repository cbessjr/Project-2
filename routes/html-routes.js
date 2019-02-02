var db = require("../models");

module.exports = function(app) {
  //GET Route to root page
  app.get("/", function(req, res) {
    db.Reports.findAll({}).then(function(dbData) {
      res.render("index", {
        msg: "Welcome!",
        reports: dbData
      });
    });
  });
  //GET Route to display submit new user form
  app.get("/users/new", function(req, res) {
    res.render("new-user");
  });

  //GET Route to display submit new report page
  app.get("/reports/new", function(req, res) {
    db.Reports.findAll({}).then(function(dbData) {
      res.render("new-report", {
        reports: dbData
      });
    });
  });

  //GET Route to search by state
  app.get("/search/state/:state", function(req, res) {
    db.Reports.findAll({
      where: {
        state: req.params.state
      }
    }).then(function(dbData) {
      res.render("search-state", {
        reports: dbData
      });
    });
  });

  //GET Route to search by city
  app.get("/search/city/:city", function(req, res) {
    db.Reports.findAll({
      where: {
        city: req.params.city
      }
    }).then(function(dbData) {
      res.render("search-city", {
        report: dbData
      });
    });
  });
};
