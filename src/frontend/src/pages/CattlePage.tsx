import { Search } from "lucide-react";
import { useState } from "react";
import { useLang } from "../contexts/LangContext";
import { type Animal, animals } from "../data/cattle";

type CatFilter = "all" | Animal["category"];

const filters: { key: CatFilter; labelKey: string }[] = [
  { key: "all", labelKey: "cattle.filter.all" },
  { key: "dairy", labelKey: "cattle.filter.dairy" },
  { key: "draught", labelKey: "cattle.filter.draught" },
  { key: "poultry", labelKey: "cattle.filter.poultry" },
  { key: "goat", labelKey: "cattle.filter.goat" },
  { key: "sheep", labelKey: "cattle.filter.sheep" },
  { key: "pig", labelKey: "cattle.filter.pig" },
  { key: "aquaculture", labelKey: "cattle.filter.aquaculture" },
];

const vaccinationSchedule = [
  {
    disease: "Foot & Mouth Disease (FMD)",
    animal: "Cattle / Buffalo",
    vaccine: "FMD Polyvalent Vaccine",
    timing: "4–6 months age",
    frequency: "Every 6 months",
  },
  {
    disease: "Haemorrhagic Septicaemia (HS)",
    animal: "Cattle",
    vaccine: "HS Alum Precipitated Vaccine",
    timing: "Before monsoon",
    frequency: "Annually",
  },
  {
    disease: "Black Quarter (BQ)",
    animal: "Cattle",
    vaccine: "BQ Spore Vaccine",
    timing: "Before monsoon",
    frequency: "Annually",
  },
  {
    disease: "Brucellosis",
    animal: "Female cattle only",
    vaccine: "Brucella Abortus S19",
    timing: "4–8 months age",
    frequency: "Once in lifetime",
  },
  {
    disease: "PPR",
    animal: "Goat / Sheep",
    vaccine: "PPR Live Attenuated Vaccine",
    timing: "3–4 months age",
    frequency: "Every 3 years",
  },
];

const diseases = [
  {
    emoji: "🤒",
    title: "Foot & Mouth Disease",
    symptoms: "Blisters on feet/mouth, excessive drooling, lameness",
    prevention: "Vaccination every 6 months + farm disinfection",
    treatment: "Isolate animal, vet consultation immediately",
  },
  {
    emoji: "🫁",
    title: "Pneumonia",
    symptoms: "Cough, high fever, labored breathing, nasal discharge",
    prevention: "Dry housing, avoid cold drafts, good ventilation",
    treatment: "Antibiotics as prescribed by veterinarian",
  },
  {
    emoji: "🐛",
    title: "Internal Parasites",
    symptoms: "Weight loss, diarrhea, pale gums, rough coat",
    prevention: "Deworm every 3 months with rotation of drugs",
    treatment: "Anthelmintic drugs — consult vet for dosage",
  },
  {
    emoji: "🔥",
    title: "Mastitis",
    symptoms: "Swollen udder, reduced milk yield, clots in milk",
    prevention: "Proper milking hygiene, teat dipping post-milking",
    treatment: "Antibiotic intramammary infusion by vet",
  },
  {
    emoji: "😵",
    title: "Heat Stress",
    symptoms: "Panting, reduced feed intake, less milk production",
    prevention: "Shade structures, fans, adequate fresh water",
    treatment: "Electrolytes in water, cool water bath, reduce crowding",
  },
];

const profitability = [
  {
    emoji: "🐄",
    animal: "Dairy Cow",
    investment: "₹60,000–80,000",
    monthlyIncome: "₹8,000–15,000",
    payback: "6–8 months",
  },
  {
    emoji: "🐐",
    animal: "Goat Farming",
    investment: "₹15,000–20,000 per pair",
    monthlyIncome: "₹5,000–8,000",
    payback: "4–6 months",
  },
  {
    emoji: "🐔",
    animal: "Poultry (100 birds)",
    investment: "₹25,000–35,000",
    monthlyIncome: "₹8,000–12,000",
    payback: "3–4 months",
  },
  {
    emoji: "🐑",
    animal: "Sheep Farming",
    investment: "₹12,000–18,000 per pair",
    monthlyIncome: "₹3,000–5,000",
    payback: "5–7 months",
  },
];

