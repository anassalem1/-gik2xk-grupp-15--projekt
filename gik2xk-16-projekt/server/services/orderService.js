const db = require("../models");
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage,
} = require("../helpers/responseHelper");

async function getById(id) {
  try {
    const order = await db.order.findOne({
      where: { id },
    });
    return createResponseSuccess(_formatOrder(order));
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function getAll() {
  try {
    const allOrders = await db.order.findAll();
    // Om allt gick bra returneras alla produkter
    return createResponseSuccess(allOrders.map((order) => _formatOrder(order)));
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function create(order) {
  try {
    const newOrder = await db.order.create(order);
    return createResponseSuccess(newOrder);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function update(order, id) {
  if (!id) {
    return createResponseError(422, "Id är obligatoriskt");
  }
  try {
    const existingOrder = await db.order.findOne({ where: { id } });
    if (!existingOrder) {
      return createResponseError(404, "Hittade ingen produkt att uppdatera");
    }
    await db.order.update(order, { where: { id } });
    return createResponseMessage(200, "Inlägget uppdaterades");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

//** */

function _formatOrder(order) {
  const cleanProduct = {
    ordernummer: order.ordernummer,
    items: order.items,
    sum: order.sum,
    date: order.date,
    status: order.status,
    createdAt: order.createdAt,
    updatedAt: order.updatedAt,
  };

  return cleanProduct;
}

module.exports = {
  getById,
  getAll,
  create,
  update,
};
