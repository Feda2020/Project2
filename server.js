/* eslint-disable linebreak-style */
const express = require("express");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");

const PORT = process.env.PORT || 3000;
const db = require("./models");
const app = express();


app.use(express.static("public"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

const exphbs = require("express-handlebars");
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//app.use(routes);
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

db.sequelize.sync().then(function(){
  app.listen(PORT, function() {
    console.log("App now listening at localhost:" + PORT);
  });
});

