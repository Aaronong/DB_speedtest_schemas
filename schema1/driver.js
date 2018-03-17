"use strict";

module.exports = function(sequelize, DataTypes) {
  // Driver table
  const Driver = sequelize.define(
    "Driver",
    {
      username: {
        type: DataTypes.STRING(32),
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      //Managed on Driver end
      name: {
        type: DataTypes.STRING(32)
      },
      contactNumber: {
        type: DataTypes.INTEGER,
        validate: {
          min: 0
        }
      },
      carplate: {
        type: DataTypes.STRING(10)
      }
    },
    {
      paranoid: true
    }
  );

  Driver.associate = function(models) {
    Driver.hasMany(models.Order, {
      as: "Order",
      foreignKey: "driverId"
    });
    Driver.hasMany(models.PostalMap, {
      as: "PostalMap",
      foreignKey: "driverId"
    });
  };

  return Driver;
};
