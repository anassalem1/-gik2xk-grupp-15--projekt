module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: [2, 50],
        },
      },
      last_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: [2, 50],
        },
      },
      email: {
        type: DataTypes.STRING(200),
        allowNull: false,
        validate: {
          len: [4, 200],
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
          len: [8, 120],
        },
      },
      isAdmin: {
        type: DataTypes.BOOLEAN,
      },
      photoUrl: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
    },
    { underscored: true }
  );
};
