"use strict";

module.exports = function(sequelize, DataTypes) {
  // Notification table
  const Notification = sequelize.define("Notification", {
    text: {
      type: DataTypes.STRING(512),
      allowNull: false
    }
  });

  return Notification;
};
