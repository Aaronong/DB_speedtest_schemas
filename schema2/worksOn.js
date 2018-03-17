"use strict";

module.exports = function(sequelize, DataTypes) {
  // Admin table
  const WorksOn = sequelize.define("WorksOn", {
    StartDate: DataTypes.DATE,
    EndDate: DataTypes.DATE,
    ProjectName: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: "compositeIndex"
    },
    ProjectLocation: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: "compositeIndex"
    },
    // EmployeeId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //     unique: "compositeIndex",
    //     references: {
    //       model: 'Employee',
    //       key: 'id',
    //     },
    // },
  }, {
    timestamps: false
});
  return WorksOn;
};
