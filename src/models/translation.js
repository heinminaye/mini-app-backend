const { DataTypes } = require("sequelize");

const Translation = (sequelize) => {
  return sequelize.define(
    "Translation",
    {
      key: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      values: {
        type: DataTypes.JSON,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};

module.exports = Translation;
