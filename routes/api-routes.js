// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Inventory model
var Inventory = require("../models/inventory.js");

// Routes
// =============================================================
module.exports = function(app) {

  // // GET route for getting all of the inventory
  // app.get("/api/all", function(req, res) {
  //   Inventory.findAll({})
  //     .then(function(results) {
  //       res.json(results);
  //     });
  // });

  // // Get a specific item route
  // app.get("/api/:item", function(req, res) {
  //   if(req.params.item){
  //   Inventory.findAll({
  //     where: {
  //       item: req.params.item
  //     }
  //   })
  //     .then(function(results) {
  //       res.json(results);
  //     });
  //   }
  // });

  // // Get route for retrieving a single inventory
  // app.get("/api/posts/:id", function(req, res) {
  //   db.Post.findOne({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function(results) {
  //       res.json(results);
  //     });
  // });

  // // POST route for saving a new inventory
  // app.post("/api/inventory", function(req, res) {
  //   console.log(req.body);
  //   Inventory.create({
  //     item: req.body.item,
  //   category: req.body.category,
  //   size:
  //   req.body.size,
  //   color:
  //   req.body.color
  //   })
  //     .then(function(results) {
  //       res.json(results);
  //     });
  // });

  // // DELETE route for deleting inventory
  // app.delete("/api/:id", function(req, res) {
  //  Inventory.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   })
  //     .then(function(results) {
  //       res.json(results);
  //     });
  // });

  // // PUT route for updating inventory
  // app.put("/api/inventory", function(req, res) {
  //   Inventory.update(
  //     {
  //       item: req.body.item,
  //       category: req.body.category,
  //       size:
  //       req.body.size,
  //       color:
  //       req.body.color
  //     },
  //     // req.body,
  //     {
  //       where: {
  //         id: req.body.id
  //       }
  //     })
  //     .then(function(results) {
  //       res.json(results);
  //     });
  // });
};
