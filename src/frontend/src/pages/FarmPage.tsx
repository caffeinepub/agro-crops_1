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
    emoji: "\uD83E\uDDEA",
    title: "Soil Testing",
    desc: "Test soil pH and nutrients every 6 months. Ideal pH 6–7 for most crops. Contact KVK for free testing.",
  },
  {
    emoji: "\uD83C\uDF31",
    title: "Organic Matter",
    desc: "Add compost or vermicompost 2–4 tonnes per acre annually to improve soil structure and fertility.",
  },
  {
    emoji: "\uD83D\uDCA7",
    title: "Drainage",
    desc: "Ensure proper field drainage. Waterlogged soil lacks oxygen, causing root rot and crop failure.",
  },
  {
    emoji: "\uD83E\uDDA0",
    title: "Microbial Life",
    desc: "Add biofertilizers like Rhizobium and PSB (Phosphate Solubilizing Bacteria) for natural nitrogen fixation.",
  },
  {
    emoji: "\uD83C\uDF3F",
    title: "Cover Crops",
    desc: "Grow legumes like cowpea or moong between main seasons to fix 40–60 kg nitrogen per acre naturally.",
  },
  {
    emoji: "\uD83D\uDD04",
    title: "Crop Rotation",
    desc: "Never grow the same crop family consecutively. Rotate cereals \u2192 legumes \u2192 vegetables for optimal soil health.",
  },
];

const irrigationMethods = [
  {
    emoji: "\uD83D\uDCA7",
    title: "Drip Irrigation",
    efficiency: "90%+",
    cost: "₹30,000–60,000/acre",
    bestFor: "Vegetables, Fruits",
    saving: "50–70%",
    color: "#1565c0",
  },
  {
    emoji: "\uD83C\uDF0A",
    title: "Sprinkler Irrigation",
    efficiency: "75–85%",
    cost: "₹15,000–25,000/acre",
    bestFor: "Cereals, Oilseeds",
    saving: "30–50%",
    color: "#2e7d32",
  },
  {
    emoji: "\uD83C\uDF3E",
    title: "Flood / Furrow",
    efficiency: "40–60%",
    cost: "Low / Traditional",
    bestFor: "Rice, Sugarcane",
    saving: "Traditional method",
    color: "#6a1b9a",
  },
  {
    emoji: "\uD83E\uDEA3",
    title: "Pitcher Irrigation",
    efficiency: "95%+",
    cost: "Very Low / DIY",
    bestFor: "Trees, Vegetables",
    saving: "Ancient efficient method",
    color: "#e65100",
  },
];

const pestMethods = [
  {
    emoji: "\uD83C\uDF3F",
    title: "Neem-Based Sprays",
    desc: "Mix 5 ml neem oil per litre water with a few drops of liquid soap. Spray every 10 days. Effective against aphids, whitefly, and mealybugs.",
  },
  {
    emoji: "\uD83D\uDC1E",
    title: "Biological Control",
    desc: "Release ladybirds (aphid predators) and use Trichogramma cards for stem borer control. No chemicals needed.",
  },
  {
    emoji: "\uD83C\uDFFA",
    title: "Pheromone Traps",
    desc: "Catch adult moths before egg-laying. Use 1 trap per 3–5 acres. Replace lure every 30 days for best results.",
  },
  {
    emoji: "\uD83E\uDDC4",
    title: "Garlic-Chili Spray",
    desc: "Blend 10 garlic cloves + 5 red chilies + 1 litre water. Strain and spray. Keeps caterpillars and beetles away.",
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
                <h3
                  className="font-bold text-lg mb-2"
                  style={{ color: "#2c2416" }}
                >
                  {crop.name}
                </h3>
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
                <h3 className="font-semibold mb-2" style={{ color: "#2c2416" }}>
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: "#6b6554" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Irrigation Methods */}
      <section
        data-ocid="farm.irrigation.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <h2
          className="font-bold text-2xl md:text-3xl mb-8"
          style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
        >
          Irrigation Methods
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
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
                  <span style={{ color: "#3a6b1e" }}>Water saving: </span>
                  <span style={{ color: "#6b6554" }}>{method.saving}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pest Management */}
      <section
        data-ocid="farm.pest_management.section"
        className="py-12 px-4 max-w-7xl mx-auto"
        style={{ background: "#f5f0e8" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-bold text-2xl md:text-3xl mb-8"
            style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
          >
            Organic Pest Management
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                    <p className="text-sm" style={{ color: "#6b6554" }}>
                      {method.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
