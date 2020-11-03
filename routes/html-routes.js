var db = require("../models");
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/login", function(req, res) {
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login");
  });

  app.get("/members", isAuthenticated, function(req, res) {
    db.Order.findAll({
      where: {
        saveById: req.user.id
      },
      order: [
        ["id", "DESC"]
      ],
      limit: 5
    }).then(function(orders){
      res.render("members", {
        orders: orders
      });
    });
  });

  app.get("/order", isAuthenticated, function(req,res){
    db.Order.findAll({
      where: {
        saveById: null
      }
    }).then(function(orders){
      res.render("orders", {
        orders: orders
      });
    });
  });

  app.get("/createorder", isAuthenticated, function(req,res){
    res.render("createOrder");
  });

  app.get("/checkout", isAuthenticated, function(req,res){
    res.render("checkout");
  });

  app.get("/about", function(req,res){
    res.render("about");
  });
};