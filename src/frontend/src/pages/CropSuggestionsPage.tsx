import { useState } from "react";
import { useLang } from "../contexts/LangContext";
import { cropSuggestionsData } from "../data/cropSuggestions";

const howItWorks = [
  {
    step: "1",
    emoji: "\uD83D\uDCCD",
    title: "Select Your State",
    desc: "Choose your state from the dropdown to get region-specific crop recommendations based on local climate and soil.",
  },
  {
    step: "2",
    emoji: "\uD83C\uDF31",
    title: "View Crop Guide",
    desc: "See the best crops with season, yield, soil type, water requirements, and intercropping suggestions.",
  },
  {
    step: "3",
    emoji: "\uD83D\uDCB0",
    title: "Plan Your Income",
    desc: "Use the market price data to calculate expected income and find the most profitable crop for your land.",
  },
];

const waterReq: Record<string, string> = {
  Rice: "High",
  Wheat: "Medium",
  Maize: "Medium",
  Soybean: "Medium",
  Cotton: "High",
  Sugarcane: "High",
  Pulses: "Low",
  Jowar: "Low",
  Bajra: "Low",
  Groundnut: "Medium",
  Tomato: "Medium",
  Onion: "Medium",
  Potato: "Medium",
  Mustard: "Low",
  Sunflower: "Medium",
  Turmeric: "High",
  Ginger: "High",
  Cardamom: "High",
  Pepper: "High",
  Coffee: "High",
  Tea: "High",
  Rubber: "High",
  Coconut: "Medium",
  Mango: "Low",
  Banana: "High",
};

const intercrops: Record<string, string> = {
  Rice: "Azolla (green manure)",
  Wheat: "Mustard",
  Maize: "Cowpea",
  Soybean: "Maize",
  Cotton: "Cowpea / Moong",
  Sugarcane: "Onion / Garlic",
  Groundnut: "Castor",
  Tomato: "Basil / Marigold",
  Onion: "Carrot",
  Potato: "Spinach",
  Mustard: "Chickpea",
  Turmeric: "Ginger",
};

function getWaterReq(cropName: string): string {
  for (const key of Object.keys(waterReq)) {
    if (cropName.toLowerCase().includes(key.toLowerCase())) {
      return waterReq[key];
    }
  }
  return "Medium";
}

function getIntercrop(cropName: string): string {
  for (const key of Object.keys(intercrops)) {
    if (cropName.toLowerCase().includes(key.toLowerCase())) {
      return intercrops[key];
    }
  }
  return "Legumes / Green manure";
}

const waterColors: Record<string, { bg: string; color: string }> = {
  Low: { bg: "#dcfce7", color: "#15803d" },
  Medium: { bg: "#dbeafe", color: "#1d4ed8" },
  High: { bg: "#fee2e2", color: "#dc2626" },
};

export default function CropSuggestionsPage() {
  const { t } = useLang();
  const [selectedState, setSelectedState] = useState("");

  const stateData = cropSuggestionsData.find((d) => d.state === selectedState);

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
            {t("cropSuggestions.hero")}
          </h1>
          <p style={{ color: "#c8e0b0" }}>
            State-wise crop recommendations for optimal yield
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section
        data-ocid="cropsuggestions.how_it_works.section"
        className="py-12 px-4"
        style={{ background: "#f5f0e8" }}
      >
        <div className="max-w-5xl mx-auto">
          <h2
            className="font-bold text-2xl mb-8 text-center"
            style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
          >
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {howItWorks.map((step, i) => (
              <div
                key={step.title}
                data-ocid={`cropsuggestions.step.item.${i + 1}`}
                className="glass-card p-6 text-center"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3"
                  style={{ background: "#3a6b1e", color: "#ffffff" }}
                >
                  {step.step}
                </div>
                <div className="text-3xl mb-2">{step.emoji}</div>
                <h3 className="font-bold mb-2" style={{ color: "#2c2416" }}>
                  {step.title}
                </h3>
                <p className="text-sm" style={{ color: "#6b6554" }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        data-ocid="cropsuggestions.main.section"
        className="py-12 px-4 max-w-5xl mx-auto"
      >
        <div className="mb-8">
          {/* biome-ignore lint/a11y/noLabelWithoutControl: select is associated via nesting */}
          <label
            className="block text-sm font-medium mb-2"
            style={{ color: "#6b6554" }}
          >
            {t("cropSuggestions.selectState")}
            <select
              data-ocid="cropsuggestions.state.select"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="mt-1 block w-full max-w-sm px-4 py-2.5 rounded-xl text-sm outline-none"
              style={{
                background: "#ffffff",
                border: "1px solid #e2d8cc",
                color: "#2c2416",
              }}
            >
              <option value="">{t("cropSuggestions.placeholder")}</option>
              {cropSuggestionsData.map((d) => (
                <option key={d.state} value={d.state}>
                  {d.state}
                </option>
              ))}
            </select>
          </label>
        </div>

        {!selectedState && (
          <div
            data-ocid="cropsuggestions.empty_state"
            className="text-center py-20"
          >
            <div className="text-5xl mb-4">{"🗺️"}</div>
            <p style={{ color: "#6b6554" }}>
              Select a state to see recommended crops
            </p>
          </div>
        )}

        {stateData && (
          <div>
            <h2
              className="font-bold text-2xl mb-6"
              style={{
                color: "#2c2416",
                fontFamily: "Fraunces, Georgia, serif",
              }}
            >
              Recommended Crops for{" "}
              <span style={{ color: "#3a6b1e" }}>{stateData.state}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {stateData.crops.map((crop, idx) => {
                const water = getWaterReq(crop.name);
                const waterStyle = waterColors[water] || waterColors.Medium;
                const intercrop = getIntercrop(crop.name);
                return (
                  <div
                    key={crop.name}
                    data-ocid={`cropsuggestions.crop.item.${idx + 1}`}
                    className="glass-card p-5"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-3xl">{crop.emoji}</span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-2">
                          <h3
                            className="font-bold text-lg"
                            style={{ color: "#2c2416" }}
                          >
                            {crop.name}
                          </h3>
                          <span
                            className="px-2 py-0.5 rounded-full text-xs font-medium"
                            style={{
                              background: waterStyle.bg,
                              color: waterStyle.color,
                            }}
                          >
                            {"💧"} Water: {water}
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs">
                          {[
                            { label: "Season", value: crop.season },
                            {
                              label: t("cropSuggestions.yield"),
                              value: crop.yield,
                            },
                            {
                              label: t("cropSuggestions.marketPrice"),
                              value: crop.marketPrice,
                            },
                            { label: "Duration", value: crop.duration },
                            {
                              label: t("cropSuggestions.soilType"),
                              value: crop.soilType,
                            },
                          ].map((row) => (
                            <div key={row.label}>
                              <span style={{ color: "#3a6b1e" }}>
                                {row.label}:{" "}
                              </span>
                              <span style={{ color: "#6b6554" }}>
                                {row.value}
                              </span>
                            </div>
                          ))}
                          <div className="col-span-2">
                            <span style={{ color: "#3a6b1e" }}>
                              Intercrop:{" "}
                            </span>
                            <span style={{ color: "#6b6554" }}>
                              {intercrop}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
