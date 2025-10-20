const express = require("express");
const { Terms } = require("../models");
const { translate } = require("../services/translateService");

const router = express.Router();

router.get("/", async (req, res) => {
  const lang = req.headers["accept-language"] || "en";
  try {
    const terms = await Terms.findAll({
      order: [["order_index", "ASC"]],
      attributes: ["section_key", `content_${lang}`, "order_index"],
    });

    const termsData = {};
    terms.forEach((term) => {
      termsData[term.section_key] = term[`content_${lang}`];
    });

    res.json({
      returncode: "200",
      message: await translate("terms.success", lang),
      terms: termsData,
    });
  } catch (error) {
    console.error("Error fetching terms:", error);
    res.status(300).json({
      returncode: "500",
      message: await translate("terms.error", lang),
    });
  }
});

module.exports = router;
