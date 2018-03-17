"use strict";

module.exports = function(sequelize, DataTypes) {
  // Admin table
  const Project = sequelize.define("Project", {
    Name: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: "compositeIndex"
    },
    Location: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: "compositeIndex"
    },
    Priority: {
      type: DataTypes.INTEGER,
      validate: { min: 0 },
      allowNull: false
    },
  }, {
    timestamps: false
  });

  Project.associate = function(models) {
    Project.hasOne(models.ProjectDetail, {
      foreignKey: "id",
      scope: {
        Location: { $col: 'ProjectDetail.ProjectLocation'},
        Name: { $col: 'ProjectDetail.ProjectName'}
      }
    });
    Project.hasMany(models.WorksOn, {
      foreignKey: "id",
      scope: {
        Location: { $col: 'WorksOn.ProjectLocation'},
        Name: { $col: 'WorksOn.ProjectName'}
      }
    });
  };



  return Project;
};
