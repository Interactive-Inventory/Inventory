// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");
var mysql = require("mysql");
var config = require(__dirname + "/config.json");
console.log(config);


// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
if(config.use_env_variable) {
  console.log(config.use_env_variable)
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
}else{
  var sequelize = new Sequelize("sequelize_inventory", "root", "4488Pikes!", {
    host: "localhost",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    }
  });
};

// Exports the connection for other files to use
module.exports = sequelize;