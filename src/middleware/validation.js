module.exports = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({
        returncode: "401",
        message: error.message,
      });
    }
    next();
  };
};
