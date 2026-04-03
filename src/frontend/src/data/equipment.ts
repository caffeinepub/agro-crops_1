export interface Equipment {
  id: string;
  name: string;
  category:
    | "tillage"
    | "seeding"
    | "harvesting"
    | "irrigation"
    | "protection"
    | "processing";
  emoji: string;
  description: string;
  uses: string[];
  specs: string;
  tutorialUrl: string;
  gradient: string;
  image?: string;
}

export const equipmentList: Equipment[] = [
  {
    id: "tractor",
    name: "Tractor",
    category: "tillage",
    emoji: "🚜",
    description: "Multi-purpose farm power unit for various field operations",
    uses: ["Ploughing", "Harrowing", "Transport", "Operating PTO implements"],
    specs: "25-75 HP, 2WD/4WD, Diesel engine",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=tractor+farming+india",
    gradient: "from-red-900 to-orange-800",
    image: "/assets/generated/equipment-tractor.dim_400x300.jpg",
  },
  {
    id: "powerTiller",
    name: "Power Tiller",
    category: "tillage",
    emoji: "🔧",
    description: "Walk-behind tractor for small farms and paddy fields",
    uses: ["Puddling", "Tillage", "Weeding", "Pumping water"],
    specs: "8-12 HP, 2-wheel drive, Multi-purpose",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=power+tiller+india",
    gradient: "from-orange-800 to-amber-700",
  },
  {
    id: "rotavator",
    name: "Rotavator",
    category: "tillage",
    emoji: "🔧",
    description: "Rotary tillage machine for seedbed preparation",
    uses: ["Tillage", "Weed control", "Residue incorporation", "Seedbed prep"],
    specs: "Tractor-mounted, 1.5-3.0m width, L-blade",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=rotavator+farming",
    gradient: "from-slate-700 to-gray-600",
  },
  {
    id: "plough",
    name: "Plough",
    category: "tillage",
    emoji: "🌿",
    description: "Primary tillage implement for soil turning and inversion",
    uses: [
      "Deep tillage",
      "Weed burial",
      "Residue incorporation",
      "Drainage improvement",
    ],
    specs: "MB/Disc type, 2-3 bottom, 25-30cm depth",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=plough+farming+india",
    gradient: "from-amber-800 to-yellow-700",
    image: "/assets/generated/equipment-plough.dim_400x300.jpg",
  },
  {
    id: "cultivator",
    name: "Cultivator",
    category: "tillage",
    emoji: "🔧",
    description: "Secondary tillage for soil loosening and weed control",
    uses: [
      "Secondary tillage",
      "Inter-cultivation",
      "Weed control",
      "Fertilizer mixing",
    ],
    specs: "7-9 tynes, Spring/Rigid, Tractor-mounted",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=cultivator+farming",
    gradient: "from-stone-700 to-amber-600",
  },
  {
    id: "discHarrow",
    name: "Disc Harrow",
    category: "tillage",
    emoji: "🔧",
    description: "Cutting and pulverizing crop residues and hard soil",
    uses: [
      "Residue cutting",
      "Soil pulverizing",
      "Pre-sowing prep",
      "Weed control",
    ],
    specs: "18-24 disc, 660mm diameter, Tandem type",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=disc+harrow+farming",
    gradient: "from-gray-700 to-slate-600",
  },
  {
    id: "subsoiler",
    name: "Subsoiler",
    category: "tillage",
    emoji: "🔧",
    description: "Deep tillage to break hardpan and improve drainage",
    uses: [
      "Breaking hardpan",
      "Improving drainage",
      "Root penetration",
      "Aerating soil",
    ],
    specs: "1-3 shanks, 45-60cm depth, Heavy-duty",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=subsoiler+farming",
    gradient: "from-zinc-700 to-gray-600",
  },
  {
    id: "seedDrill",
    name: "Seed Drill",
    category: "seeding",
    emoji: "🌱",
    description: "Precision seeding machine for uniform seed placement",
    uses: [
      "Cereals sowing",
      "Row spacing control",
      "Seed rate control",
      "Fertilizer placement",
    ],
    specs: "11-25 rows, Row spacing 20-25cm, Fluted roller",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=seed+drill+farming+india",
    gradient: "from-green-800 to-teal-700",
    image: "/assets/generated/equipment-seed-drill.dim_400x300.jpg",
  },
  {
    id: "transplanterRice",
    name: "Rice Transplanter",
    category: "seeding",
    emoji: "🌾",
    description: "Mechanized transplanting of paddy seedlings",
    uses: [
      "Paddy transplanting",
      "Uniform spacing",
      "Reducing labor",
      "Timely planting",
    ],
    specs: "4-8 row, 30x15cm spacing, Mat nursery required",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=rice+transplanter+india",
    gradient: "from-lime-800 to-green-700",
  },
  {
    id: "fertilizerSpreader",
    name: "Fertilizer Spreader",
    category: "seeding",
    emoji: "🌿",
    description: "Uniform distribution of granular fertilizers",
    uses: [
      "Basal fertilizer application",
      "Top dressing",
      "Lime spreading",
      "Seed broadcasting",
    ],
    specs: "200-500L capacity, 8-15m width, Centrifugal type",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=fertilizer+spreader+india",
    gradient: "from-amber-700 to-lime-700",
  },
  {
    id: "combineHarvester",
    name: "Combine Harvester",
    category: "harvesting",
    emoji: "🌾",
    description: "All-in-one harvesting, threshing, and winnowing",
    uses: [
      "Wheat harvesting",
      "Rice harvesting",
      "Threshing",
      "Cleaning grain",
    ],
    specs: "100+ HP, 3-5m cutting width, Tank 2000-5000kg",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=combine+harvester+india",
    gradient: "from-yellow-800 to-amber-700",
  },
  {
    id: "reaper",
    name: "Reaper",
    category: "harvesting",
    emoji: "🌾",
    description: "Cutting standing crops for subsequent processing",
    uses: ["Crop cutting", "Windrow laying", "Pre-harvest", "Reducing labor"],
    specs: "Self-propelled/Tractor-mounted, 4-6 row",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=crop+reaper+india",
    gradient: "from-orange-700 to-yellow-600",
  },
  {
    id: "thresher",
    name: "Thresher",
    category: "harvesting",
    emoji: "🔧",
    description: "Separating grain from harvested crop stalks",
    uses: [
      "Grain separation",
      "Straw management",
      "Post-harvest processing",
      "Reducing losses",
    ],
    specs: "Axial flow type, 500-1500kg/hr capacity",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=thresher+machine+india",
    gradient: "from-stone-700 to-amber-600",
  },
  {
    id: "drip",
    name: "Drip Irrigation Kit",
    category: "irrigation",
    emoji: "💧",
    description: "Water-efficient drip system for targeted plant watering",
    uses: [
      "Water saving",
      "Fertigation",
      "Root zone moisture",
      "Vegetable crops",
    ],
    specs: "16mm laterals, 2-4 LPH emitters, Filters+Header",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=drip+irrigation+india",
    gradient: "from-blue-800 to-cyan-700",
    image: "/assets/generated/equipment-irrigation.dim_400x300.jpg",
  },
  {
    id: "sprinkler",
    name: "Sprinkler System",
    category: "irrigation",
    emoji: "💧",
    description: "Overhead irrigation mimicking natural rainfall",
    uses: ["Field crops", "Lawns", "Frost protection", "Field wetting"],
    specs: "15-20m radius, 6-8 bar pressure, Aluminum pipes",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=sprinkler+irrigation+india",
    gradient: "from-teal-800 to-blue-700",
  },
  {
    id: "solarPump",
    name: "Solar Water Pump",
    category: "irrigation",
    emoji: "☀️",
    description: "Solar-powered pumping for off-grid water supply",
    uses: [
      "Groundwater pumping",
      "Canal lifting",
      "Remote areas",
      "Cost saving",
    ],
    specs: "1-10 HP, DC/AC, 50-500 LPM flow rate",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=solar+pump+farming+india",
    gradient: "from-yellow-700 to-orange-600",
  },
  {
    id: "knapsack",
    name: "Knapsack Sprayer",
    category: "protection",
    emoji: "💧",
    description: "Manual backpack sprayer for small farms",
    uses: [
      "Pesticide spray",
      "Herbicide spray",
      "Foliar feeding",
      "Fungicide application",
    ],
    specs: "16L tank, 3-4 bar, 1.2mm nozzle, Manual pump",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=knapsack+sprayer+farming",
    gradient: "from-green-700 to-teal-600",
  },
  {
    id: "powerSprayer",
    name: "Power Sprayer",
    category: "protection",
    emoji: "💧",
    description: "Engine-powered high-volume crop protection sprayer",
    uses: [
      "Large area spraying",
      "Orchard spraying",
      "High reach",
      "Fast coverage",
    ],
    specs: "2-stroke/4-stroke, 16-20L, High pressure 20-30 bar",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=power+sprayer+farming+india",
    gradient: "from-cyan-800 to-blue-700",
  },
  {
    id: "droneSprayer",
    name: "Drone Sprayer",
    category: "protection",
    emoji: "🫸",
    description: "UAV-based precision pesticide and nutrient spraying",
    uses: [
      "Precision spraying",
      "Inaccessible areas",
      "Coverage mapping",
      "Night spraying",
    ],
    specs: "10-16L tank, GPS-guided, 1 acre in 10 min",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=drone+spraying+farming+india",
    gradient: "from-slate-800 to-blue-900",
  },
  {
    id: "powerWeeder",
    name: "Power Weeder",
    category: "processing",
    emoji: "🔧",
    description: "Mechanized inter-row weed removal between crops",
    uses: [
      "Weed control",
      "Soil aeration",
      "Inter-cultivation",
      "Labor saving",
    ],
    specs: "2-stroke 35cc, 550mm width, Rotating blades",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=power+weeder+farming+india",
    gradient: "from-lime-800 to-green-700",
  },
  {
    id: "chaffCutter",
    name: "Chaff Cutter",
    category: "processing",
    emoji: "🔧",
    description: "Cutting and chopping straw and fodder for livestock",
    uses: [
      "Fodder chopping",
      "Straw cutting",
      "Silage making",
      "Waste reduction",
    ],
    specs: "1-5 HP motor, 500-2000 kg/hr, Adjustable cut length",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=chaff+cutter+machine+india",
    gradient: "from-amber-700 to-yellow-600",
  },
  {
    id: "grainCleaner",
    name: "Grain Cleaner",
    category: "processing",
    emoji: "🔧",
    description: "Winnowing and cleaning harvested grain from impurities",
    uses: [
      "Grain cleaning",
      "Seed separation",
      "Foreign material removal",
      "Pre-storage",
    ],
    specs: "500-1000kg/hr, Aspirator + sieves, 3-phase motor",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=grain+cleaner+winnower+india",
    gradient: "from-yellow-700 to-amber-600",
  },
  {
    id: "fertigation",
    name: "Fertigation System",
    category: "seeding",
    emoji: "🌱",
    description: "Precision delivery of nutrients through irrigation water",
    uses: [
      "Nutrient delivery",
      "Water + fertilizer",
      "Reduced waste",
      "Precision farming",
    ],
    specs: "Venturi injector, 200-500L tank, Timer control",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=fertigation+system+india",
    gradient: "from-teal-700 to-cyan-600",
  },
];
