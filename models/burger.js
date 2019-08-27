var Sequelize = require("sequelize");
var sequelize = require("../config/config.json");
module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: Sequelize.STRING,
    devoured: Sequelize.BOOLEAN,
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
  });
  return Burger;
};


