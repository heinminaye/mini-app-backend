const Translation = require('../models').Translation;

let translationCache = {};

async function loadTranslations() {
  try {
    const translations = await Translation.findAll();
    translationCache = {};
    
    translations.forEach(item => {
      translationCache[item.key] = item.values;
    });
    
    console.log('Translations loaded from database');
  } catch (error) {
    console.error('Error loading translations:', error);
  }
}

async function translate(key, lang = "en") {
  if (translationCache[key]) {
    return translationCache[key][lang] || translationCache[key]["en"] || key;
  }

  try {
    const translation = await Translation.findByPk(key);
    if (translation) {
      translationCache[key] = translation.values;
      return translation.values[lang] || translation.values["en"] || key;
    }
    return key;
  } catch (error) {
    console.error('Translation error:', error);
    return key;
  }
}

module.exports = { translate, loadTranslations };