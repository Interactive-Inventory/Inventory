// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var Inventory = sequelize.define("inventory", {
  item: {
    type: Sequelize.STRING
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  size: {
    type: Sequelize.INTEGER
  },
  color: {
    type: Sequelize.STRING
  }
}, {
  timestamps: false
});

// Syncs with DB
Inventory.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Inventory;
