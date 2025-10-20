const { translate } = require("../services/translateService");

module.exports = (schema, translationPrefix = "") => {
  return async (req, res, next) => {
    const lang = req.headers["accept-language"] || "en";
    const { error } = schema.validate(req.body);
    if (error) {
      const key = error.details[0].context.label;
      const fullKey = translationPrefix ? `${translationPrefix}.${key}` : key;
      const message = await translate(fullKey, lang) || error.message;
      return res.status(300).json({
        returncode: "401",
        message: message,
      });
    }
    next();
  };
};
