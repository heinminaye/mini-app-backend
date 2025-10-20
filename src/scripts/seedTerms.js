const Terms = require("../models").Terms;

const termsData = [
  {
    section_key: "title",
    content_en: "Terms & Conditions",
    content_sv: "Allmänna villkor",
    order_index: 1
  },
  {
    section_key: "last_updated",
    content_en: "Last updated: 2024",
    content_sv: "Senast uppdaterad: 2024",
    order_index: 2
  },
  {
    section_key: "introduction",
    content_en: "Welcome to 123Fakturera. By using our services, you agree to these terms. Please read them carefully.",
    content_sv: "Välkommen till 123Fakturera. Genom att använda våra tjänster godkänner du dessa villkor. Vänligen läs dem noggrant.",
    order_index: 3
  },
  {
    section_key: "services",
    content_en: "Our invoicing services help you create, manage, and send invoices efficiently. We strive to provide accurate and reliable services.",
    content_sv: "Våra faktureringstjänster hjälper dig att skapa, hantera och skicka fakturor effektivt. Vi strävar efter att tillhandahålla noggranna och pålitliga tjänster.",
    order_index: 4
  },
  {
    section_key: "user_responsibilities",
    content_en: "You are responsible for maintaining the confidentiality of your account and ensuring the accuracy of the information you provide.",
    content_sv: "Du är ansvarig för att upprätthålla konfidentialiteten för ditt konto och säkerställa riktigheten av den information du lämnar.",
    order_index: 5
  },
  {
    section_key: "payments",
    content_en: "All payments must be made according to the invoice terms. Late payments may incur additional fees as specified in the invoice.",
    content_sv: "Alla betalningar måste göras enligt fakturavillkoren. Försenade betalningar kan medföra ytterligare avgifter enligt vad som anges på fakturan.",
    order_index: 6
  },
  {
    section_key: "liability",
    content_en: "We are not liable for any indirect damages resulting from the use of our services. Our liability is limited to the amount paid for the services.",
    content_sv: "Vi är inte ansvariga för några indirekta skador som uppstår från användningen av våra tjänster. Vårt ansvar är begränsat till det belopp som betalats för tjänsterna.",
    order_index: 7
  },
  {
    section_key: "termination",
    content_en: "We reserve the right to terminate or suspend access to our services for violation of these terms.",
    content_sv: "Vi förbehåller oss rätten att avsluta eller avbryta tillgång till våra tjänster vid överträdelse av dessa villkor.",
    order_index: 8
  },
  {
    section_key: "changes",
    content_en: "We may update these terms from time to time. Continued use of our services after changes constitutes acceptance of the new terms.",
    content_sv: "Vi kan uppdatera dessa villkor då och då. Fortsatt användning av våra tjänster efter ändringar innebär godkännande av de nya villkoren.",
    order_index: 9
  },
  {
    section_key: "contact",
    content_en: "If you have any questions about these terms, please contact us at support@123fakturera.se",
    content_sv: "Om du har några frågor om dessa villkor, vänligen kontakta oss på support@123fakturera.se",
    order_index: 10
  }
];

async function seedTerms() {
  try {
    console.log("Checking if terms need seeding...");
    const existingCount = await Terms.count();

    if (existingCount > 0) {
      console.log(`Terms already exist (${existingCount} records), skipping seed.`);
      return;
    }

    console.log("No terms found, seeding...");
    
    for (const term of termsData) {
      await Terms.upsert({
        section_key: term.section_key,
        content_en: term.content_en,
        content_sv: term.content_sv,
        order_index: term.order_index
      });
    }

    console.log("Terms seeded successfully");
  } catch (error) {
    console.error("Error seeding terms:", error);
  }
}

module.exports = seedTerms;