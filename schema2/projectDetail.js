"use strict";

module.exports = function(sequelize, DataTypes) {
  // Admin table
  const ProjectDetail = sequelize.define("ProjectDetail", {
    StartDate: DataTypes.DATE,
    EndDate: DataTypes.DATE,
    Price: {
      type: DataTypes.DECIMAL(10, 2),
      validate: { min: 0 },
      allowNull: false
    },
    ManHours: {
      type: DataTypes.INTEGER,
      validate: { min: 0},
      allowNull: false
    },
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
  }, {
    timestamps: false
});

    //   ProjectDetail.belongsTo(models.Project, {
    //   onDelete: "CASCADE",
    //   foreignKey: {
    //     name: "ProjectName",
    //     allowNull: false
    //   }
    // });

  return ProjectDetail;
};