const nutritionGuide = [
  {
    feedType: "Green Fodder (Napier Grass)",
    protein: "8–10%",
    energy: "Medium",
    recommendedFor: "Dairy cows, buffaloes",
    notes: "Fresh cut daily; 30–35 kg/day/cow",
  },
  {
    feedType: "Dry Fodder (Wheat Straw)",
    protein: "3–4%",
    energy: "Low",
    recommendedFor: "All ruminants",
    notes: "Base roughage; 8–10 kg/day",
  },
  {
    feedType: "Concentrate Feed",
    protein: "18–22%",
    energy: "High",
    recommendedFor: "Milking cows, growing calves",
    notes: "3–6 kg/day based on milk yield",
  },
  {
    feedType: "Mineral Mixture",
    protein: "N/A",
    energy: "N/A",
    recommendedFor: "All animals",
    notes: "50–100 g/day; improves reproduction",
  },
  {
    feedType: "Maize Silage",
    protein: "7–9%",
    energy: "High",
    recommendedFor: "Dairy cows, buffaloes",
    notes: "Stored fermented feed; 15–25 kg/day",
  },
  {
    feedType: "Poultry Layer Mash",
    protein: "17–18%",
    energy: "High",
    recommendedFor: "Layer hens",
    notes: "110–120 g/bird/day + calcium",
  },
];

const healthIndicators = [
  {
    emoji: "🌡️",
    title: "Body Temperature",
    normal: "38.5–39.5°C (cattle)",
    alert: "Above 40°C or below 38°C",
    color: "#dc2626",
  },
  {
    emoji: "💗",
    title: "Pulse Rate",
    normal: "60–80 beats/min (cattle)",
    alert: "Above 100 or below 40",
    color: "#dc2626",
  },
  {
    emoji: "🪸",
    title: "Respiration Rate",
    normal: "15–25 breaths/min (cattle)",
    alert: "Above 40 (signs of heat stress)",
    color: "#dc2626",
  },
  {
    emoji: "🥛",
    title: "Daily Milk Yield",
    normal: "Consistent with breed average",
    alert: "Sudden drop >20% = illness",
    color: "#1565c0",
  },
  {
    emoji: "🍽️",
    title: "Feed Intake",
    normal: "Normal appetite maintained",
    alert: "Reduced appetite = early illness sign",
    color: "#d97706",
  },
  {
    emoji: "👀",
    title: "Eyes & Coat",
    normal: "Bright eyes, shiny coat",
    alert: "Dull eyes, rough coat = malnutrition",
    color: "#6a1b9a",
  },
];

const cattleSchemes = [
  {
    emoji: "🐄",
    name: "Rashtriya Gokul Mission",
    amount: "₹2,025 Crore",
    benefit:
      "Development of indigenous cattle breeds, bull mother farm support, frozen semen",
    link: "https://dahd.nic.in/",
  },
  {
    emoji: "💰",
    name: "NADCP (National Animal Disease Control Programme)",
    amount: "₹13,343 Crore",
    benefit:
      "100% vaccination for FMD and Brucellosis. Targets disease-free status by 2030",
    link: "https://dahd.nic.in/",
  },
  {
    emoji: "🌾",
    name: "National Livestock Mission",
    amount: "₹325 Crore/year",
    benefit:
      "Entrepreneurship development, fodder development, breed improvement schemes",
    link: "https://nlm.udyamimitra.in/",
  },
  {
    emoji: "📊",
    name: "PM Matsya Sampada Yojana",
    amount: "₹20,050 Crore",
    benefit:
      "40–60% subsidy for fishpond construction, equipment, and fingerling procurement",
    link: "https://pmmsy.dof.gov.in/",
  },
];

