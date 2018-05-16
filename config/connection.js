// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");
var mysql = require("mysql");
// var config = require(__dirname + "/config.json");


// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
// if(config.use_env_variable) {
//   console.log(config.use_env_variable)
//   var sequelize = new Sequelize(process.env[config.use_env_variable]);
// }else{
  var sequelize = new Sequelize("gio7ee463sfiz67d", "ak9wyela9zuhcjnm", "hllx06w8jz246i2g", {
  host: "gp96xszpzlqupw4k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
// };

// Exports the connection for other files to use
module.exports = sequelize;