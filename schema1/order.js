"use strict";

module.exports = function(sequelize, DataTypes) {
  // Order table
  const Order = sequelize.define(
    "Order",
    {
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      postalCode: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          max: 830000,
          min: 10000
        }
      },
      status: {
        type: DataTypes.ENUM(
          "Placed",
          "Processed",
          "Collected",
          "Delivered",
          "Paid",
          "Cancelled"
        ),
        allowNull: false,
        defaultValue: "Placed"
      },
      contactNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          max: 99999999,
          min: 10000000
        }
      },
      inventory: {
        //https://www.compose.com/articles/is-postgresql-your-next-json-database/
        type: DataTypes.STRING,
        // list of products { name, category, unit_price, quantity }
        allowNull: false
      },
      isAccounted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      isPrinted: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      comments: {
        type: DataTypes.STRING
      }
    },
    {
      paranoid: true
    }
  );

  return Order;
};
