'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Listings', [
        {name: 'Antique Chess Set', userId: 1, description: 'An antique chess set', imgLink: "https://cdn.shopify.com/s/files/1/1297/3303/products/house-of-hauteville-chess-set-and-board-combo-antique-white-and-brown-marble-21184552833_grande.jpg?v=1575932082", category: "Games", createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Listings', null, {});
  }
};
