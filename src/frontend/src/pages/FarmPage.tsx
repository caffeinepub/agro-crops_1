import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import VoiceReader from "../components/VoiceReader";
import { useLang } from "../contexts/LangContext";
import { type Crop, crops } from "../data/crops";

type Category = "all" | Crop["category"];

const categories: { key: Category; labelKey: string }[] = [
  { key: "all", labelKey: "farm.filter.all" },
  { key: "cereals", labelKey: "farm.filter.cereals" },
  { key: "vegetables", labelKey: "farm.filter.vegetables" },
  { key: "fruits", labelKey: "farm.filter.fruits" },
  { key: "spices", labelKey: "farm.filter.spices" },
  { key: "pulses", labelKey: "farm.filter.pulses" },
  { key: "oilseeds", labelKey: "farm.filter.oilseeds" },
  { key: "cashCrops", labelKey: "farm.filter.cashCrops" },
];

const calendarRows = [
  { name: "Rice", months: [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0] },
  { name: "Wheat", months: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1] },
  { name: "Maize", months: [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0] },
  { name: "Tomato", months: [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1] },
  { name: "Cotton", months: [0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0] },
  { name: "Mustard", months: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0] },
  { name: "Sugarcane", months: [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1] },
];

const calendarHeaders = [
  "Crop",
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const soilGuide = [
  {
    emoji: "🧪",
    title: "Soil Testing",
    desc: "Test soil pH and nutrients every 6 months. Ideal pH 6–7 for most crops. Contact KVK for free testing.",
    idealValue: "pH 6.0–7.0",
  },
  {
    emoji: "🌱",
    title: "Organic Matter",
    desc: "Add compost or vermicompost 2–4 tonnes per acre annually to improve soil structure and fertility.",
    idealValue: ">3% OC",
  },
  {
    emoji: "💧",
    title: "Drainage",
    desc: "Ensure proper field drainage. Waterlogged soil lacks oxygen, causing root rot and crop failure.",
    idealValue: "Well-drained",
  },
  {
    emoji: "🦠",
    title: "Microbial Life",
    desc: "Add biofertilizers like Rhizobium and PSB (Phosphate Solubilizing Bacteria) for natural nitrogen fixation.",
    idealValue: "Active biota",
  },
  {
    emoji: "🌿",
    title: "Cover Crops",
    desc: "Grow legumes like cowpea or moong between main seasons to fix 40–60 kg nitrogen per acre naturally.",
    idealValue: "40–60 kg N/acre",
  },
  {
    emoji: "🔄",
    title: "Crop Rotation",
    desc: "Never grow the same crop family consecutively. Rotate cereals \u2192 legumes \u2192 vegetables for optimal soil health.",
    idealValue: "3-year cycle",
  },
];

const irrigationMethods = [
  {
    emoji: "💧",
    title: "Drip Irrigation",
    efficiency: "90%+",
    cost: "₹30,000–60,000/acre",
    bestFor: "Vegetables, Fruits",
    saving: "50–70%",
    color: "#1565c0",
    pros: "Saves 50-70% water, reduces weeds, delivers nutrients",
    cons: "High initial cost; clogs if water is hard",
  },
  {
    emoji: "🌊",
    title: "Sprinkler Irrigation",
    efficiency: "75–85%",
    cost: "₹15,000–25,000/acre",
    bestFor: "Cereals, Oilseeds",
    saving: "30–50%",
    color: "#2e7d32",
    pros: "Even distribution; good for germination",
    cons: "Wind effect reduces efficiency",
  },
  {
    emoji: "🌾",
    title: "Flood / Furrow",
    efficiency: "40–60%",
    cost: "Low / Traditional",
    bestFor: "Rice, Sugarcane",
    saving: "Traditional method",
    color: "#6a1b9a",
    pros: "Low cost; easy to manage",
    cons: "High water loss by evaporation and runoff",
  },
  {
    emoji: "🪣",
    title: "Pitcher Irrigation",
    efficiency: "95%+",
    cost: "Very Low / DIY",
    bestFor: "Trees, Vegetables",
    saving: "Ancient efficient method",
    color: "#e65100",
    pros: "Extremely water-efficient; zero energy cost",
    cons: "Small scale only; labor to fill",
  },
  {
    emoji: "🌧️",
    title: "Rainwater Harvesting",
    efficiency: "Varies",
    cost: "₹20,000–80,000 (pond)",
    bestFor: "Dry land farming",
    saving: "Stores monsoon water for summer",
    color: "#00695c",
    pros: "Free water source; reduces runoff",
    cons: "Requires upfront investment and land",
  },
];

const pestMethods = [
  {
    emoji: "🌿",
    title: "Neem-Based Sprays",
    desc: "Mix 5 ml neem oil per litre water with a few drops of liquid soap. Spray every 10 days. Effective against aphids, whitefly, and mealybugs.",
    pests: "Aphids, Whitefly, Mealybugs",
  },
  {
    emoji: "🐞",
    title: "Biological Control",
    desc: "Release ladybirds (aphid predators) and use Trichogramma cards for stem borer control. No chemicals needed.",
    pests: "Aphids, Stem Borers",
  },
  {
    emoji: "🏺",
    title: "Pheromone Traps",
    desc: "Catch adult moths before egg-laying. Use 1 trap per 3–5 acres. Replace lure every 30 days for best results.",
    pests: "Moths, Bollworms",
  },
  {
    emoji: "🧄",
    title: "Garlic-Chili Spray",
    desc: "Blend 10 garlic cloves + 5 red chilies + 1 litre water. Strain and spray. Keeps caterpillars and beetles away.",
    pests: "Caterpillars, Beetles",
  },
  {
    emoji: "🐞",
    title: "Yellow Sticky Traps",
    desc: "Hang yellow sticky cards at crop height (1 per 500 sqm). Effective against whitefly, thrips, and leafminer adults.",
    pests: "Whitefly, Thrips, Leafminer",
  },
  {
    emoji: "🌳",
    title: "Companion Planting",
    desc: "Grow marigold around vegetable beds to repel nematodes and whiteflies. Basil near tomato repels aphids and hornworms.",
    pests: "Nematodes, Whitefly, Aphids",
  },
];

const organicPestTable = [
  {
    pest: "Aphid",
    crops: "Wheat, Mustard, Okra",
    symptoms: "Curled yellow leaves, sticky residue",
    remedy: "Neem spray (5ml/L)",
    prevention: "Grow marigold borders",
  },
  {
    pest: "Brown Planthopper",
    crops: "Rice",
    symptoms: "Brown circular patches, lodging",
    remedy: "Pongamia oil spray",
    prevention: "Avoid over-fertilizing N",
  },
  {
    pest: "Bollworm",
    crops: "Cotton, Tomato, Chickpea",
    symptoms: "Bore holes in bolls/fruits, frass",
    remedy: "Bt (Bacillus thuringiensis)",
    prevention: "Pheromone trap monitoring",
  },
  {
    pest: "Stem Borer",
    crops: "Rice, Maize, Sugarcane",
    symptoms: "Dead heart in young plants",
    remedy: "Trichogramma cards",
    prevention: "Remove crop residue post-harvest",
  },
  {
    pest: "Whitefly",
    crops: "Cotton, Tomato, Okra",
    symptoms: "Yellowing, sooty mold",
    remedy: "Yellow sticky traps + neem",
    prevention: "Use reflective mulch",
  },
  {
    pest: "Thrips",
    crops: "Onion, Chili, Cotton",
    symptoms: "Silver leaf scars, distorted growth",
    remedy: "Spinosad spray (organic)",
    prevention: "Blue sticky traps",
  },
  {
    pest: "Fruit Fly",
    crops: "Cucurbits, Mango",
    symptoms: "Maggot-infested fruit, early drop",
    remedy: "Bait traps (protein + malathion)",
    prevention: "Bag developing fruits",
  },
  {
    pest: "Leaf Eating Caterpillar",
    crops: "Brinjal, Cabbage",
    symptoms: "Ragged holes in leaves",
    remedy: "Garlic-chili spray",
    prevention: "Handpicking + egg removal",
  },
];

const soilHealthIndicators = [
  {
    emoji: "🌡️",
    title: "Soil Temperature",
    ideal: "20–30°C for most crops",
    type: "Physical",
    desc: "Too cold slows germination; too hot kills seedlings. Use mulch to regulate temperature.",
  },
  {
    emoji: "🧪",
    title: "Soil pH",
    ideal: "6.0–7.0 (most crops)",
    type: "Chemical",
    desc: "pH controls nutrient availability. Below 5.5 add lime; above 8.0 add sulfur or FYM.",
  },
  {
    emoji: "💧",
    title: "Moisture Level",
    ideal: "60–80% field capacity",
    type: "Physical",
    desc: "Check by squeezing soil in hand — should hold shape but break apart easily.",
  },
  {
    emoji: "🦴",
    title: "Earthworm Count",
    ideal: ">10 worms per sq.ft.",
    type: "Biological",
    desc: "Earthworms indicate good organic matter and microbial activity. Count in a 30x30 cm pit, 30 cm deep.",
  },
  {
    emoji: "🌱",
    title: "Organic Carbon",
    ideal: ">0.75% (good: >1.5%)",
    type: "Chemical",
    desc: "Low OC means poor water holding and reduced microbial life. Add compost/FYM annually.",
  },
  {
    emoji: "🌿",
    title: "Root Depth",
    ideal: "30–60 cm (most crops)",
    type: "Physical",
    desc: "Shallow roots indicate compaction or poor drainage. Use deep tillage and subsoiling every 3-4 years.",
  },
];

export default function FarmPage() {
  const { t } = useLang();
  const [active, setActive] = useState<Category>("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered =
    active === "all" ? crops : crops.filter((c) => c.category === active);

  return (
    <main>
      <section
        className="flex items-center justify-center text-center"
        style={{
          background: "#3a6b1e",
          minHeight: "35vh",
          padding: "3.5rem 1rem",
        }}
      >
        <div>
          <h1
            className="font-bold text-4xl md:text-5xl mb-3"
            style={{ color: "#ffffff", fontFamily: "Fraunces, Georgia, serif" }}
          >
            {t("farm.hero")}
          </h1>
          <p style={{ color: "#c8e0b0" }}>
            Explore 35+ organic crops with expert growing guides
          </p>
        </div>
      </section>

      <section
        data-ocid="farm.crops.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              type="button"
              key={cat.key}
              data-ocid={`farm.filter.${cat.key}.tab`}
              onClick={() => setActive(cat.key)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                background: active === cat.key ? "#3a6b1e" : "#f0ebe3",
                border:
                  active === cat.key
                    ? "1px solid #3a6b1e"
                    : "1px solid #e2d8cc",
                color: active === cat.key ? "#ffffff" : "#6b6554",
              }}
            >
              {t(cat.labelKey as Parameters<typeof t>[0])}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((crop, idx) => (
            <div
              key={crop.id}
              data-ocid={`farm.crop.item.${idx + 1}`}
              className="glass-card overflow-hidden"
            >
              {crop.image ? (
                <img
                  src={crop.image}
                  alt={crop.name}
                  className="w-full h-28 object-cover"
                />
              ) : (
                <div
                  className="w-full h-28 flex items-center justify-center text-5xl"
                  style={{ background: "#edf3e8" }}
                >
                  {crop.emoji}
                </div>
              )}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3
                    className="font-bold text-lg"
                    style={{ color: "#2c2416" }}
                  >
                    {crop.name}
                  </h3>
                  {crop.marketPriceRange && (
                    <span
                      className="px-2 py-0.5 rounded-full text-xs font-medium"
                      style={{ background: "#fef9c3", color: "#a16207" }}
                    >
                      {crop.marketPriceRange}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span
                    className="px-2 py-0.5 rounded-full text-xs"
                    style={{ background: "#edf3e8", color: "#3a6b1e" }}
                  >
                    {crop.season}
                  </span>
                  <span
                    className="px-2 py-0.5 rounded-full text-xs"
                    style={{ background: "#f0ebe3", color: "#6b6554" }}
                  >
                    {crop.duration}
                  </span>
                  {crop.climateZone && (
                    <span
                      className="px-2 py-0.5 rounded-full text-xs"
                      style={{ background: "#dbeafe", color: "#1d4ed8" }}
                    >
                      {crop.climateZone}
                    </span>
                  )}
                </div>
                <button
                  type="button"
                  data-ocid={`farm.crop.expand.${idx + 1}`}
                  onClick={() =>
                    setExpanded(expanded === crop.id ? null : crop.id)
                  }
                  className="flex items-center gap-1 text-sm transition-colors"
                  style={{ color: "#3a6b1e" }}
                >
                  {expanded === crop.id ? (
                    <>
                      {t("farm.collapse")} <ChevronUp size={14} />
                    </>
                  ) : (
                    <>
                      {t("farm.expand")} <ChevronDown size={14} />
                    </>
                  )}
                </button>
                {expanded === crop.id && (
                  <div className="mt-3 space-y-1.5">
                    {[
                      { label: t("farm.soil"), value: crop.soil },
                      { label: t("farm.water"), value: crop.water },
                      { label: t("farm.states"), value: crop.states },
                      { label: t("farm.fertilizer"), value: crop.fertilizer },
                    ].map((row) => (
                      <div key={row.label} className="text-xs">
                        <span style={{ color: "#3a6b1e" }}>{row.label}: </span>
                        <span style={{ color: "#6b6554" }}>{row.value}</span>
                      </div>
                    ))}
                    {crop.soilPH && (
                      <div className="text-xs">
                        <span style={{ color: "#3a6b1e" }}>Soil pH: </span>
                        <span style={{ color: "#6b6554" }}>{crop.soilPH}</span>
                      </div>
                    )}
                    {crop.npkRequirement && (
                      <div className="text-xs">
                        <span style={{ color: "#3a6b1e" }}>NPK: </span>
                        <span style={{ color: "#6b6554" }}>
                          {crop.npkRequirement}
                        </span>
                      </div>
                    )}
                    {crop.harvestingIndicators && (
                      <div className="text-xs">
                        <span style={{ color: "#3a6b1e" }}>
                          Harvest signs:{" "}
                        </span>
                        <span style={{ color: "#6b6554" }}>
                          {crop.harvestingIndicators}
                        </span>
                      </div>
                    )}
                    {crop.postHarvest && (
                      <div className="text-xs">
                        <span style={{ color: "#3a6b1e" }}>Post-harvest: </span>
                        <span style={{ color: "#6b6554" }}>
                          {crop.postHarvest}
                        </span>
                      </div>
                    )}
                    {crop.commonDiseases && crop.commonDiseases.length > 0 && (
                      <div className="text-xs">
                        <span style={{ color: "#dc2626" }}>
                          Common diseases:{" "}
                        </span>
                        <span style={{ color: "#6b6554" }}>
                          {crop.commonDiseases.join(", ")}
                        </span>
                      </div>
                    )}
                    <div className="mt-2">
                      <VoiceReader
                        text={`${crop.name}. Season: ${crop.season}. Soil: ${crop.soil}. Duration: ${crop.duration}`}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        data-ocid="farm.calendar.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <h2
          className="font-bold text-2xl mb-6"
          style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
        >
          {t("farm.calendar")}
        </h2>
        <div className="glass-card p-5 overflow-x-auto">
          <table className="w-full text-sm min-w-[600px]">
            <thead>
              <tr style={{ borderBottom: "1px solid #e2d8cc" }}>
                {calendarHeaders.map((h) => (
                  <th
                    key={h}
                    className="py-2 px-2 text-left"
                    style={{ color: "#3a6b1e" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {calendarRows.map((row) => (
                <tr
                  key={row.name}
                  style={{ borderBottom: "1px solid #e2d8cc" }}
                >
                  <td
                    className="py-2 px-2 font-medium"
                    style={{ color: "#2c2416" }}
                  >
                    {row.name}
                  </td>
                  {calendarHeaders.slice(1).map((monthName, mi) => (
                    <td key={monthName} className="py-2 px-2">
                      {row.months[mi] === 1 ? (
                        <div
                          className="w-full h-4 rounded"
                          style={{ background: "#3a6b1e" }}
                        />
                      ) : null}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Soil Health Indicators */}
      <section
        data-ocid="farm.soil_indicators.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <h2
          className="font-bold text-2xl md:text-3xl mb-3"
          style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
        >
          Soil Health Indicators
        </h2>
        <p className="mb-8 text-sm" style={{ color: "#6b6554" }}>
          Monitor these indicators to maintain healthy, productive soil
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {soilHealthIndicators.map((item, i) => (
            <div
              key={item.title}
              data-ocid={`farm.soil_indicator.item.${i + 1}`}
              className="glass-card p-5"
            >
              <div className="flex items-start gap-3 mb-2">
                <span className="text-2xl">{item.emoji}</span>
                <div>
                  <h3 className="font-bold" style={{ color: "#2c2416" }}>
                    {item.title}
                  </h3>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background:
                        item.type === "Physical"
                          ? "#dbeafe"
                          : item.type === "Chemical"
                            ? "#fef9c3"
                            : "#dcfce7",
                      color:
                        item.type === "Physical"
                          ? "#1d4ed8"
                          : item.type === "Chemical"
                            ? "#a16207"
                            : "#15803d",
                    }}
                  >
                    {item.type}
                  </span>
                </div>
              </div>
              <p
                className="text-xs mb-2 font-medium"
                style={{ color: "#3a6b1e" }}
              >
                Ideal: {item.ideal}
              </p>
              <p className="text-sm" style={{ color: "#6b6554" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Soil Health Guide */}
      <section
        data-ocid="farm.soil_health.section"
        className="py-12 px-4 max-w-7xl mx-auto"
        style={{ background: "#f5f0e8" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-bold text-2xl md:text-3xl mb-8"
            style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
          >
            Soil Health Management
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {soilGuide.map((item, i) => (
              <div
                key={item.title}
                data-ocid={`farm.soil.item.${i + 1}`}
                className="glass-card p-5"
              >
                <div className="text-3xl mb-2">{item.emoji}</div>
                <h3 className="font-semibold mb-1" style={{ color: "#2c2416" }}>
                  {item.title}
                </h3>
                <p
                  className="text-xs font-medium mb-2"
                  style={{ color: "#3a6b1e" }}
                >
                  Target: {item.idealValue}
                </p>
                <p className="text-sm" style={{ color: "#6b6554" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Water Management Guide */}
      <section
        data-ocid="farm.irrigation.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <h2
          className="font-bold text-2xl md:text-3xl mb-3"
          style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
        >
          Water Management Guide
        </h2>
        <p className="mb-8 text-sm" style={{ color: "#6b6554" }}>
          Choose the right irrigation method to maximize water efficiency and
          reduce costs
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {irrigationMethods.map((method, i) => (
            <div
              key={method.title}
              data-ocid={`farm.irrigation.item.${i + 1}`}
              className="glass-card p-5"
            >
              <div className="text-3xl mb-2">{method.emoji}</div>
              <h3 className="font-bold mb-3" style={{ color: method.color }}>
                {method.title}
              </h3>
              <div className="space-y-1 text-xs">
                <p>
                  <span style={{ color: "#3a6b1e" }}>Efficiency: </span>
                  <span className="font-semibold" style={{ color: "#2c2416" }}>
                    {method.efficiency}
                  </span>
                </p>
                <p>
                  <span style={{ color: "#3a6b1e" }}>Cost: </span>
                  <span style={{ color: "#6b6554" }}>{method.cost}</span>
                </p>
                <p>
                  <span style={{ color: "#3a6b1e" }}>Best for: </span>
                  <span style={{ color: "#6b6554" }}>{method.bestFor}</span>
                </p>
                <p>
                  <span style={{ color: "#16a34a" }}>✓ </span>
                  <span style={{ color: "#6b6554" }}>{method.pros}</span>
                </p>
                <p>
                  <span style={{ color: "#dc2626" }}>⚠ </span>
                  <span style={{ color: "#6b6554" }}>{method.cons}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Organic Pest Management Table */}
      <section
        data-ocid="farm.pest_table.section"
        className="py-12 px-4 max-w-7xl mx-auto"
        style={{ background: "#f5f0e8" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-bold text-2xl md:text-3xl mb-3"
            style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
          >
            Organic Pest Management Guide
          </h2>
          <p className="mb-8 text-sm" style={{ color: "#6b6554" }}>
            Identify and treat pests organically — no harmful chemicals
          </p>
          <div className="glass-card overflow-x-auto">
            <table className="w-full text-xs min-w-[700px]">
              <thead>
                <tr style={{ background: "#edf3e8" }}>
                  {[
                    "Pest",
                    "Affected Crops",
                    "Symptoms",
                    "Organic Remedy",
                    "Prevention",
                  ].map((h) => (
                    <th
                      key={h}
                      className="py-3 px-3 text-left font-semibold"
                      style={{ color: "#3a6b1e" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {organicPestTable.map((row, i) => (
                  <tr
                    key={row.pest}
                    data-ocid={`farm.pest.row.${i + 1}`}
                    style={{
                      borderTop: "1px solid #e2d8cc",
                      background: i % 2 === 0 ? "#ffffff" : "#faf7f2",
                    }}
                  >
                    <td
                      className="py-3 px-3 font-semibold"
                      style={{ color: "#2c2416" }}
                    >
                      {row.pest}
                    </td>
                    <td className="py-3 px-3" style={{ color: "#6b6554" }}>
                      {row.crops}
                    </td>
                    <td className="py-3 px-3" style={{ color: "#6b6554" }}>
                      {row.symptoms}
                    </td>
                    <td className="py-3 px-3" style={{ color: "#15803d" }}>
                      {row.remedy}
                    </td>
                    <td className="py-3 px-3" style={{ color: "#6b6554" }}>
                      {row.prevention}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pest Management Cards */}
      <section
        data-ocid="farm.pest_management.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <h2
          className="font-bold text-2xl md:text-3xl mb-8"
          style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
        >
          Organic Pest Management Methods
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {pestMethods.map((method, i) => (
            <div
              key={method.title}
              data-ocid={`farm.pest.item.${i + 1}`}
              className="glass-card p-5"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: "#edf3e8" }}
                >
                  {method.emoji}
                </div>
                <div>
                  <h3 className="font-bold mb-1" style={{ color: "#2c2416" }}>
                    {method.title}
                  </h3>
                  <p className="text-xs mb-2" style={{ color: "#dc2626" }}>
                    Targets: {method.pests}
                  </p>
                  <p className="text-sm" style={{ color: "#6b6554" }}>
                    {method.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
