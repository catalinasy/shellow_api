"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("TagsBusinesses", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      TagId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Tags",
        },
      },
      BusinessId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Businesses"
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("TagsBusinesses");
  },
};
