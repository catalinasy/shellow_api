"use strict";
const { Model, DataTypes } = require("sequelize");
const Tags = require("./Tags");

module.exports = (sequelize, DataTypes) => {
  const Businesses = sequelize.define("Businesses", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instagram: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    whatsapp: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    facebook: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    web: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Businesses.associate = function (models) {
    Businesses.belongsToMany(models.Tags, {
      through: "TagsBusinesses",
      foreignKey: "businessId",
      otherKey: "tagId",
    });
    Businesses.belongsTo(models.GeoData, {as: 'geoData'});
  };

  return Businesses;
};