// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
// var db = require("./models");
var bodyParser = require("body-parser");
// Set Handlebars.
var exphbs = require("express-handlebars");
// var session = require("express-session");
// // Requiring passport as we've configured it
// var passport = require("./config/passport");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models/inventory.js");






var hbs = exphbs.create({
  // Specify helpers which are only registered on this instance.
  helpers: {
      math: function (lvalue, operator, rvalue, options) {
        lvalue = parseFloat(lvalue);
        rvalue = parseFloat(rvalue);
            
        return {
            "+": lvalue + rvalue,
            "-": lvalue - rvalue,
            "*": lvalue * rvalue,
            "/": lvalue / rvalue,
            "%": lvalue % rvalue
        }[operator];
    }
    
  },
  defaultLayout: "main"
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");


// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

// Static directory
app.use("/",express.static(__dirname+"/public"));

// // We need to use sessions to keep track of our user's login status
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());


// Routes
// =============================================================
// require("./controllers/invenController.js")(app);
// require("./routes/api-routes.js")(app);
routes = require("./routes/html-routes.js")(app);
// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync().then(funcion() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
// });
