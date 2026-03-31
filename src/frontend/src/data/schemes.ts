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
  },
  {
    id: "pmksy",
    name: "Pradhan Mantri Krishi Sinchai Yojana",
    shortName: "PMKSY",
    description:
      "Ensures access to protective irrigation and efficient water use through 'More Crop Per Drop' approach.",
    benefits:
      "Subsidy on drip/sprinkler systems, micro-irrigation support, watershed development.",
    eligibility: "Individual farmers, farmer groups, NGOs, cooperatives.",
    applyUrl: "https://pmksy.gov.in/",
    emoji: "💧",
    gradient: "from-cyan-900 to-blue-800",
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
  },
  {
    id: "nmsa",
    name: "National Mission for Sustainable Agriculture",
    shortName: "NMSA",
    description:
      "Enhancing agricultural productivity through integrated farming, water use efficiency, and soil health management.",
    benefits:
      "Support for organic farming, dryland farming, rain-fed area development.",
    eligibility:
      "Farmers in rain-fed and dryland areas. Preference to small and marginal farmers.",
    applyUrl: "https://nmsa.dac.gov.in/",
    emoji: "♻️",
    gradient: "from-green-800 to-lime-700",
  },
  {
    id: "atma",
    name: "Agricultural Technology Management Agency",
    shortName: "ATMA",
    description:
      "Restructured extension system for technology transfer to farmers at district level.",
    benefits:
      "Training, farmer field schools, exposure visits, demo plots, farm advisory services.",
    eligibility:
      "All farmers, preference to small, marginal, and women farmers.",
    applyUrl: "https://agricoop.nic.in/",
    emoji: "🎓",
    gradient: "from-teal-900 to-cyan-800",
  },
  {
    id: "pkvy",
    name: "Paramparagat Krishi Vikas Yojana",
    shortName: "PKVY",
    description:
      "Cluster approach to promote organic farming through farmer groups with financial support.",
    benefits:
      "₹50,000/ha over 3 years. Support for organic inputs, certification, marketing.",
    eligibility: "Groups of 50 farmers with 50 acres land forming clusters.",
    applyUrl: "https://pgsindia-ncof.gov.in/",
    emoji: "🌻",
    gradient: "from-lime-900 to-green-800",
  },
  {
    id: "nhm",
    name: "National Horticulture Mission",
    shortName: "NHM",
    description:
      "Holistic development of horticulture sector with focus on fruits, vegetables, spices, and flowers.",
    benefits:
      "Subsidy on planting material, protected cultivation, post-harvest infrastructure, market linkage.",
    eligibility:
      "Individual farmers, farmer groups, NGOs for horticulture crop cultivation.",
    applyUrl: "https://nhb.gov.in/",
    emoji: "🌺",
    gradient: "from-pink-900 to-rose-800",
  },
];
