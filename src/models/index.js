const sequelize = require("../sequelize/index");
const UserModel = require("./users");
const TranslationModel = require("./translation");
const TermsModel = require("./terms");

const User = UserModel(sequelize);
const Translation = TranslationModel(sequelize);
const Terms = TermsModel(sequelize);

module.exports = { sequelize, User, Translation, Terms };
