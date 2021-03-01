'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Listings', [
        {name: 'Antique Chess Set', userId: 2, description: 'An antique chess set', imgLink: "https://cdn.shopify.com/s/files/1/1297/3303/products/house-of-hauteville-chess-set-and-board-combo-antique-white-and-brown-marble-21184552833_grande.jpg?v=1575932082", category: "Games", price:"99.99", createdAt: new Date(), updatedAt: new Date()},
        {name: 'Diamond Earrings', userId: 3, description: 'Cheap diamond earrings', imgLink: "https://target.scene7.com/is/image/Target/GUEST_a714f86e-0b34-4d27-83de-f9b291850712?wid=488&hei=488&fmt=pjpeg", category: "Jewelry", price: "199.99", createdAt: new Date(), updatedAt: new Date()},
        {name: 'Diamond Necklace', userId: 2, description: 'Cheap diamond necklace', imgLink: "https://30d01f9adcdd9ca8bb29-e7821b1789d66a252f67999ba68e5823.ssl.cf2.rackcdn.com/V-shaped-graduated-diamond-anniversary-necklace-gifts-in-950-Platinum-FDNK8068-NL-WG.jpg", category: "Jewelry", price: "299.99", createdAt: new Date(), updatedAt: new Date()},
        {name: 'Diamond Ring', userId: 2, description: 'Cheap diamond ring', imgLink: 'https://image.brilliantearth.com/media/base_product_center_diamond_images/6S/BE1D305_Claw%20Prong_Round_white_carat_2.jpg', category: "Jewelry", price: "399.99", createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Listings', null, {});
  }
};
