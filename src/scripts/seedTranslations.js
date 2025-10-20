const Translation = require("../models").Translation;

const translationsData = {
  "login.title": { en: "Login", sv: "Logga in" },
  "login.email_label": { en: "Email", sv: "E-post" },
  "login.email_placeholder": {
    en: "Enter your email",
    sv: "Ange din e-postadress",
  },
  "login.password_label": { en: "Password", sv: "Lösenord" },
  "login.password_placeholder": {
    en: "Enter your password",
    sv: "Ange ditt lösenord",
  },
  "login.button": { en: "Log In", sv: "Logga in" },
  "login.loading": { en: "Logging in...", sv: "Loggar in..." },
  "login.success": { en: "Login successful", sv: "Inloggning lyckades" },
  "login.error_invalid": {
    en: "Invalid email or password",
    sv: "Ogiltig e-post eller lösenord",
  },
  "login.error_required_email": { en: "Email is required", sv: "E-post krävs" },
  "login.error_required_password": {
    en: "Password is required",
    sv: "Lösenord krävs",
  },
  "login.error_min_password": {
    en: "Password must be at least 6 characters",
    sv: "Lösenordet måste vara minst 6 tecken",
  },
  "login.error_server": {
    en: "Server error, please try again later",
    sv: "Serverfel, försök igen senare",
  },
  "token.not_found": { en: "Token not found", sv: "Token hittades inte" },
  "token.expired": { en: "Token expired", sv: "Token har gått ut" },
  "token.invalid": { en: "Invalid token", sv: "Ogiltig token" },
};

async function seedTranslations() {
  try {
    console.log("Seeding translations...");
    const existingCount = await Translation.count();

    if (existingCount > 0) {
      console.log(
        `Translations already exist (${existingCount} records).`
      );
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
