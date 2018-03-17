"use strict";

module.exports = function(sequelize, DataTypes) {
  // Customer table
  const Customer = sequelize.define(
    "Customer",
    {
      //Created on Admin end
      username: {
        type: DataTypes.STRING(32),
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      paymentMethod: {
        type: DataTypes.ENUM("Cash", "Invoice"),
        defaultValue: "Cash"
      },
      //Managed on customer end
      companyName: {
        type: DataTypes.STRING(64),
        defaultValue: "Non-business consumer"
      },
      contactName: {
        type: DataTypes.STRING(32)
      },
      contactNumber: {
        type: DataTypes.INTEGER,
        validate: {
          min: 0
        }
      },
      address: {
        type: DataTypes.STRING(128)
      },
      postalCode: {
        type: DataTypes.INTEGER,
        validate: {
          max: 830000,
          min: 10000
        }
      }
    },
    {
      paranoid: true
    }
  );

  Customer.associate = function(models) {
    Customer.hasMany(models.Order, {
      as: "Order",
      foreignKey: "customerId"
    });
  };

  return Customer;
};
