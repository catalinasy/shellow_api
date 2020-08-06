"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {

const TagsBusinesses =  sequelize.define( 'TagsBusinesses',
    // {
    //   TagId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //   },
    //   BusinessId: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false,
    //   },
    // }
  );

  TagsBusinesses.associate = function(models) {
    TagsBusinesses.belongsTo(models.Businesses, { foreignKey: 'businessId' });
    TagsBusinesses.belongsTo(models.Tags, { foreignKey: 'tagId' });

 };

  return TagsBusinesses;
};


