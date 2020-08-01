'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Businesses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Businesses.associate = function(models) {
        // Businesses.belongsToMany(models.Tags, {
        //   through: 'TagBusinesses',
        //   as: 'businesses',
        //   foreignKey: 'businessesId',
        //   otherKey: 'tagId'
        // });
      };
      
      // define association here
    }
  };
  Businesses.init({
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    instagram: DataTypes.STRING,
    whatsapp: DataTypes.NUMBER,
    facebook: DataTypes.STRING,
    web: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Businesses',
  });
  return Businesses;
};

