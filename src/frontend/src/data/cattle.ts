export interface Animal {
  id: string;
  name: string;
  category:
    | "dairy"
    | "draught"
    | "poultry"
    | "goat"
    | "sheep"
    | "pig"
    | "aquaculture";
  emoji: string;
  breed: string;
  feed: string;
  health: string;
  benefits: string;
  gradient: string;
  image?: string;
}

export const animals: Animal[] = [
  {
    id: "cow-gir",
    name: "Gir Cow",
    category: "dairy",
    emoji: "🐄",
    breed: "Indigenous Gir breed from Gujarat",
    feed: "Green fodder 25-30kg, dry fodder 8-10kg, concentrate 2-4kg daily",
    health:
      "Vaccinate for FMD, BQ annually. Regular deworming. Clean water access.",
    benefits:
      "15-20L milk/day. A2 milk variety. High fat content. Heat tolerant.",
    gradient: "from-amber-800 to-yellow-700",
    image: "/assets/generated/cattle-cow.dim_400x300.jpg",
  },
  {
    id: "cow-sahiwal",
    name: "Sahiwal Cow",
    category: "dairy",
    emoji: "🐄",
    breed: "Indigenous breed from Punjab",
    feed: "Mixed fodder 25kg, concentrate 3-5kg, mineral supplement daily",
    health: "Regular vaccination, deworming every 3 months. Tick control.",
    benefits: "10-15L milk/day. Disease resistant. Good for hot climate.",
    gradient: "from-red-800 to-amber-700",
    image: "/assets/generated/cattle-cow.dim_400x300.jpg",
  },
  {
    id: "cow-hf",
    name: "HF Cow",
    category: "dairy",
    emoji: "🐄",
    breed: "Holstein Friesian (exotic breed)",
    feed: "High-quality fodder 30-35kg, concentrate 6-8kg, water 60-70L daily",
    health:
      "Regular vet checkup. Vaccinate for Brucellosis, IBR. Comfortable housing.",
    benefits:
      "25-35L milk/day. High production. Suitable for commercial farming.",
    gradient: "from-black to-gray-700",
    image: "/assets/generated/cattle-cow.dim_400x300.jpg",
  },
  {
    id: "buffalo",
    name: "Buffalo",
    category: "dairy",
    emoji: "🐃",
    breed: "Murrah, Surti, Nili-Ravi",
    feed: "Green fodder 30-35kg, dry fodder 8-10kg, concentrate 4-6kg",
    health: "FMD vaccination. Regular deworming. Wallow facility essential.",
    benefits: "10-15L milk/day. High fat (7-8%). Good for ghee production.",
    gradient: "from-slate-800 to-gray-700",
    image: "/assets/generated/cattle-buffalo.dim_400x300.jpg",
  },
  {
    id: "goat-sirohi",
    name: "Sirohi Goat",
    category: "goat",
    emoji: "🐐",
    breed: "Sirohi breed from Rajasthan",
    feed: "Shrub leaves, dry fodder 2-3kg, concentrate 300-500g daily",
    health: "PPR vaccination. Deworming quarterly. Foot bath monthly.",
    benefits: "1.5-2L milk/day. Meat production. Hardy breed, low maintenance.",
    gradient: "from-stone-700 to-amber-600",
    image: "/assets/generated/cattle-goat.dim_400x300.jpg",
  },
  {
    id: "goat-barbari",
    name: "Barbari Goat",
    category: "goat",
    emoji: "🐐",
    breed: "Barbari breed, compact size",
    feed: "Mixed shrubs, dry fodder 1.5-2kg, green fodder 3-4kg",
    health: "Regular vaccination, deworming. Clean housing essential.",
    benefits: "Good milk and meat production. Prolific breeder. Popular in UP.",
    gradient: "from-amber-700 to-stone-600",
    image: "/assets/generated/cattle-goat.dim_400x300.jpg",
  },
  {
    id: "sheep-merino",
    name: "Merino Sheep",
    category: "sheep",
    emoji: "🐑",
    breed: "Fine wool Merino breed",
    feed: "Pasture grazing, hay 1-2kg, mineral supplement",
    health: "Shearing twice yearly. Foot rot prevention. Drenching quarterly.",
    benefits: "Fine quality wool. Good meat. Adaptable to various climates.",
    gradient: "from-stone-600 to-gray-500",
    image: "/assets/generated/cattle-sheep.dim_400x300.jpg",
  },
  {
    id: "sheep-deccani",
    name: "Deccani Sheep",
    category: "sheep",
    emoji: "🐑",
    breed: "Indigenous Deccani breed",
    feed: "Grazing, dry fodder 1-1.5kg, salt lick",
    health: "Regular deworming. PPR vaccine. Hoof trimming every 6 weeks.",
    benefits: "Meat and coarse wool. Drought tolerant. Low management cost.",
    gradient: "from-amber-800 to-stone-700",
    image: "/assets/generated/cattle-sheep.dim_400x300.jpg",
  },
  {
    id: "hen-broiler",
    name: "Broiler Hen",
    category: "poultry",
    emoji: "🐔",
    breed: "Commercial broiler cross",
    feed: "Starter feed 2.5kg for 6 weeks, grower-finisher ratio balanced",
    health:
      "Marek's, ND, IBD vaccination. Biosecurity essential. Clean litter.",
    benefits:
      "Ready in 6 weeks. 2-2.5kg weight gain. High feed conversion ratio.",
    gradient: "from-yellow-700 to-orange-600",
    image: "/assets/generated/cattle-poultry.dim_400x300.jpg",
  },
  {
    id: "hen-layer",
    name: "Layer Hen",
    category: "poultry",
    emoji: "🦚",
    breed: "BV-300, Hi-Line White",
    feed: "Layer mash 120-130g/bird/day. Calcium supplement for egg quality.",
    health:
      "ND+IB vaccination monthly. Coccidiosis control. Regular health checks.",
    benefits:
      "250-300 eggs/year. Economic layer. 72-74 weeks production cycle.",
    gradient: "from-amber-600 to-yellow-500",
    image: "/assets/generated/cattle-poultry.dim_400x300.jpg",
  },
  {
    id: "duck",
    name: "Duck",
    category: "poultry",
    emoji: "🦢",
    breed: "Khaki Campbell, Desi Duck",
    feed: "Duck pellets 150-200g/day, water access essential",
    health:
      "Duck plague vaccination. Clean water always. Avian influenza watch.",
    benefits:
      "200+ eggs/year. Hardy birds. Good meat quality. Low disease incidence.",
    gradient: "from-teal-700 to-cyan-600",
    image: "/assets/generated/cattle-poultry.dim_400x300.jpg",
  },
  {
    id: "pig",
    name: "Pig",
    category: "pig",
    emoji: "🐷",
    breed: "Large White Yorkshire, Desi Pig",
    feed: "Kitchen waste, grain meal 2-3kg, water 6-8L daily",
    health:
      "Swine fever vaccination. Deworming monthly. Good sanitation critical.",
    benefits:
      "High FCR. Multiple piglets per litter. Quick market weight in 6 months.",
    gradient: "from-pink-700 to-rose-600",
  },
  {
    id: "fish-rohu",
    name: "Rohu Fish",
    category: "aquaculture",
    emoji: "🐟",
    breed: "Labeo rohita (Indian major carp)",
    feed: "Supplementary feed 3-5% body weight. Rice bran + mustard oil cake.",
    health:
      "Pond liming before stocking. Monitor pH 7-8. Regular water quality check.",
    benefits:
      "1-1.5kg in 12 months. High market demand. Polyculture compatible.",
    gradient: "from-blue-800 to-teal-700",
  },
  {
    id: "fish-catla",
    name: "Catla Fish",
    category: "aquaculture",
    emoji: "🐟",
    breed: "Catla catla (surface feeder)",
    feed: "Phytoplankton, supplementary feed 2% BW. Green fertilization helps.",
    health:
      "Regular water quality monitoring. Avoid overcrowding. Disease watch.",
    benefits: "1.5-2kg in 12 months. Premium market price. Large size fish.",
    gradient: "from-cyan-800 to-blue-700",
  },
  {
    id: "fish-tilapia",
    name: "Tilapia Fish",
    category: "aquaculture",
    emoji: "🐟",
    breed: "Oreochromis niloticus",
    feed: "Pellet feed 3% body weight. Plant-based diet economical.",
    health:
      "Hardy species. Tolerates poor water quality. Monitor ammonia levels.",
    benefits:
      "500-600g in 6 months. Fast growing. Export quality. Drought resistant.",
    gradient: "from-blue-700 to-indigo-600",
  },
];
