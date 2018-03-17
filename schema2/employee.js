"use strict";

module.exports = function(sequelize, DataTypes) {
  // Admin table
  const Employee = sequelize.define("Employee", {
    EmploymentDate: DataTypes.DATE,
    FirstName: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    Location: {
      type: DataTypes.STRING(64),
      allowNull: false,
      unique: "compositeIndex"
    },
    SSN: {
      type: DataTypes.INTEGER,
      validate: { min: 0 },
      allowNull: false,
      unique: true
    }
  }, {
    timestamps: false
  });

  Employee.associate = function(models) {
    Employee.belongsTo(models.Employee, { foreignKey: 'WorksFor'});
    Employee.hasMany(models.WorksOn, 
      { 
        foreignKey: {
          name:'EmployeeId',
          unique: 'compositeIndex'
        }
      });
  };



  return Employee;
};
