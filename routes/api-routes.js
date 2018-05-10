// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Inventory model
// 
var db = require("../models");

// Routes
// =============================================================
// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the items
  // app.get("/api/inventory/", function(req, res) {
  //   db.Post.findAll({})
  //     .then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  // });

  // GET route for getting all of the todos
  app.get("/api/inventory", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Post.findAll({}).then(function(dbPost) {
      // We have access to the todos as an argument inside of the callback function
      res.json(dbPost);
    });
  });

  // POST route for saving a new todo
  // app.post("/api/todos", function(req, res) {
  //   console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
    // db.Todo.create({
      // text: req.body.text,
      // complete: req.body.complete
    // }).then(function(dbTodo) {
      // We have access to the new todo as an argument inside of the callback function
      // res.json(dbTodo);
    // });
  // });

  // Get route for returning posts of a specific category
//   app.get("/api/posts/category/:category", function(req, res) {
//     db.Post.findAll({
//       where: {
//         category: req.params.category
//       }
//     })
//       .then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });

//   // Get route for retrieving a single post
//   app.get("/api/posts/:id", function(req, res) {
//     db.Post.findOne({
//       where: {
//         id: req.params.id
//       }
//     })
//       .then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });

//   // POST route for saving a new post
//   app.post("/api/posts", function(req, res) {
//     console.log(req.body);
//     db.Post.create({
//       title: req.body.title,
//       body: req.body.body,
//       category: req.body.category
//     })
//       .then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });

//   // DELETE route for deleting posts
//   app.delete("/api/posts/:id", function(req, res) {
//     db.Post.destroy({
//       where: {
//         id: req.params.id
//       }
//     })
//       .then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });

//   // PUT route for updating posts
//   app.put("/api/posts", function(req, res) {
//     db.Post.update(
//       {
//         title: req.body.title,
//         body: req.body.body,
//         category: req.body.category
//       },
//       // req.body,
//       {
//         where: {
//           id: req.body.id
//         }
//       })
//       .then(function(dbPost) {
//         res.json(dbPost);
//       });
//   });
};

