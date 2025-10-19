const sequelize = require("../sequelize/index");
const UserModel = require("./users");

const User = UserModel(sequelize);

module.exports = { sequelize, User };
