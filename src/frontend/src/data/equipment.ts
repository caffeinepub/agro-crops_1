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
  engineCC?: string;
  fuelConsumptionPerHour?: string;
  maintenanceHours?: number;
  weightKg?: number;
  landCoveragePerHour?: string;
  operatingSpeed?: string;
  safetyTips?: string[];
  costRange?: string;
  maintenanceTip?: string;
  bestSeason?: string;
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
    engineCC: "2500–5000 cc",
    fuelConsumptionPerHour: "3–7 L/hr",
    maintenanceHours: 250,
    weightKg: 2200,
    landCoveragePerHour: "0.5–1.5 acre/hr",
    operatingSpeed: "3–8 km/hr",
    safetyTips: [
      "Always wear a seatbelt",
      "Never allow passengers on running board",
      "Disengage PTO before dismounting",
      "Keep ROPS rollbar in place",
    ],
    costRange: "₹6–9 lakh",
    maintenanceTip:
      "Change engine oil every 250 hours. Check tyre pressure weekly.",
    bestSeason: "Pre-monsoon & Rabi",
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
    image: "/assets/generated/equipment-power-tiller.dim_400x300.jpg",
    engineCC: "400–700 cc",
    fuelConsumptionPerHour: "1.5–2.5 L/hr",
    maintenanceHours: 100,
    weightKg: 250,
    landCoveragePerHour: "0.2–0.4 acre/hr",
    operatingSpeed: "2–5 km/hr",
    safetyTips: [
      "Keep hands away from tines while running",
      "Wear steel-toed boots",
      "Shut off engine before servicing",
    ],
    costRange: "₹85,000–1.5 lakh",
    maintenanceTip: "Grease all bearings after every 50 hrs of use.",
    bestSeason: "Kharif (puddling for rice)",
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
    image: "/assets/generated/equipment-rotavator.dim_400x300.jpg",
    engineCC: "PTO driven (40+ HP tractor)",
    fuelConsumptionPerHour: "4–5 L/hr",
    maintenanceHours: 100,
    weightKg: 450,
    landCoveragePerHour: "0.8–1.5 acre/hr",
    operatingSpeed: "3–6 km/hr",
    safetyTips: [
      "Never stand behind rotavator when running",
      "Remove stones from field before use",
      "Check blade bolts before each session",
    ],
    costRange: "₹40,000–80,000",
    maintenanceTip:
      "Replace L-blades after 100 acres. Clean blade shaft weekly.",
    bestSeason: "Pre-sowing all seasons",
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
    engineCC: "PTO driven (30+ HP)",
    fuelConsumptionPerHour: "3–5 L/hr",
    maintenanceHours: 200,
    weightKg: 200,
    landCoveragePerHour: "0.4–0.8 acre/hr",
    operatingSpeed: "4–7 km/hr",
    safetyTips: [
      "Ensure tractor is in neutral before hitching",
      "Wear protective footwear",
      "Keep bystanders away from field",
    ],
    costRange: "₹15,000–40,000",
    maintenanceTip:
      "Grease share and mould board. Check share sharpness monthly.",
    bestSeason: "Kharif prep (May-June)",
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
    image: "/assets/generated/equipment-cultivator.dim_400x300.jpg",
    engineCC: "PTO driven (30+ HP)",
    fuelConsumptionPerHour: "2.5–3.5 L/hr",
    maintenanceHours: 150,
    weightKg: 180,
    landCoveragePerHour: "1–2 acre/hr",
    operatingSpeed: "4–8 km/hr",
    safetyTips: [
      "Check tyne bolts before use",
      "Clear weeds from tynes regularly",
      "Keep children away from field during operation",
    ],
    costRange: "₹18,000–35,000",
    maintenanceTip:
      "Replace worn sweeps/shovels each season for clean tillage.",
    bestSeason: "Rabi preparation",
  },
  {
    id: "seedDrill",
    name: "Seed Drill",
    category: "seeding",
    emoji: "🌾",
    description: "Precision seeder for uniform seed placement at correct depth",
    uses: [
      "Wheat sowing",
      "Pulse sowing",
      "Fertilizer application",
      "Row sowing",
    ],
    specs: "7-9 rows, 15-22.5 cm spacing, Tractor-mounted",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=seed+drill+wheat+sowing",
    gradient: "from-green-800 to-lime-700",
    image: "/assets/generated/equipment-seed-drill.dim_400x300.jpg",
    engineCC: "PTO driven (30+ HP)",
    fuelConsumptionPerHour: "3–4 L/hr",
    maintenanceHours: 100,
    weightKg: 300,
    landCoveragePerHour: "1.5–2.5 acre/hr",
    operatingSpeed: "5–7 km/hr",
    safetyTips: [
      "Calibrate seed rate before sowing",
      "Check seed tubes for blockage daily",
      "Keep PTO guard in place",
    ],
    costRange: "₹25,000–55,000",
    maintenanceTip:
      "Clean seed box thoroughly after each crop to prevent cross-contamination.",
    bestSeason: "Rabi (Oct-Nov)",
  },
  {
    id: "transplanter",
    name: "Paddy Transplanter",
    category: "seeding",
    emoji: "🌾",
    description: "Mechanized paddy seedling transplanter for uniform spacing",
    uses: [
      "Paddy transplanting",
      "Uniform row spacing",
      "Seedling placement",
      "Labour saving",
    ],
    specs: "4-8 row, 30 x 14-16 cm spacing, 8-15 HP engine",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=paddy+transplanter+india",
    gradient: "from-green-900 to-teal-700",
    image: "/assets/generated/equipment-transplanter.dim_400x300.jpg",
    engineCC: "200–400 cc",
    fuelConsumptionPerHour: "1.5–2 L/hr",
    maintenanceHours: 100,
    weightKg: 180,
    landCoveragePerHour: "0.2–0.4 acre/hr",
    operatingSpeed: "2–3 km/hr",
    safetyTips: [
      "Check mat nursery quality before use",
      "Keep water level at 2-3 cm in field",
      "Wear rubber boots in puddled field",
    ],
    costRange: "₹1.5–3.5 lakh",
    maintenanceTip:
      "Clean picker fingers after each session. Lubricate drive chain weekly.",
    bestSeason: "Kharif (June-July)",
  },
  {
    id: "combine",
    name: "Combine Harvester",
    category: "harvesting",
    emoji: "🌾",
    description:
      "All-in-one machine for harvesting, threshing, and cleaning grains",
    uses: [
      "Wheat harvesting",
      "Rice harvesting",
      "Maize harvesting",
      "Soybean",
    ],
    specs: "30-60 HP, 4-6 feet cutting width, self-propelled",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=combine+harvester+india",
    gradient: "from-amber-900 to-orange-800",
    image: "/assets/generated/equipment-combine.dim_400x300.jpg",
    engineCC: "3000–6000 cc",
    fuelConsumptionPerHour: "8–15 L/hr",
    maintenanceHours: 250,
    weightKg: 5000,
    landCoveragePerHour: "1.5–3 acre/hr",
    operatingSpeed: "4–6 km/hr",
    safetyTips: [
      "Never clear blockages with engine running",
      "Keep cab door closed in dusty conditions",
      "Check fire extinguisher before each harvest day",
      "Service concave and sieve before season",
    ],
    costRange: "₹30–60 lakh (hire ₹1000-2500/acre)",
    maintenanceTip:
      "Service concave clearance and clean air filter daily during harvest.",
    bestSeason: "Rabi harvest (March-April)",
  },
  {
    id: "reaper",
    name: "Reaper Binder",
    category: "harvesting",
    emoji: "🌾",
    description: "Cuts and bundles standing crops for small to medium farms",
    uses: [
      "Wheat cutting",
      "Paddy harvesting",
      "Bundle tying",
      "Small-scale harvest",
    ],
    specs: "Walk-behind, 3-4 feet width, 5-7 HP engine",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=reaper+binder+india",
    gradient: "from-yellow-800 to-amber-700",
    image: "/assets/generated/equipment-reaper.dim_400x300.jpg",
    engineCC: "200–350 cc",
    fuelConsumptionPerHour: "1–1.5 L/hr",
    maintenanceHours: 100,
    weightKg: 180,
    landCoveragePerHour: "0.3–0.5 acre/hr",
    operatingSpeed: "2–3 km/hr",
    safetyTips: [
      "Sharpen cutting blade before each season",
      "Never put hands near blade area",
      "Use ear protection — machine is loud",
    ],
    costRange: "₹75,000–1.5 lakh",
    maintenanceTip: "Sharpen reciprocating blades after every 20 acres.",
    bestSeason: "Rabi harvest",
  },
  {
    id: "drip",
    name: "Drip Irrigation System",
    category: "irrigation",
    emoji: "💧",
    description: "Water-efficient drip system delivering water at plant roots",
    uses: ["Fruit orchards", "Vegetables", "Cash crops", "Water-scarce areas"],
    specs: "Inline drippers 2-4 LPH, 16mm laterals, Filter unit included",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=drip+irrigation+india",
    gradient: "from-blue-900 to-cyan-700",
    image: "/assets/generated/equipment-drip.dim_400x300.jpg",
    engineCC: "N/A (gravity/pump fed)",
    fuelConsumptionPerHour: "0 (gravity) / 0.5-1 L/hr (pump)",
    maintenanceHours: 50,
    weightKg: 80,
    landCoveragePerHour: "Full farm coverage",
    operatingSpeed: "N/A",
    safetyTips: [
      "Flush laterals every 15 days to prevent clogging",
      "Install filter (100 mesh) to avoid blockages",
      "Check emitter flow rate monthly",
    ],
    costRange: "₹30,000–60,000/acre (90% subsidy under PMKSY)",
    maintenanceTip:
      "Flush laterals fortnightly. Clean filter weekly during operation.",
    bestSeason: "All year",
  },
  {
    id: "sprinkler",
    name: "Sprinkler System",
    category: "irrigation",
    emoji: "🌊",
    description: "Overhead sprinkler irrigation for wide-area coverage",
    uses: ["Cereals", "Oilseeds", "Orchards", "Nurseries"],
    specs: "Rotating sprinklers, 8-15 m radius, PVC/HDPE pipes",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=sprinkler+irrigation+india",
    gradient: "from-cyan-800 to-blue-700",
    image: "/assets/generated/equipment-sprinkler.dim_400x300.jpg",
    engineCC: "N/A",
    fuelConsumptionPerHour: "1–2 L/hr (pump)",
    maintenanceHours: 50,
    weightKg: 120,
    landCoveragePerHour: "Full farm coverage",
    operatingSpeed: "N/A",
    safetyTips: [
      "Don't operate in high winds",
      "Check pressure gauges before each irrigation",
      "Inspect pipes for leaks every season",
    ],
    costRange: "₹15,000–25,000/acre",
    maintenanceTip:
      "Clean nozzle holes with pin every 30 days. Store pipes indoors in summer.",
    bestSeason: "Rabi & Zaid",
  },
  {
    id: "pump",
    name: "Diesel Water Pump",
    category: "irrigation",
    emoji: "💧",
    description:
      "High-capacity water pump for field irrigation from wells/canals",
    uses: [
      "Field irrigation",
      "Draining waterlogged fields",
      "Spray system supply",
      "Livestock water",
    ],
    specs: "5-10 HP diesel, 2-4 inch outlet, 30-80 m head",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=diesel+water+pump+farming",
    gradient: "from-slate-700 to-gray-600",
    image: "/assets/generated/equipment-pump.dim_400x300.jpg",
    engineCC: "350–700 cc",
    fuelConsumptionPerHour: "1–2 L/hr",
    maintenanceHours: 100,
    weightKg: 80,
    landCoveragePerHour: "0.5–2 acre/hr",
    operatingSpeed: "N/A",
    safetyTips: [
      "Run dry test before season",
      "Never run pump dry — prime before start",
      "Keep fuel tank vented to prevent vapor lock",
    ],
    costRange: "₹12,000–35,000",
    maintenanceTip:
      "Drain fuel before storing. Clean impeller housing annually.",
    bestSeason: "Summer (Zaid) irrigation",
  },
  {
    id: "sprayer",
    name: "Knapsack Sprayer",
    category: "protection",
    emoji: "🚼",
    description:
      "Manual/battery-operated sprayer for pesticide and liquid fertilizer application",
    uses: [
      "Pesticide spraying",
      "Foliar nutrient spray",
      "Fungicide application",
      "Weedicide application",
    ],
    specs: "16-20L tank, Battery/Manual pump, 0-4 bar pressure",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=knapsack+sprayer+farming",
    gradient: "from-green-800 to-teal-700",
    image: "/assets/generated/equipment-sprayer.dim_400x300.jpg",
    engineCC: "N/A (manual/battery)",
    fuelConsumptionPerHour: "Battery: 6-8 hrs per charge",
    maintenanceHours: 50,
    weightKg: 8,
    landCoveragePerHour: "0.5–0.8 acre/hr",
    operatingSpeed: "Walking pace",
    safetyTips: [
      "Wear gloves and mask while spraying",
      "Spray in early morning or evening (no wind)",
      "Do not eat/drink while spraying",
      "Wash hands thoroughly after use",
    ],
    costRange: "₹1,500–4,000",
    maintenanceTip:
      "Flush with clean water after each use. Store empty and dry.",
    bestSeason: "All year",
  },
  {
    id: "drone-sprayer",
    name: "Drone Sprayer",
    category: "protection",
    emoji: "🫸",
    description:
      "Agricultural drone for precision chemical and fertilizer spraying",
    uses: [
      "Pesticide precision spraying",
      "Foliar fertilizer",
      "Crop health monitoring",
      "Large-area coverage",
    ],
    specs: "10-30 litre tank, GPS-guided, 10-20 min flight/charge",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=agricultural+drone+sprayer+india",
    gradient: "from-sky-800 to-blue-700",
    image: "/assets/generated/equipment-drone.dim_400x300.jpg",
    engineCC: "N/A (electric motors)",
    fuelConsumptionPerHour: "Battery: 30-45 min per charge",
    maintenanceHours: 100,
    weightKg: 18,
    landCoveragePerHour: "8–15 acre/hr",
    operatingSpeed: "5–8 m/s",
    safetyTips: [
      "Register with DGCA before use",
      "Fly only in permitted zones",
      "Keep 50m distance from power lines",
      "Don't fly in rain or strong wind",
    ],
    costRange: "₹5–15 lakh (hire ₹700-1200/acre)",
    maintenanceTip:
      "Clean nozzles after every spray. Check props before each flight.",
    bestSeason: "Kharif (disease prevention)",
  },
  {
    id: "thresher",
    name: "Thresher",
    category: "processing",
    emoji: "🌾",
    description:
      "High-capacity mechanical thresher for separating grain from stalks",
    uses: [
      "Wheat threshing",
      "Paddy threshing",
      "Pulse threshing",
      "Millet threshing",
    ],
    specs: "Tractor-operated, 500-1000 kg/hr capacity, Axial flow",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=thresher+machine+india",
    gradient: "from-amber-800 to-orange-700",
    image: "/assets/generated/equipment-thresher.dim_400x300.jpg",
    engineCC: "PTO driven (35+ HP)",
    fuelConsumptionPerHour: "4–6 L/hr",
    maintenanceHours: 100,
    weightKg: 400,
    landCoveragePerHour: "500–1000 kg/hr",
    operatingSpeed: "N/A (stationary operation)",
    safetyTips: [
      "Never feed crop bundles by hand near cylinder",
      "Keep long hair/clothing away from PTO shaft",
      "Wear ear protection — very loud",
      "No children near operating thresher",
    ],
    costRange: "₹45,000–1.2 lakh",
    maintenanceTip:
      "Check concave clearance and replace worn rasp bars each season.",
    bestSeason: "Rabi harvest",
  },
  {
    id: "chaff-cutter",
    name: "Chaff Cutter",
    category: "processing",
    emoji: "🌾",
    description:
      "Electric/engine-operated cutter for fodder and straw chopping",
    uses: [
      "Fodder chopping",
      "Straw cutting",
      "Silage preparation",
      "Residue management",
    ],
    specs: "1-3 HP electric or diesel, 200-500 kg/hr output",
    tutorialUrl:
      "https://www.youtube.com/results?search_query=chaff+cutter+machine",
    gradient: "from-green-700 to-lime-600",
    image: "/assets/generated/equipment-chaff-cutter.dim_400x300.jpg",
    engineCC: "1-3 HP electric motor",
    fuelConsumptionPerHour: "1-2 kW electricity",
    maintenanceHours: 50,
    weightKg: 80,
    landCoveragePerHour: "200–500 kg fodder/hr",
    operatingSpeed: "N/A (stationary)",
    safetyTips: [
      "Keep children away from hopper",
      "Never push fodder with hands — use wooden pusher",
      "Sharpen blades every 50 hrs",
    ],
    costRange: "₹8,000–20,000",
    maintenanceTip: "Sharpen cutter blades every 50 hours of operation.",
    bestSeason: "All year (daily use)",
  },
];
