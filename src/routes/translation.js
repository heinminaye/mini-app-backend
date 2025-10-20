const express = require("express");
const { 
  setLanguage,
  getAllTranslations 
} = require("../services/translateService");

const router = express.Router();

router.post("/change", (req, res) => {
  const { lang = "en" } = req.body;
  
  if (!['en', 'sv'].includes(lang)) {
    return res.status(300).json({
      returncode: "400",
      message: "Unsupported language"
    });
  }
  
  setLanguage(lang);
  
  res.json({
    returncode: "200",
    message: `Language changed to ${lang}`,
    currentLanguage: lang,
    translations: getAllTranslations()
  });
});

router.get("/support", (req, res) => {
  res.json({
    returncode: "200",
    languages: [
      { 
        code: "en", 
        name: "English",
        flag: "https://storage.123fakturere.no/public/flags/GB.png"
      },
      { 
        code: "sv", 
        name: "Swedish",
        flag: "https://storage.123fakturere.no/public/flags/SE.png"
      }
    ]
  });
});

module.exports = router;