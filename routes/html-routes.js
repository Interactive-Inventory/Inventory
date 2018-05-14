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


  // POST route for saving a new todo
  // app.post("/api/inventory", function(req, res) {
  //   console.log(req.body);
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property (req.body)
  //   db.inventory.create({
  //     text: req.body.text,
  //     complete: req.body.complete
  //   }).then(function(inventory) {
  //     // We have access to the new todo as an argument inside of the callback function
  //     res.json(inventory);
  //   });
  // });

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
    });
    // app.post("/api/inventory/", function (req, res) {
      // inventory.findAll({})
      //   .then(function (data) {
      //     console.log(data[0].item);
      //     var hbsObject = {
      //       Inventory: data,
      //       layout: false
      //     };
      
    //   console.log(req.body);
    //   res.send('working');
    //   // });
    // });   
    // POST route for saving a new item
  app.post("/api/inventory", function(req, res) {
    console.log(req.body);
    inventory.create({
      item: req.body.item,
      category: req.body.category,
      size: req.body.size,
      color: req.body.color,
      quantity: req.body.quantity,
      received: req.body.received
    })
      .then(function(inventory) {
        res.json(inventory);
      });
  }); 

    //     // console.log(hbsObject);
    //     res.render("inventory", hbsObject);
    //   });
  

   
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