'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Tags.associate = function(models) {
        Tags.belongsToMany(models.Business, {
          through: 'TagBusiness',
          as: 'tags',
          foreignKey: 'tagId',
          otherKey: 'businessId'
        });
      };
    }
  };
  Tags.init({
    tag: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tags',
  });
  return Tags;
};

