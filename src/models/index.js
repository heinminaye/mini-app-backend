const sequelize = require("../sequelize/index");
const UserModel = require("./users");
const TranslationModel = require("./translation");
const TermsModel = require("./terms");
const PricelistModel = require("./priceList");

const User = UserModel(sequelize);
const Translation = TranslationModel(sequelize);
const Terms = TermsModel(sequelize);
const Pricelist = PricelistModel(sequelize);

module.exports = { sequelize, User, Translation, Terms, Pricelist };
