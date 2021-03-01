'use strict';

const user = require("./user");

module.exports = (sequelize, DataTypes) => {
  const Listing = sequelize.define('Listing', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    imgLink: DataTypes.STRING,
    category: DataTypes.STRING,
    price: DataTypes.STRING
  }, {});

  Listing.createListing = async function ({ name, userId, description, imgLink, category, price}) {
    const listing = await Listing.create({
      name,
      userId,
      description,
      imgLink,
      category,
      price
    })
    return listing
  }

  Listing.associate = function(models) {
  };
  return Listing;
};