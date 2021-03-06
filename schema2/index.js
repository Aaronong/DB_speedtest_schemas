"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var dbConnString = require("../dbConnString.js");

const sequelize = new Sequelize(
  `${dbConnString}/schema2`,
  { logging: false }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

var db = {};

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return file.indexOf(".") !== 0 && file !== "index.js";
  })
  .forEach(function(file) {
    var model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize.sync().then(function() {
  console.log("Database has been synchronized")
});

module.exports = db;
