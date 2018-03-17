"use strict";

module.exports = function(sequelize, DataTypes) {
  // Product table
  const ProductCategory = sequelize.define("ProductCategory", {
    category: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: true
    }
  });

  return ProductCategory;
};
