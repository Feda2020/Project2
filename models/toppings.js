module.exports = function(sequelize, DataTypes) {
  let Topping = sequelize.define("Topping", {
    toppingName: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  return Topping;

};