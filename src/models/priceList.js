const { DataTypes } = require("sequelize");

const Pricelist = (sequelize) => {
  return sequelize.define("Pricelist", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    articleNo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    productService: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    inPrice: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: true,
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    inStock: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};

module.exports = Pricelist;
