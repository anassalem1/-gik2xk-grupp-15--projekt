const db = require("../models");
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage,
} = require("../helpers/responseHelper");

// RATING FUNCTIONS

async function create({ product_id, rating }) {
  try {
    const newRating = await db.rating.create({
      product_id: parseInt(product_id),
      rating: parseInt(rating),
    });
    return createResponseSuccess(newRating);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}
async function getAll() {
  try {
    const allRatings = await db.rating.findAll();
    console.log("ALLA RATINGS:", allRatings);
    // Om allt gick bra returneras alla produkter
    return createResponseSuccess(allRatings.map((rating) => rating));
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

module.exports = {
  create,
  getAll,
};
