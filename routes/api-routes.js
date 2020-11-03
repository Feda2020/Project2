var db = require("../models");
var passport = require("../config/passport");
var sequelize = require("sequelize");

module.exports = function(app) {
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });

  app.get("/api/presetorders", function(req, res){
    db.Order.findAll({
      where: {
        saveById: null
      }
    }).then(function(preOrders){
      res.json(preOrders);
    });
  });

<<<<<<< HEAD
=======
  //CHECKOUT
>>>>>>> master
  app.get("/api/presetorders", function(req, res){
    db.Order.findAll({
      attributes: [
        sequelize.fn("MAX", sequelize.col("id"))
      ],
      where: {
        saveById: req.users.id
      }
    }).then(function(newOrders){
      res.json(newOrders);
    });
  });

  app.post("/api/orders", function(req,res){
    db.Order.create(req.body).then(function(dbOrders){
      res.json(dbOrders);
    });
  });

  app.get("/api/orders/:id", function(req, res){
    db.Order.findAll({
      where: {
        saveById: req.params.id
      },
      order: [
        ["id", "DESC"]
      ]
    }).then(function(previousOrders){
      res.json(previousOrders);
    });
  });
};
