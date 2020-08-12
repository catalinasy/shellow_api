"use strict";
const {Location} = require('../helpers')

module.exports = (sequelize, DataTypes) => {
  const GeoData = sequelize.define("GeoData", {
    shipping: { type: DataTypes.BOOLEAN, allowNull: false },
    showroom: { type: DataTypes.BOOLEAN, allowNull: false },
    prov: {
      type: DataTypes.ENUM(Location),
      allowNull: false,
    },
    location: { type: DataTypes.STRING, allowNull: true },
  });

  GeoData.associate = function (models) {
    GeoData.hasOne(models.Businesses, {foreignKey: "geoDataId"});
  };

  return GeoData;
};
