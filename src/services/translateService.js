const Translation = require('../models').Translation;

let allTranslations = {};
let currentLang = 'en';

async function loadAllTranslations() {
  try {
    const translations = await Translation.findAll();
    allTranslations = {};
    
    translations.forEach(item => {
      allTranslations[item.key] = item.values;
    });
    
    console.log('All translations loaded from database');
  } catch (error) {
    console.error('Error loading translations:', error);
  }
}

function translate(key, lang = currentLang) {
  const translation = allTranslations[key];
  if (translation) {
    return translation[lang] || translation['en'] || key;
  }
  return key;
}

function setLanguage(lang) {
  currentLang = lang;
  console.log(`Language changed to: ${lang}`);
}

function getAllTranslations(lang = currentLang) {
  const result = {};
  for (const [key, values] of Object.entries(allTranslations)) {
    result[key] = values[lang] || values['en'] || key;
  }
  return result;
}

module.exports = { 
  translate, 
  loadAllTranslations, 
  setLanguage,
  getAllTranslations 
};