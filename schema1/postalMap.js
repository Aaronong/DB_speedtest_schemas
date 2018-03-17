"use strict";

module.exports = function(sequelize, DataTypes) {
  // Driver table
  const PostalMap = sequelize.define("PostalMap", {
    postalDistrict: {
      type: DataTypes.STRING(2),
      allowNull: false,
      unique: true
    },
    postalSector: {
      type: DataTypes.STRING,
      allowNull: false
    },
    generalLocation: {
      type: DataTypes.STRING
    }
  });

  return PostalMap;
};
