'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reviews', [
        {comment: 'nice this rules', rating: 5, userId: 2, listingId: 1, createdAt: new Date(), updatedAt: new Date()},
        {comment: 'i hate this it sucks', rating: 1, userId: 2, listingId: 2, createdAt: new Date(), updatedAt: new Date()},
        {comment: 'meh okay i guess', rating: 3, userId: 2, listingId: 3, createdAt: new Date(), updatedAt: new Date()},
        {comment: 'i bought my daughter this and she died the next day', rating: 0, userId: 3, listingId: 4, createdAt: new Date(), updatedAt: new Date()},
        {comment: 'my wife left me but this is cool', rating: 4, userId: 3, listingId: 4, createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Reviews', null, {});
  }
};
