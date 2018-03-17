"use strict";

module.exports = function(sequelize, DataTypes) {
  // CustomerStorefront table
  const CustomerStorefront = sequelize.define("CustomerStorefront", {
    displayPrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    }
  });

  CustomerStorefront.associate = function(models) {
    // Using additional options like CASCADE etc for demonstration
    // Can also simply do Task.belongsTo(models.User);
    CustomerStorefront.belongsTo(models.Customer, {
      onDelete: "CASCADE",
      foreignKey: {
        name: "customerId",
        allowNull: false
      }
    });

    CustomerStorefront.belongsTo(models.Product, {
      onDelete: "CASCADE",
      foreignKey: {
        name: "productId",
        allowNull: false
      }
    });
  };

  return CustomerStorefront;
};
