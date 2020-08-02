"use strict";
const Businesses = require("./Businesses");
const TagsBusinesses = require("./TagsBusinesses");

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Tags = sequelize.define("Tags", {
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Tags;
};

