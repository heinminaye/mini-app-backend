const Pricelist  = require("../models").Pricelist;

const pricelistData = [
  {
    articleNo: "A1001",
    productService: "Website Design",
    inPrice: 200.00,
    price: 500.00,
    unit: "service",
    inStock: 10,
    description: "Professional website design service for businesses.",
  },
  {
    articleNo: "A1002",
    productService: "Logo Design",
    inPrice: 50.00,
    price: 150.00,
    unit: "service",
    inStock: 25,
    description: "Custom logo design with up to three revisions.",
  },
  {
    articleNo: "A1003",
    productService: "Hosting Plan (1 Year)",
    inPrice: 30.00,
    price: 80.00,
    unit: "year",
    inStock: 50,
    description: "Annual hosting plan with 99.9% uptime guarantee.",
  },
  {
    articleNo: "A1004",
    productService: "Domain Registration",
    inPrice: 10.00,
    price: 20.00,
    unit: "domain",
    inStock: 100,
    description: "Domain registration for one year (.com, .net, .org).",
  },
  {
    articleNo: "A1005",
    productService: "SEO Optimization",
    inPrice: 80.00,
    price: 250.00,
    unit: "service",
    inStock: 15,
    description: "Improve website visibility and ranking on search engines.",
  },
  {
    articleNo: "A1006",
    productService: "Social Media Management",
    inPrice: 120.00,
    price: 300.00,
    unit: "month",
    inStock: 20,
    description: "Monthly package for managing and growing social presence.",
  },
  {
    articleNo: "A1007",
    productService: "Email Hosting",
    inPrice: 25.00,
    price: 60.00,
    unit: "year",
    inStock: 40,
    description: "Secure business email hosting plan for one year.",
  },
  {
    articleNo: "A1008",
    productService: "E-commerce Setup",
    inPrice: 350.00,
    price: 800.00,
    unit: "project",
    inStock: 5,
    description: "Full e-commerce setup including payment gateway integration.",
  },
  {
    articleNo: "A1009",
    productService: "Graphic Design Package",
    inPrice: 100.00,
    price: 250.00,
    unit: "package",
    inStock: 12,
    description: "Bundle of poster, flyer, and social media designs.",
  },
  {
    articleNo: "A1010",
    productService: "Mobile App Development",
    inPrice: 500.00,
    price: 1500.00,
    unit: "project",
    inStock: 3,
    description: "Custom iOS and Android app development.",
  },
  {
    articleNo: "A1011",
    productService: "Maintenance Plan (Monthly)",
    inPrice: 40.00,
    price: 100.00,
    unit: "month",
    inStock: 25,
    description: "Ongoing website updates and support per month.",
  },
  {
    articleNo: "A1012",
    productService: "Content Writing",
    inPrice: 15.00,
    price: 40.00,
    unit: "article",
    inStock: 100,
    description: "SEO-friendly content writing service.",
  },
  {
    articleNo: "A1013",
    productService: "Cloud Storage Plan",
    inPrice: 20.00,
    price: 60.00,
    unit: "year",
    inStock: 70,
    description: "Secure cloud storage plan with 1TB capacity.",
  },
  {
    articleNo: "A1014",
    productService: "SSL Certificate",
    inPrice: 5.00,
    price: 15.00,
    unit: "year",
    inStock: 150,
    description: "Annual SSL certificate for secure connections.",
  },
  {
    articleNo: "A1015",
    productService: "Email Marketing Campaign",
    inPrice: 60.00,
    price: 200.00,
    unit: "campaign",
    inStock: 10,
    description: "Email campaign setup and management service.",
  },
  {
    articleNo: "A1016",
    productService: "Video Editing",
    inPrice: 100.00,
    price: 300.00,
    unit: "project",
    inStock: 8,
    description: "Professional video editing for social media or ads.",
  },
  {
    articleNo: "A1017",
    productService: "Data Backup Service",
    inPrice: 20.00,
    price: 50.00,
    unit: "month",
    inStock: 30,
    description: "Automatic secure backup of business data.",
  },
  {
    articleNo: "A1018",
    productService: "UI/UX Design Consultation",
    inPrice: 70.00,
    price: 200.00,
    unit: "hour",
    inStock: 10,
    description: "Consultation for improving user experience and design.",
  },
  {
    articleNo: "A1019",
    productService: "IT Support",
    inPrice: 25.00,
    price: 70.00,
    unit: "hour",
    inStock: 40,
    description: "Remote or onsite IT support and troubleshooting.",
  },
  {
    articleNo: "A1020",
    productService: "Custom API Integration",
    inPrice: 200.00,
    price: 600.00,
    unit: "project",
    inStock: 5,
    description: "Integration of third-party APIs for web applications.",
  },
];

async function seedPricelist() {
  try {
    console.log("Checking if pricelist needs seeding...");
    const existingCount = await Pricelist.count();

    if (existingCount > 0) {
      console.log(`Pricelist already exists (${existingCount} records), skipping seed.`);
      return;
    }

    console.log("No pricelist found, seeding...");

    for (const item of pricelistData) {
      await Pricelist.upsert(item);
    }

    console.log("Pricelist seeded successfully ✅");
  } catch (error) {
    console.error("Error seeding pricelist:", error);
  }
}

module.exports = seedPricelist;