export default function CattlePage() {
  const { t } = useLang();
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<CatFilter>("all");

  const filtered = animals.filter((a) => {
    const matchCat = activeFilter === "all" || a.category === activeFilter;
    const matchQ = !query || a.name.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

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
            {t("cattle.hero")}
          </h1>
          <p style={{ color: "#c8e0b0" }}>Complete guide to 15+ farm animals</p>
        </div>
      </section>

      <section
        data-ocid="cattle.list.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <div className="relative mb-6 max-w-md">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2"
            style={{ color: "#3a6b1e" }}
          />
          <input
            data-ocid="cattle.search.input"
            type="text"
            placeholder={t("cattle.search")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl text-sm outline-none"
            style={{
              background: "#ffffff",
              border: "1px solid #e2d8cc",
              color: "#2c2416",
            }}
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              type="button"
              key={f.key}
              data-ocid={`cattle.filter.${f.key}.tab`}
              onClick={() => setActiveFilter(f.key)}
              className="px-4 py-1.5 rounded-full text-sm transition-all"
              style={{
                background: activeFilter === f.key ? "#3a6b1e" : "#f0ebe3",
                border:
                  activeFilter === f.key
                    ? "1px solid #3a6b1e"
                    : "1px solid #e2d8cc",
                color: activeFilter === f.key ? "#ffffff" : "#6b6554",
              }}
            >
              {t(f.labelKey as Parameters<typeof t>[0])}
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div data-ocid="cattle.empty_state" className="text-center py-20">
            <p style={{ color: "#6b6554" }}>No animals found</p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((animal, idx) => (
            <div
              key={animal.id}
              data-ocid={`cattle.animal.item.${idx + 1}`}
              className="glass-card overflow-hidden"
            >
              {animal.image ? (
                <div className="relative w-full h-28">
                  <img
                    src={animal.image}
                    alt={animal.name}
                    className="w-full h-28 object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      const fallback = e.currentTarget
                        .nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = "flex";
                    }}
                  />
                  <div
                    className="w-full h-28 items-center justify-center text-5xl absolute inset-0"
                    style={{ background: "#edf3e8", display: "none" }}
                  >
                    {animal.emoji}
                  </div>
                </div>
              ) : (
                <div
                  className="w-full h-28 flex items-center justify-center text-5xl"
                  style={{ background: "#edf3e8" }}
                >
                  {animal.emoji}
                </div>
              )}
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3
                    className="font-bold text-lg"
                    style={{ color: "#2c2416" }}
                  >
                    {animal.name}
                  </h3>
                  <span
                    className="px-2 py-0.5 rounded-full text-xs capitalize"
                    style={{ background: "#edf3e8", color: "#3a6b1e" }}
                  >
                    {animal.category}
                  </span>
                </div>
                <div className="space-y-1.5 text-xs">
                  <p>
                    <span style={{ color: "#3a6b1e" }}>
                      {t("cattle.breed")}:{" "}
                    </span>
                    <span style={{ color: "#6b6554" }}>{animal.breed}</span>
                  </p>
                  <p>
                    <span style={{ color: "#3a6b1e" }}>
                      {t("cattle.feed")}:{" "}
                    </span>
                    <span style={{ color: "#6b6554" }}>{animal.feed}</span>
                  </p>
                  <p>
                    <span style={{ color: "#3a6b1e" }}>
                      {t("cattle.health")}:{" "}
                    </span>
                    <span style={{ color: "#6b6554" }}>{animal.health}</span>
                  </p>
                  <p>
                    <span style={{ color: "#3a6b1e" }}>
                      {t("cattle.benefits")}:{" "}
                    </span>
                    <span style={{ color: "#6b6554" }}>{animal.benefits}</span>
                  </p>
                </div>
                {/* New detailed fields */}
                <div
                  className="mt-3 pt-3 grid grid-cols-2 gap-1 text-xs"
                  style={{ borderTop: "1px solid #e2d8cc" }}
                >
                  {animal.milkYieldLitersPerDay && (
                    <div
                      className="rounded-lg p-1.5 text-center"
                      style={{ background: "#edf3e8" }}
                    >
                      <p style={{ color: "#6b6554" }}>Milk Yield</p>
                      <p className="font-semibold" style={{ color: "#3a6b1e" }}>
                        {animal.milkYieldLitersPerDay}
                      </p>
                    </div>
                  )}
                  {animal.marketValueRange && (
                    <div
                      className="rounded-lg p-1.5 text-center"
                      style={{ background: "#fef9c3" }}
                    >
                      <p style={{ color: "#6b6554" }}>Market Value</p>
                      <p className="font-semibold" style={{ color: "#a16207" }}>
                        {animal.marketValueRange}
                      </p>
                    </div>
                  )}
                  {animal.gestationDays && animal.gestationDays > 0 ? (
                    <div
                      className="rounded-lg p-1.5 text-center"
                      style={{ background: "#dbeafe" }}
                    >
                      <p style={{ color: "#6b6554" }}>Gestation</p>
                      <p className="font-semibold" style={{ color: "#1d4ed8" }}>
                        {animal.gestationDays} days
                      </p>
                    </div>
                  ) : null}
                  {animal.lifespan && (
                    <div
                      className="rounded-lg p-1.5 text-center"
                      style={{ background: "#f0ebe3" }}
                    >
                      <p style={{ color: "#6b6554" }}>Lifespan</p>
                      <p className="font-semibold" style={{ color: "#6b6554" }}>
                        {animal.lifespan}
                      </p>
                    </div>
                  )}
                  {animal.waterRequirementLiters && (
                    <div
                      className="rounded-lg p-1.5 text-center"
                      style={{ background: "#dbeafe" }}
                    >
                      <p style={{ color: "#6b6554" }}>Water/day</p>
                      <p className="font-semibold" style={{ color: "#1d4ed8" }}>
                        {animal.waterRequirementLiters} L
                      </p>
                    </div>
                  )}
                  {animal.subsidyAvailable && (
                    <div
                      className="rounded-lg p-1.5 col-span-2"
                      style={{ background: "#dcfce7" }}
                    >
                      <p className="text-xs" style={{ color: "#6b6554" }}>
                        Subsidy:
                      </p>
                      <p
                        className="font-medium text-xs"
                        style={{ color: "#15803d" }}
                      >
                        {animal.subsidyAvailable}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        data-ocid="cattle.benefits.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <h2
          className="font-bold text-2xl mb-6"
          style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
        >
          Benefits of Livestock Farming
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              emoji: "🥛",
              title: "Milk Production",
              desc: "Daily income from dairy animals. A good cow yields 10–20 litres/day.",
            },
            {
              emoji: "🚜",
              title: "Draught Power",
              desc: "Bullock power for ploughing. Saves fuel costs on small farms.",
            },
            {
              emoji: "🍖",
              title: "Meat & Eggs",
              desc: "Protein-rich food production and additional income sources.",
            },
            {
              emoji: "🌿",
              title: "Manure",
              desc: "Natural fertilizer worth ₹5,000–10,000/year per animal.",
            },
          ].map((b) => (
            <div key={b.title} className="glass-card p-4 text-center">
              <div className="text-3xl mb-2">{b.emoji}</div>
              <h4
                className="font-semibold text-sm mb-1"
                style={{ color: "#2c2416" }}
              >
                {b.title}
              </h4>
              <p className="text-xs" style={{ color: "#6b6554" }}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Animal Nutrition Guide */}
      <section
        data-ocid="cattle.nutrition.section"
        className="py-12 px-4 max-w-7xl mx-auto"
        style={{ background: "#f5f0e8" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-bold text-2xl md:text-3xl mb-3"
            style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
          >
            Animal Nutrition Guide
          </h2>
          <p className="mb-6 text-sm" style={{ color: "#6b6554" }}>
            Feed types, protein content, and recommendations for healthy
            livestock
          </p>
          <div className="glass-card overflow-x-auto">
            <table className="w-full text-sm min-w-[700px]">
              <thead>
                <tr style={{ background: "#edf3e8" }}>
                  {[
                    "Feed Type",
                    "Protein %",
                    "Energy",
                    "Recommended For",
                    "Notes",
                  ].map((h) => (
                    <th
                      key={h}
                      className="py-3 px-4 text-left font-semibold"
                      style={{ color: "#3a6b1e" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {nutritionGuide.map((row, i) => (
                  <tr
                    key={row.feedType}
                    data-ocid={`cattle.nutrition.row.${i + 1}`}
                    style={{
                      borderTop: "1px solid #e2d8cc",
                      background: i % 2 === 0 ? "#ffffff" : "#faf7f2",
                    }}
                  >
                    <td
                      className="py-3 px-4 font-medium"
                      style={{ color: "#2c2416" }}
                    >
                      {row.feedType}
                    </td>
                    <td className="py-3 px-4" style={{ color: "#6b6554" }}>
                      {row.protein}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className="px-2 py-0.5 rounded-full text-xs"
                        style={{
                          background:
                            row.energy === "High"
                              ? "#dcfce7"
                              : row.energy === "Medium"
                                ? "#fef9c3"
                                : "#f0ebe3",
                          color:
                            row.energy === "High"
                              ? "#15803d"
                              : row.energy === "Medium"
                                ? "#a16207"
                                : "#6b6554",
                        }}
                      >
                        {row.energy}
                      </span>
                    </td>
                    <td className="py-3 px-4" style={{ color: "#6b6554" }}>
                      {row.recommendedFor}
                    </td>
                    <td
                      className="py-3 px-4 text-xs"
                      style={{ color: "#6b6554" }}
                    >
                      {row.notes}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Common Health Indicators */}
      <section
        data-ocid="cattle.health_indicators.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <h2
          className="font-bold text-2xl md:text-3xl mb-3"
          style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
        >
          Common Health Indicators
        </h2>
        <p className="mb-8 text-sm" style={{ color: "#6b6554" }}>
          Monitor these daily to catch illness early and reduce treatment costs
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {healthIndicators.map((indicator, i) => (
            <div
              key={indicator.title}
              data-ocid={`cattle.health_indicator.item.${i + 1}`}
              className="glass-card p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-3xl">{indicator.emoji}</span>
                <h3 className="font-bold" style={{ color: "#2c2416" }}>
                  {indicator.title}
                </h3>
              </div>
              <div className="space-y-2">
                <div
                  className="rounded-lg p-2"
                  style={{ background: "#dcfce7" }}
                >
                  <p className="text-xs" style={{ color: "#6b6554" }}>
                    Normal range
                  </p>
                  <p
                    className="font-semibold text-sm"
                    style={{ color: "#15803d" }}
                  >
                    {indicator.normal}
                  </p>
                </div>
                <div
                  className="rounded-lg p-2"
                  style={{ background: "#fee2e2" }}
                >
                  <p className="text-xs" style={{ color: "#6b6554" }}>
                    Alert when
                  </p>
                  <p
                    className="font-semibold text-sm"
                    style={{ color: indicator.color }}
                  >
                    {indicator.alert}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Vaccination Schedule */}
      <section
        data-ocid="cattle.vaccination.section"
        className="py-12 px-4 max-w-7xl mx-auto"
        style={{ background: "#f5f0e8" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-bold text-2xl md:text-3xl mb-6"
            style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
          >
            Vaccination Schedule
          </h2>
          <div className="glass-card overflow-x-auto">
            <table className="w-full text-sm min-w-[700px]">
              <thead>
                <tr style={{ background: "#edf3e8" }}>
                  {["Disease", "Animal", "Vaccine", "Timing", "Frequency"].map(
                    (h) => (
                      <th
                        key={h}
                        className="py-3 px-4 text-left font-semibold"
                        style={{ color: "#3a6b1e" }}
                      >
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {vaccinationSchedule.map((row, i) => (
                  <tr
                    key={row.disease}
                    data-ocid={`cattle.vaccine.row.${i + 1}`}
                    style={{
                      borderTop: "1px solid #e2d8cc",
                      background: i % 2 === 0 ? "#ffffff" : "#faf7f2",
                    }}
                  >
                    <td
                      className="py-3 px-4 font-medium"
                      style={{ color: "#2c2416" }}
                    >
                      {row.disease}
                    </td>
                    <td className="py-3 px-4" style={{ color: "#6b6554" }}>
                      {row.animal}
                    </td>
                    <td className="py-3 px-4" style={{ color: "#6b6554" }}>
                      {row.vaccine}
                    </td>
                    <td className="py-3 px-4" style={{ color: "#6b6554" }}>
                      {row.timing}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className="px-2 py-0.5 rounded-full text-xs"
                        style={{ background: "#edf3e8", color: "#3a6b1e" }}
                      >
                        {row.frequency}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Government Cattle Schemes */}
      <section
        data-ocid="cattle.schemes.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <h2
          className="font-bold text-2xl md:text-3xl mb-8"
          style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
        >
          Government Livestock Schemes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {cattleSchemes.map((scheme, i) => (
            <div
              key={scheme.name}
              data-ocid={`cattle.scheme.item.${i + 1}`}
              className="glass-card p-5"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: "#edf3e8" }}
                >
                  {scheme.emoji}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold" style={{ color: "#2c2416" }}>
                    {scheme.name}
                  </h3>
                  <p
                    className="text-xs font-semibold mb-2"
                    style={{ color: "#3a6b1e" }}
                  >
                    Budget: {scheme.amount}
                  </p>
                  <p className="text-sm mb-2" style={{ color: "#6b6554" }}>
                    {scheme.benefit}
                  </p>
                  <a
                    href={scheme.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium"
                    style={{ color: "#3a6b1e" }}
                  >
                    Learn More &#8599;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Common Diseases */}
      <section
        data-ocid="cattle.diseases.section"
        className="py-12 px-4 max-w-7xl mx-auto"
        style={{ background: "#f5f0e8" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-bold text-2xl md:text-3xl mb-8"
            style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
          >
            Disease Prevention &amp; Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {diseases.map((d, i) => (
              <div
                key={d.title}
                data-ocid={`cattle.disease.item.${i + 1}`}
                className="glass-card p-5"
              >
                <div className="text-3xl mb-3">{d.emoji}</div>
                <h3 className="font-bold mb-3" style={{ color: "#2c2416" }}>
                  {d.title}
                </h3>
                <div className="space-y-2 text-xs">
                  <p>
                    <span
                      className="font-semibold"
                      style={{ color: "#dc2626" }}
                    >
                      Symptoms:{" "}
                    </span>
                    <span style={{ color: "#6b6554" }}>{d.symptoms}</span>
                  </p>
                  <p>
                    <span
                      className="font-semibold"
                      style={{ color: "#3a6b1e" }}
                    >
                      Prevention:{" "}
                    </span>
                    <span style={{ color: "#6b6554" }}>{d.prevention}</span>
                  </p>
                  <p>
                    <span
                      className="font-semibold"
                      style={{ color: "#1565c0" }}
                    >
                      Treatment:{" "}
                    </span>
                    <span style={{ color: "#6b6554" }}>{d.treatment}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profitability */}
      <section
        data-ocid="cattle.profitability.section"
        className="py-12 px-4"
        style={{ background: "#ffffff" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-bold text-2xl md:text-3xl mb-8"
            style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
          >
            Estimated Farm Income
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {profitability.map((item, i) => (
              <div
                key={item.animal}
                data-ocid={`cattle.profitability.item.${i + 1}`}
                className="glass-card p-5 text-center"
              >
                <div className="text-4xl mb-3">{item.emoji}</div>
                <h3
                  className="font-bold mb-3"
                  style={{
                    color: "#2c2416",
                    fontFamily: "Fraunces, Georgia, serif",
                  }}
                >
                  {item.animal}
                </h3>
                <div className="space-y-2 text-sm">
                  <div
                    className="rounded-lg p-2"
                    style={{ background: "#edf3e8" }}
                  >
                    <p className="text-xs" style={{ color: "#6b6554" }}>
                      Investment
                    </p>
                    <p className="font-semibold" style={{ color: "#2c2416" }}>
                      {item.investment}
                    </p>
                  </div>
                  <div
                    className="rounded-lg p-2"
                    style={{ background: "#dcfce7" }}
                  >
                    <p className="text-xs" style={{ color: "#6b6554" }}>
                      Monthly Income
                    </p>
                    <p className="font-semibold" style={{ color: "#15803d" }}>
                      {item.monthlyIncome}
                    </p>
                  </div>
                  <div
                    className="rounded-lg p-2"
                    style={{ background: "#fef9c3" }}
                  >
                    <p className="text-xs" style={{ color: "#6b6554" }}>
                      Payback Period
                    </p>
                    <p className="font-semibold" style={{ color: "#a16207" }}>
                      {item.payback}
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
