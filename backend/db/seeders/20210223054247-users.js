'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Users', [
        {username: 'Demo-lition', email: 'demo@user.io', hashedPassword: '\x24326124313024704738736d735364583479704a74304261465242644f303041693546666f2f55784233594661596e41707749484e4d696149316c69'},
      ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
  }
};
