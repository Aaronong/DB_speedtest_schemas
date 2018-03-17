"use strict";

module.exports = function(sequelize, DataTypes) {
  // Admin table
  const Admin = sequelize.define("Admin", {
    username: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  return Admin;
};
