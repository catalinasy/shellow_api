"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {

const TagsBusinesses =  sequelize.define( 'TagsBusinesses',
    {
      TagId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      BusinessId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }
  );

  return TagsBusinesses;
};


