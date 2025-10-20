const { DataTypes } = require('sequelize');

const Terms = (sequelize) => {
  return sequelize.define('Terms', {
    section_key: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    content_en: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    content_sv: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    order_index: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false
  });
};

module.exports = Terms;