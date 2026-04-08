export interface Scheme {
  id: string;
  name: string;
  shortName: string;
  description: string;
  benefits: string;
  eligibility: string;
  applyUrl: string;
  emoji: string;
  gradient: string;
  subsidyAmount?: string;
  applicationForm?: string;
  processingDays?: number;
  documentsRequired?: string[];
  successStories?: number;
  websiteUrl?: string;
}

export const schemes: Scheme[] = [
  {
    id: "pmkisan",
    name: "PM Kisan Samman Nidhi",
    shortName: "PM-KISAN",
    description:
      "Direct income support scheme providing ₹6000 per year to all farmer families across the country.",
    benefits:
      "₹2000 per installment, 3 installments per year, Direct Bank Transfer",
    eligibility:
      "All landholding farmer families. Excludes institutional landholders and high-income earners.",
    applyUrl: "https://pmkisan.gov.in/",
    emoji: "🏦",
    gradient: "from-green-900 to-teal-800",
    subsidyAmount: "₹6,000/year",
    applicationForm: "PM-KISAN Online Portal",
    processingDays: 30,
    documentsRequired: [
      "Aadhaar Card",
      "Bank Passbook (IFSC)",
      "Land Records (7/12 Utara)",
      "Mobile Number linked to Aadhaar",
    ],
    successStories: 120000000,
    websiteUrl: "https://pmkisan.gov.in",
  },
  {
    id: "pmfby",
    name: "Pradhan Mantri Fasal Bima Yojana",
    shortName: "PMFBY",
    description:
      "Comprehensive crop insurance scheme covering losses from natural calamities, pests, and diseases.",
    benefits:
      "Premium: 2% for Kharif, 1.5% for Rabi. Sum insured up to ₹2 lakh.",
    eligibility: "All farmers growing notified crops in notified areas.",
    applyUrl: "https://pmfby.gov.in/",
    emoji: "🛡️",
    gradient: "from-blue-900 to-indigo-800",
    subsidyAmount: "Up to ₹2 lakh insured sum",
    applicationForm: "PMFBY Portal / CSC / Bank",
    processingDays: 45,
    documentsRequired: [
      "Aadhaar Card",
      "Land Records (Khasra/Khatauni)",
      "Bank Account Details",
      "Sowing Certificate",
      "Crop photographs (if claiming)",
    ],
    successStories: 58000000,
    websiteUrl: "https://pmfby.gov.in",
  },
  {
    id: "kcc",
    name: "Kisan Credit Card",
    shortName: "KCC",
    description:
      "Flexible credit scheme providing farmers timely credit for agricultural operations at subsidized rates.",
    benefits:
      "Interest rate 7% (4% with subsidy). Credit limit up to ₹3 lakh without collateral.",
    eligibility:
      "All farmers, SHGs, JLGs involved in agriculture and allied activities.",
    applyUrl: "https://www.nabard.org/",
    emoji: "💳",
    gradient: "from-amber-900 to-orange-800",
    subsidyAmount: "3% interest subvention (effective rate 4%)",
    applicationForm: "Bank application form / CSC",
    processingDays: 15,
    documentsRequired: [
      "Aadhaar Card",
      "PAN Card",
      "Land Records",
      "Passport Photo (2 copies)",
      "Bank Statement (6 months)",
    ],
    successStories: 70000000,
    websiteUrl: "https://www.nabard.org",
  },
  {
    id: "soilHealth",
    name: "Soil Health Card Scheme",
    shortName: "Soil Health Card",
    description:
      "Provides soil health cards with nutrient status and recommendations for improved productivity.",
    benefits:
      "Free soil testing, crop-wise fertilizer recommendations, improved soil management.",
    eligibility: "All farmers. Cards issued once every two years.",
    applyUrl: "https://soilhealth.dac.gov.in/",
    emoji: "🌿",
    gradient: "from-amber-800 to-brown-700",
    subsidyAmount: "Free (Government funded)",
    applicationForm: "Contact nearest KVK or Agriculture Office",
    processingDays: 30,
    documentsRequired: ["Aadhaar Card", "Land Survey Number", "Mobile Number"],
    successStories: 22000000,
    websiteUrl: "https://soilhealth.dac.gov.in",
  },
  {
    id: "pmksy",
    name: "Pradhan Mantri Krishi Sinchai Yojana",
    shortName: "PMKSY",
    description:
      "Ensures access to protective irrigation and efficient water use through ‘More Crop Per Drop’ approach.",
    benefits:
      "Subsidy on drip/sprinkler systems, micro-irrigation support, watershed development.",
    eligibility: "Individual farmers, farmer groups, NGOs, cooperatives.",
    applyUrl: "https://pmksy.gov.in/",
    emoji: "💧",
    gradient: "from-cyan-900 to-blue-800",
    subsidyAmount: "55–90% subsidy on drip/sprinkler system",
    applicationForm: "State Agriculture / Horticulture Department",
    processingDays: 60,
    documentsRequired: [
      "Aadhaar Card",
      "Land Records",
      "Water Source Certificate",
      "Bank Account Details",
      "Quotation from approved vendor",
    ],
    successStories: 5000000,
    websiteUrl: "https://pmksy.gov.in",
  },
  {
    id: "rkvy",
    name: "Rashtriya Krishi Vikas Yojana",
    shortName: "RKVY",
    description:
      "Holistic development of agriculture sector with focus on state-specific plans and farmer-centric approach.",
    benefits:
      "Fund support for agri-infrastructure, value addition, market linkage, post-harvest management.",
    eligibility:
      "All states, farmer producer organizations, agri-entrepreneurs.",
    applyUrl: "https://rkvy.nic.in/",
    emoji: "🏆",
    gradient: "from-purple-900 to-indigo-800",
    subsidyAmount: "Project-based funding (up to ₹50 lakh for startups)",
    applicationForm: "State Agriculture Department / Online Portal",
    processingDays: 90,
    documentsRequired: [
      "Business/Project Plan",
      "Aadhaar Card",
      "Bank Statement",
      "Land Documents",
      "Registration Certificate (if applicable)",
    ],
    successStories: 200000,
    websiteUrl: "https://rkvy.nic.in",
  },
  {
    id: "nmsa",
    name: "National Mission for Sustainable Agriculture",
    shortName: "NMSA",
    description:
      "Enhancing agricultural productivity through integrated farming, water use efficiency, and soil health management.",
    benefits:
      "Support for organic farming, soil health, water conservation, agro-forestry.",
    eligibility:
      "Small and marginal farmers, tribal farmers, organic farming groups.",
    applyUrl: "https://nmsa.dac.gov.in/",
    emoji: "🌍",
    gradient: "from-teal-900 to-green-800",
    subsidyAmount: "50–75% subsidy on organic inputs and certification",
    applicationForm: "State Horticulture/Agriculture Department",
    processingDays: 45,
    documentsRequired: [
      "Aadhaar Card",
      "Land Records",
      "Organic conversion plan",
      "Bank Account Details",
    ],
    successStories: 300000,
    websiteUrl: "https://nmsa.dac.gov.in",
  },
  {
    id: "pkvy",
    name: "Paramparagat Krishi Vikas Yojana",
    shortName: "PKVY",
    description:
      "Promotes organic farming clusters under PGS-India certification, providing financial support for 3 years.",
    benefits:
      "₹50,000/hectare/3 years for organic inputs, certification, and marketing support.",
    eligibility:
      "Farmer clusters of 50 farmers (20 hectares minimum). PGS-India certification mandatory.",
    applyUrl: "https://pgsindia-ncof.gov.in/",
    emoji: "🌱",
    gradient: "from-lime-900 to-green-700",
    subsidyAmount: "₹50,000/hectare over 3 years",
    applicationForm: "Lead Farmer / Local Organic Cluster",
    processingDays: 60,
    documentsRequired: [
      "Cluster formation document (50+ farmers)",
      "Land Records",
      "Aadhaar of all members",
      "Bank Accounts of all members",
      "PGS-India registration",
    ],
    successStories: 500000,
    websiteUrl: "https://pgsindia-ncof.gov.in",
  },
  {
    id: "nfsm",
    name: "National Food Security Mission",
    shortName: "NFSM",
    description:
      "Increases production of rice, wheat, pulses, and coarse cereals through area expansion and productivity enhancement.",
    benefits:
      "Subsidized certified seeds, biofertilizers, farm equipment, training programs.",
    eligibility:
      "Rice, wheat, pulse, and coarse cereal farmers in target districts.",
    applyUrl: "https://nfsm.gov.in/",
    emoji: "🌾",
    gradient: "from-yellow-900 to-amber-800",
    subsidyAmount: "50% subsidy on certified seeds; 25-50% on equipment",
    applicationForm: "District Agriculture Office",
    processingDays: 30,
    documentsRequired: [
      "Aadhaar Card",
      "Land Records",
      "Crop sown certificate",
    ],
    successStories: 15000000,
    websiteUrl: "https://nfsm.gov.in",
  },
  {
    id: "pmkvm",
    name: "PM Kisan Maan Dhan Yojana",
    shortName: "PM-KMY",
    description:
      "Pension scheme for small and marginal farmers ensuring a minimum pension of ₹3000/month after age 60.",
    benefits:
      "₹3000/month pension at age 60. Government co-contributes equal to farmer's premium.",
    eligibility:
      "Small/marginal farmers aged 18–40 years with less than 2 hectares of land.",
    applyUrl: "https://maandhan.in/",
    emoji: "💰",
    gradient: "from-violet-900 to-purple-800",
    subsidyAmount: "₹3,000/month pension (government co-contribution)",
    applicationForm: "CSC Center / PM-KMY Portal",
    processingDays: 30,
    documentsRequired: [
      "Aadhaar Card",
      "Bank Account (auto-debit)",
      "Land Records (<2 Ha)",
      "Age Proof",
    ],
    successStories: 2000000,
    websiteUrl: "https://maandhan.in",
  },
];
