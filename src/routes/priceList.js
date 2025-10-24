const express = require("express");
const { Pricelist } = require("../models");
const Joi = require("joi");
const tokenCheck = require("../middleware/tokenCheck");
const validation = require("../middleware/validation");
const { translate } = require("../services/translateService");
const { Op } = require("sequelize");

const router = express.Router();

const pricelistSchema = Joi.object({
  articleNo: Joi.string().required().label("error_required_articleNo"),
  productService: Joi.string()
    .required()
    .label("error_required_productService"),
  inPrice: Joi.number().allow(null),
  price: Joi.number().allow(null),
  unit: Joi.string().allow(null, ""),
  inStock: Joi.number().integer().allow(null),
  description: Joi.string().allow(null, ""),
});

router.get("/", tokenCheck, async (req, res) => {
  const lang = req.headers["accept-language"] || "en";
  const { articleSearch, productSearch } = req.query;

  try {
    const where = {};

    if (articleSearch && productSearch) {
      where[Op.and] = [
        { articleNo: { [Op.like]: `%${articleSearch}%` } },
        { productService: { [Op.like]: `%${productSearch}%` } },
      ];
    } else if (articleSearch) {
      where.articleNo = { [Op.like]: `%${articleSearch}%` };
    } else if (productSearch) {
      where.productService = { [Op.like]: `%${productSearch}%` };
    }

    const items = await Pricelist.findAll({
      where,
      order: [["id", "ASC"]],
    });

    res.json({
      returncode: "200",
      message: await translate("pricelist.fetch_success", lang),
      data: items,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      returncode: "500",
      message: await translate("pricelist.error_fetch", lang),
    });
  }
});

router.post(
  "/",
  tokenCheck,
  validation(pricelistSchema, "pricelist"),
  async (req, res) => {
    const lang = req.headers["accept-language"] || "en";
    try {
      const exists = await Pricelist.findOne({
        where: { articleNo: req.body.articleNo },
      });
      if (exists) {
        return res.status(400).json({
          returncode: "401",
          message: await translate("pricelist.error_duplicate_articleNo", lang),
        });
      }

      const newItem = await Pricelist.create(req.body);
      res.json({
        returncode: "200",
        message: await translate("pricelist.create_success", lang),
        data: newItem,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        returncode: "500",
        message: await translate("pricelist.error_server", lang),
      });
    }
  }
);

router.put(
  "/:id",
  tokenCheck,
  validation(pricelistSchema, "pricelist"),
  async (req, res) => {
    const lang = req.headers["accept-language"] || "en";
    try {
      const item = await Pricelist.findByPk(req.params.id);
      if (!item) {
        return res.status(404).json({
          returncode: "401",
          message: await translate("pricelist.error_not_found", lang),
        });
      }

      const duplicate = await Pricelist.findOne({
        where: {
          articleNo: req.body.articleNo,
          id: { [Op.ne]: req.params.id },
        },
      });
      if (duplicate) {
        return res.status(400).json({
          returncode: "401",
          message: await translate("pricelist.error_duplicate_articleNo", lang),
        });
      }

      await item.update(req.body);
      res.json({
        returncode: "200",
        message: await translate("pricelist.update_success", lang),
        data: item,
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({
        returncode: "500",
        message: await translate("pricelist.error_server", lang),
      });
    }
  }
);

router.delete("/:id", tokenCheck, async (req, res) => {
  const lang = req.headers["accept-language"] || "en";
  try {
    const item = await Pricelist.findByPk(req.params.id);

    if (!item) {
      return res.status(300).json({
        returncode: "401",
        message: await translate("pricelist.error_not_found", lang),
      });
    }

    await item.destroy();

    res.json({
      returncode: "200",
      message: await translate("pricelist.delete_success", lang),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      returncode: "500",
      message: await translate("pricelist.error_server", lang),
    });
  }
});

module.exports = router;
