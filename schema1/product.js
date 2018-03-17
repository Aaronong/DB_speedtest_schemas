"use strict";

module.exports = function(sequelize, DataTypes) {
  // Product table
  const Product = sequelize.define("Product", {
    name: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: "compositeIndex"
    },
    category: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    defaultPrice: {
      // Args: (Total digits, Decimal places)
      type: DataTypes.DECIMAL(10, 2)
    },
    size: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: "compositeIndex"
    },
    weight: {
      type: DataTypes.INTEGER,
      validate: { min: 0 },
      allowNull: false,
      unique: "compositeIndex"
    },
    photo: {
      //Store URLs
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  });

  return Product;
};
