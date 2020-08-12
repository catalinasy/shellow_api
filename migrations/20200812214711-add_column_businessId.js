'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
        return Promise.all([
          queryInterface.addColumn('Businesses', 'geoDataId',
            {
              type: Sequelize.INTEGER,
              references: {
                model: 'GeoData',
              },
              onUpdate: 'CASCADE',
              onDelete: 'SET NULL',
            }),
        ]);
      },

      down: (queryInterface, Sequelize) => {
        return Promise.all([
          queryInterface.removeColumn('Businesses', 'geoDataId'),
        ]);
      }
    };
