const db = require("../models");
const {
  createResponseSuccess,
  createResponseError,
  createResponseMessage,
} = require("../helpers/responseHelper");
const validate = require("validate.js");

const constraints = {
  first_name: {
    length: {
      minimum: 2,
      maximum: 50,
      tooShort: "^Förnamn måste vara minst %{count} tecken lång.",
      tooLong: "^Förnamn får inte vara längre än %{count} tecken lång.",
    },
  },
  last_name: {
    length: {
      minimum: 2,
      maximum: 50,
      tooShort: "^Efteramn måste vara minst %{count} tecken lång.",
      tooLong: "^Efteramn får inte vara längre än %{count} tecken lång.",
    },
  },
  email: {
    length: {
      minimum: 4,
      maximum: 200,
      tooShort: "^E-post måste vara minst %{count} tecken lång.",
      tooLong: "^E-post får inte vara längre än %{count} tecken lång.",
    },
  },
  password: {
    length: {
      minimum: 8,
      maximum: 120,
      tooShort: "^Lösenord måste vara minst %{count} tecken lång.",
      tooLong: "^Lösenord får inte vara längre än %{count} tecken lång.",
    },
  },
};

async function getAll() {
  try {
    const allUsers = await db.user.findAll({ include: [db.order] });
    // Om allt gick bra returneras alla produkter
    return createResponseSuccess(allUsers.map((user) => user));
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

/* async function getById(id) {
  try {
    const user = await db.user.findOne({
      where: { id },
      include: [db.order],
    });
    return createResponseSuccess(user);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
} */

async function getByEmail(email) {
  try {
    const user = await db.user.findOne({
      where: { email: email },
      include: [db.order],
    });
    return createResponseSuccess(user);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function create(user) {
  const invalidData = validate(user, constraints);
  if (invalidData) {
    return createResponseError(422, invalidData);
  }
  try {
    const newUser = await db.user.create(user);
    return createResponseSuccess(newUser);
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function update(user, id) {
  const invalidData = validate(user, constraints);
  if (!id) {
    return createResponseError(422, "Id är obligatoriskt");
  }
  if (invalidData) {
    return createResponseError(422, invalidData);
  }
  try {
    const existingUser = await db.user.findOne({ where: { id } });
    if (!existingUser) {
      return createResponseError(404, "Hittade ingen användare att uppdatera");
    }
    await db.user.update(user, { where: { id } });
    return createResponseMessage(200, "Användare uppdaterades");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

async function destroy(id) {
  if (!id) {
    return createResponseError(422, "Id är obligatoriskt");
  }
  try {
    await db.user.destroy({ where: { id } });
    return createResponseMessage(200, "Användare raderades");
  } catch (error) {
    return createResponseError(error.status, error.message);
  }
}

module.exports = {
  getAll,
  getByEmail,
  create,
  update,
  destroy,
};
