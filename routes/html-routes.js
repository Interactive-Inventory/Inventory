// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var inventory = require("../models/inventory.js");
var express = require("express");
var router = express.Router();

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  // app.get("/", function(req, res) {
  //   res.send('hello');
  // });

  router.get("/", function(req, res) {
    // inventory.all(function(data) {
      var hbsObject = {
      };

      console.log(hbsObject);
      res.render("index", hbsObject);
    // });
  });

  // app.get("/search", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/search.html"));
  // });

  // // update route loads update.html
  // app.get("/update", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/update.html"));
  // });

  // app.get("/all", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/all.html"));
  // });

};
