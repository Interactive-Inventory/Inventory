var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var inventory = require("../models/inventory.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  inventory.all(function(data) {
    var hbsObject = {
      inventory: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/inventory", function(req, res) {
  inventory.create([
    "name", "sleepy"
  ], [
    req.body.name, req.body.item
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

router.put("/api/inventory/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

 inventory.update({
    item: req.body.item
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/inventory/:id", function(req, res) {
  var condition = "id = " + req.params.id;

 inventory.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
