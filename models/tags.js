"use strict";

module.exports = (sequelize, DataTypes) => {
  const Tags = sequelize.define("Tags", {
    tag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Tags.associate = function(models) {
    Tags.belongsToMany(models.Businesses, {
     through: 'TagsBusinesses',
     foreignKey: 'tagId',
     otherKey: 'businessId'
   });
 };

  return Tags;
};

