// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var inventory = require("../models/inventory.js");



// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  // app.get("/", function(req, res) {
  //   res.send('hello');
  // });


  // app.get("/", function(req, res) {
  //     res.render(path.join(__dirname, "index", hbsObject ));
  //   });
  
  // app.get("/", function(req, res) {
  //   inventory.findAll({})
  //   .then(function(data) {
  //     var hbsObject = {
  //       Inventory: data
  //     };

  //     console.log(hbsObject);
  //     res.render("index", hbsObject);
  //   });
  // });

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
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });


};
