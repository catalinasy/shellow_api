'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TagBusinesses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // TagBusinesses.belongsToMany(models.Tags, {
      //   through: 'Tags',
      //   as: 'Tags',
      //   foreignKey: 'TagId',
      // });
      // TagBusinesses.belongsToMany(models.Businesses, {
      //   through: 'Businesses',
      //   as: 'Businesses',
      //   foreignKey: 'BusinessId',
      // });
    }
  };
  TagBusinesses.init({
    TagId: DataTypes.INTEGER,
    BusinessId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'TagBusinesses',
  });
  return TagBusinesses;
};