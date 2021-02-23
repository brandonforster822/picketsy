'use strict';

const user = require("./user");

module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    imgLink: DataTypes.STRING,
    category: DataTypes.STRING
  }, {});
  Listing.associate = function(models) {
    Listing.belongsTo(models.User, {foreignKey: 'userId'})
    Listing.hasMany(models.Review, {foreignKey: 'listingId', as: 'reviews'})
  };
  return Listing;
};