const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const Joi = require("joi");
const validation = require("../middleware/validation");
const { translate } = require("../services/translateService");

const router = express.Router();

const loginSchema = Joi.object({
  email: Joi.string().email({ tlds: { allow: false } }).required().label("error_required_email"),
  password: Joi.string().min(6).required().label("error_required_password")
});

router.post("/login", validation(loginSchema, "login"), async (req, res) => {
  const lang = req.headers["accept-language"] || "en";
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(300).json({
        returncode: "401",
        message: await translate("login.error_invalid", lang)
      });
    }

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(300).json({
        returncode: "401",
        message: await translate("login.error_invalid", lang)
      });
    }

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.json({
      returncode: "200",
      message: await translate("login.success", lang),
      token
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      returncode: "401",
      message: await translate("login.error_server", lang)
    });
  }
});

module.exports = router;
