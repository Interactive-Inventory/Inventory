// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates an "Inventory" model that matches up with DB
var Inventory = sequelize.define("inventory", {
  id: {
    type: Sequelize. INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  item: {
    type: Sequelize.STRING
  },
  category: {
    type: Sequelize.INTEGER
  },
  size: {
    type: Sequelize.INTEGER
  },
  color: {
    type: Sequelize.STRING
  },
  startCount: {
    type: Sequelize.INTEGER
  },
  endCount: {
    type: Sequelize.INTEGER
  },
  used: {
    type: Sequelize.INTEGER
  },
  received: {
    type: Sequelize.INTEGER
  },
}, {
  timestamps: true
});

// Syncs with DB
Inventory.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Inventory;
