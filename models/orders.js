"use strict";

module.exports = function(sequelize, DataTypes) {
  let Order = sequelize.define("Order", {
    pizzaName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    toppingOne: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    toppingTwo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    toppingThree: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    saveById: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }
  });
  return Order;

};