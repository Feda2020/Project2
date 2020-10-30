// Requiring path to so we can use relative routes to our HTML files
var path = require("path");
var db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    // if (req.user) {
    //   res.redirect("/members");
    // }
    // res.sendFile(path.join(__dirname, "../public/signup.html"));
    res.render("index");
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  app.get("/order", isAuthenticated, function(req,res){
    db.Order.findAll({}).then(function(orders){
      res.render("orders", {
        orders: orders
      });
    });
  });

  //These are left as comments until the tables are created

  // app.get("/favorites", isAuthenticated, function(req,res){
  //   db.Favorites.findAll({}).then(function(){
  //     res.render("favorites");
  //   });
  // });

  // app.get("/reviews", isAuthenticated, function(req,res){
  //   db.Reviews.findAll({}).then(function(){
  //     res.render("reviews");
  //   });
  // });

  // app.get("/checkout", isAuthenticated, function(req,res){
  //   db.Checkout.findAll({}).then(function(){
  //     res.render("checkout");
  //   });
  // });
};
