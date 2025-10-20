const sequelize = require("../sequelize/index");
const UserModel = require("./users");
const TranslationModel = require("./translation");

const User = UserModel(sequelize);
const Translation = TranslationModel(sequelize);

module.exports = { sequelize, User, Translation };
