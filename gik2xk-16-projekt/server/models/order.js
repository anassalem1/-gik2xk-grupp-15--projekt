module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "order",
    {
      ordernummer: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      sum: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
    },
    { underscored: true }
  );
};
