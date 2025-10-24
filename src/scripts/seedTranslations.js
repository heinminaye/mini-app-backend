const Translation = require("../models").Translation;

const translationsData = {
  // Login
  "login.title": { en: "Log In", sv: "Logga in" },
  "login.email_label": {
    en: "Enter your email address",
    sv: "Ange din e-postadress",
  },
  "login.email_placeholder": {
    en: "Email address",
    sv: "E-postadress",
  },
  "login.password_label": {
    en: "Enter your password",
    sv: "Ange ditt lösenord",
  },
  "login.password_placeholder": {
    en: "Password",
    sv: "Lösenord",
  },
  "login.button": { en: "Log In", sv: "Logga in" },
  "login.loading": { en: "Logging in...", sv: "Loggar in..." },
  "login.success": { en: "Login successful", sv: "Inloggning lyckades" },
  "login.error_invalid": {
    en: "Enter a valid email",
    sv: "Ange en giltig e-postadress",
  },
  "login.error_required_email": { en: "Email is required", sv: "E-post krävs" },
  "login.error_required_password": {
    en: "Password is required",
    sv: "Lösenord krävs",
  },
  "forgot_password.title": {
    en: "Forgotten password?",
    sv: "Glömt lösenord?",
  },
  "register.button": {
    en: "Register",
    sv: "Registrera",
  },
  "login.error_server": {
    en: "Server error, please try again later",
    sv: "Serverfel, försök igen senare",
  },
  "login.accept_terms_1": {
    en: "I accept the",
    sv: "Jag accepterar",
  },
  "login.terms_link": {
    en: "Terms & Conditions",
    sv: "Allmänna villkor",
  },
  "login.error_required_terms": {
    en: "You must accept the terms and conditions",
    sv: "Du måste acceptera villkoren",
  },
  "login.footer_rights": {
    en: "All rights reserved.",
    sv: "Alla rättigheter förbehållna.",
  },
  "navbar.home": {
    en: "Home",
    sv: "Hem",
  },
  "navbar.order": {
    en: "Order",
    sv: "Beställning",
  },
  "navbar.customers": {
    en: "Our Customers",
    sv: "Våra kunder",
  },
  "navbar.about": {
    en: "About Us",
    sv: "Om oss",
  },
  "navbar.contact": {
    en: "Contact Us",
    sv: "Kontakta oss",
  },
  // Totken
  "token.not_found": { en: "Token not found", sv: "Token hittades inte" },
  "token.expired": { en: "Token expired", sv: "Token har gått ut" },
  "token.invalid": { en: "Invalid token", sv: "Ogiltig token" },
  // Terms
  "terms.success": {
    en: "Terms fetched successfully",
    sv: "Villkor hämtades framgångsrikt",
  },
  "terms.error": {
    en: "Failed to fetch terms",
    sv: "Misslyckades att hämta villkor",
  },
  "terms.closeAndGoBack": {
    en: "Close and Go Back",
    sv: "Stäng och gå tillbaka",
  },
  // Menu
  "menu.header": {
    en: "Menu",
    sv: "Meny",
  },
  "menu.dashboard": { en: "Dashboard", sv: "Instrumentbräda" },
  "menu.invoices": { en: "Invoices", sv: "Fakturor" },
  "menu.customers": { en: "Customers", sv: "Kunder" },
  "menu.products": { en: "Products", sv: "Produkter" },
  "menu.priceList": { en: "Price List", sv: "Prislista" },
  "menu.reports": { en: "Reports", sv: "Rapporter" },
  "menu.settings": { en: "Settings", sv: "Inställningar" },
  "menu.logout": { en: "Logout", sv: "Logga ut" },
  // Pricelist
  "pricelist.title": { en: "Price List", sv: "Prislista" },

  "pricelist.button_add": { en: "New Product", sv: "Lägg till" },
  "pricelist.button_print": { en: "Print List", sv: "Skriv ut" },
  "pricelist.button_advance": { en: "Advance Mode", sv: "Skriv ut" },
  "pricelist.search_article": {
    en: "Search Article No...",
    sv: "Sök artikelnummer...",
  },
  "pricelist.search_product": {
    en: "Search Product...",
    sv: "Sök produkt...",
  },
  "pricelist.button_edit": { en: "Edit", sv: "Redigera" },
  "pricelist.button_delete": { en: "Delete", sv: "Radera" },
  "pricelist.button_save": { en: "Save", sv: "Spara" },
  "pricelist.button_cancel": { en: "Cancel", sv: "Avbryt" },
  "pricelist.button_saving": { en: "Saving...", sv: "Sparar..." },
  "pricelist.button_editing": { en: "Editing...", sv: "Redigerar..." },
  "pricelist.confirm_delete": {
    en: "Do you want to delete this item with ID",
    sv: "Vill du ta bort den här artikeln med ID",
  },

  "pricelist.column_articleNo": { en: "Article No", sv: "Artikelnummer" },
  "pricelist.column_productService": {
    en: "Product / Service",
    sv: "Produkt / Tjänst",
  },
  "pricelist.column_inPrice": { en: "In Price", sv: "Inköpspris" },
  "pricelist.column_price": { en: "Price", sv: "Pris" },
  "pricelist.column_unit": { en: "Unit", sv: "Enhet" },
  "pricelist.column_inStock": { en: "In Stock", sv: "I lager" },
  "pricelist.column_description": { en: "Description", sv: "Beskrivning" },
  "pricelist.column_actions": { en: "Actions", sv: "Åtgärder" },

  "pricelist.form_add_title": {
    en: "Add New Item",
    sv: "Lägg till ny artikel",
  },
  "pricelist.form_edit_title": { en: "Edit Item", sv: "Redigera artikel" },
  "pricelist.error_required_articleNo": {
    en: "Article number is required",
    sv: "Artikelnummer krävs",
  },
  "pricelist.error_required_productService": {
    en: "Product/Service is required",
    sv: "Produkt/Tjänst krävs",
  },

  "pricelist.fetch_success": {
    en: "Price list fetched successfully",
    sv: "Prislista hämtades framgångsrikt",
  },
  "pricelist.error_fetch": {
    en: "Failed to fetch price list",
    sv: "Misslyckades att hämta prislista",
  },
  "pricelist.update_success": {
    en: "Price list updated successfully",
    sv: "Prislista uppdaterades framgångsrikt",
  },
  "pricelist.create_success": {
    en: "New item added to price list",
    sv: "Ny artikel lades till i prislistan",
  },
  "pricelist.delete_success": {
    en: "Item deleted from price list",
    sv: "Artikel raderades från prislistan",
  },
  "pricelist.error_not_found": {
    en: "Price list item not found",
    sv: "Artikel hittades inte i prislistan",
  },
  "pricelist.error_server": {
    en: "Server error while processing price list",
    sv: "Serverfel vid bearbetning av prislista",
  },
  "pricelist.error_duplicate_articleNo": {
    en: "Article number already exists",
    sv: "Artikelnummer finns redan",
  },
};

async function seedTranslations() {
  try {
    console.log("Seeding translations...");
    const existingCount = await Translation.count();

    if (existingCount > 0) {
      console.log(`Translations already exist (${existingCount} records).`);
      return;
    }

    console.log("Seeding translations...");
    for (const [key, values] of Object.entries(translationsData)) {
      await Translation.upsert({
        key: key,
        values: values,
      });
    }

    console.log("Translations seeded successfully");
  } catch (error) {
    console.error("Error seeding translations:", error);
  }
}

module.exports = seedTranslations;
