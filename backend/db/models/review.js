'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    comment: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    listingId: DataTypes.INTEGER
  }, {});

  Review.createReview = async function ({ comment, rating, userId, listingId }) {
    const review = await Review.create({ comment, rating, userId, listingId })
    return review
  }

  Review.associate = function(models) {
  };
  return Review;
};