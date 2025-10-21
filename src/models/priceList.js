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
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    inStock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
};

module.exports = Pricelist;
