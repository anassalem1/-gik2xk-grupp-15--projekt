const db = require("../models");
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage,
} = require("../helpers/responseHelper");
const validate = require("validate.js");

const constraints = {
  title: {
    length: {
      minimum: 5,
      maximum: 50,
      tooShort: "^Titeln måste vara minst %{count} tecken lång.",
      tooLong: "^Titeln får inte vara längre än %{count} tecken lång.",
    },
  },
};

async function getById(id) {
  try {
    const product = await db.product.findOne({
      where: { id },
      include: [
        {
          model: db.rating,
          attributes: ["rating", "createdAt"],
        },
      ],
    });
    return createResponseSuccess(_formatProduct(product));
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function getAll() {
  try {
    const allProducts = await db.product.findAll({ include: [db.rating] });
    // Om allt gick bra returneras alla produkter
    return createResponseSuccess(
      allProducts.map((product) => _formatProduct(product))
    );
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function create(product) {
  const invalidData = validate(product, constraints);
  if (invalidData) {
    return createResponseError(422, invalidData);
  }
  try {
    const newProduct = await db.product.create(product);
    return createResponseSuccess(newProduct);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function update(product, id) {
  const invalidData = validate(product, constraints);
  if (!id) {
    return createResponseError(422, "Id är obligatoriskt");
  }
  if (invalidData) {
    return createResponseError(422, invalidData);
  }
  try {
    const existingProduct = await db.product.findOne({ where: { id } });
    if (!existingProduct) {
      return createResponseError(404, "Hittade ingen produkt att uppdatera");
    }
    await db.product.update(product, { where: { id } });
    return createResponseMessage(200, "Inlägget uppdaterades");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function destroy(id) {
  if (!id) {
    return createResponseError(422, "Id är obligatoriskt");
  }
  try {
    await db.product.destroy({ where: { id } });
    return createResponseMessage(200, "Produkten raderades");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

//** */

function _formatProduct(product) {
  const cleanProduct = {
    id: product.id,
    title: product.title,
    description: product.description,
    price: product.price,
    imageUrl: product.imageUrl,
    createdAt: product.createdAt,
    updatedAt: product.updatedAt,
    ratings: [],
  };

  if (product.ratings) {
    product.ratings.map((rating) => {
      return (cleanProduct.ratings = [rating, ...cleanProduct.ratings]);
    });
    return cleanProduct;
  }
}

module.exports = {
  getById,
  getAll,
  create,
  update,
  destroy,
};
