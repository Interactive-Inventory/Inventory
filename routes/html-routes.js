// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var inventory = require("../models/inventory.js");
var sequelize = require("../config/connection.js");


// Requiring our custom middleware for checking if a user is logged in
// var isAuthenticated = require("../config/middleware/isAuthenticated");


// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  // app.get("/", function(req, res) {
  //   res.send('hello');
  // });


  // app.get("/", function(req, res) {
  //     res.render(path.join(__dirname, "index", hbsObject ));
  //   });

  app.get("/", function (req, res) {
    // inventory.findAll({})
    // .then(function(data) {
    var hbsObject = {
      // Inventory: data,
      layout: false
    };

    // console.log(hbsObject);
    res.render("index", hbsObject);
    // });
  });

  app.get("/inventory", function (req, res) {
    inventory.findAll({})
      .then(function (data) {
        console.log(data[0].item);
        var hbsObject = {
          Inventory: data,
          layout: false
        };

        // console.log(hbsObject);
        res.render("inventory", hbsObject);
      });
  });

  app.get("/form", function (req, res) {
    inventory.findAll({})
      .then(function (data) {
        console.log(data[0].item);
        var hbsObject = {
          Inventory: data,
          layout: false
        };

        // console.log(hbsObject);
        res.render("form", hbsObject);
      });
  });

  app.get("/inventory/:query", function (req, res) {
    var lookupValue = req.params.query.substring(1).toLowerCase();
    inventory.findAll({
      limit: 20,
      where: {
        item: sequelize.where(sequelize.fn('LOWER', sequelize.col('item')), 'LIKE', '%' + lookupValue + '%')
      }
    }).then(function (data) {
      console.log(data);
      var hbsObject = {
        Inventory: data,
        layout: false
      };

      // console.log(hbsObject);
      res.render("inventory", hbsObject);
    }).catch(function (error) {
      console.log(error);
    });

    // var searchTerm = req.params.id;
    // inventory.findAll({})
    //   .then(function (data) {
    //     console.log(data[0].item);
    //     var hbsObject = {
    //       Inventory: data,
    //       layout: false
    //     };

    //     // console.log(hbsObject);
    //     res.render("inventory", hbsObject);
    //   });
  });


  // app.get("/login", function(req, res) {
  //   // If the user already has an account send them to the members page
  //   if (req.user) {
  //     res.redirect("/members");
  //   }
  //   res.sendFile(path.join(__dirname, "../public/index.hanlebars"));
  // });

  // 
  // app.get("/search", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/search.html"));
  // });

  // // update route loads update.html
  // app.get("/update", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/update.html"));
  // });
  // 
  // app.get("/all", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/all.html"));
  // });

  // index route loads view.html
  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/home.html"));
  // });


};


// module.exports = function(app) {

// app.get("/", function(req, res) {
//   // If the user already has an account send them to the members page
//   if (req.user) {
//     res.redirect("/members");
//   }
//   res.sendFile(path.join(__dirname, "../public/signup.html"));
// });



// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
// app.get("/members", isAuthenticated, function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/members.html"));
// });