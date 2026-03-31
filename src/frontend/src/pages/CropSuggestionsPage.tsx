import { useState } from "react";
import ParticleCanvas from "../components/ParticleCanvas";
import { useLang } from "../contexts/LangContext";
import { cropSuggestionsData } from "../data/cropSuggestions";

export default function CropSuggestionsPage() {
  const { t } = useLang();
  const [selectedState, setSelectedState] = useState("");

  const stateData = cropSuggestionsData.find((d) => d.state === selectedState);

  return (
    <main>
      <section className="relative min-h-[35vh] flex items-center justify-center overflow-hidden">
        <ParticleCanvas />
        <div className="relative z-10 text-center px-4 py-14">
          <h1
            className="font-sora font-extrabold text-4xl md:text-5xl text-white mb-3 slide-up"
            style={{ textShadow: "0 0 30px rgba(132,204,22,0.4)" }}
          >
            {t("cropSuggestions.hero")}
          </h1>
          <p style={{ color: "#a7b3a7" }}>
            State-wise crop recommendations for optimal yield
          </p>
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
            style={{ color: "#a7b3a7" }}
          >
            {t("cropSuggestions.selectState")}
            <select
              data-ocid="cropsuggestions.state.select"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="mt-1 block w-full max-w-sm px-4 py-2.5 rounded-xl text-white text-sm outline-none"
              style={{
                background: "rgba(132,204,22,0.05)",
                border: "1px solid rgba(132,204,22,0.3)",
              }}
            >
              <option value="" style={{ background: "#0a0f0a" }}>
                {t("cropSuggestions.placeholder")}
              </option>
              {cropSuggestionsData.map((d) => (
                <option
                  key={d.state}
                  value={d.state}
                  style={{ background: "#0a0f0a" }}
                >
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
            <div className="text-5xl mb-4">🗺️</div>
            <p style={{ color: "#a7b3a7" }}>
              Select a state to see recommended crops
            </p>
          </div>
        )}

        {stateData && (
          <div>
            <h2 className="font-sora font-bold text-2xl text-white mb-6">
              Recommended Crops for{" "}
              <span style={{ color: "#84cc16" }}>{stateData.state}</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* biome-ignore lint/suspicious/noArrayIndexKey: static state crops */}
              {stateData.crops.map((crop, idx) => (
                <div
                  key={crop.name}
                  data-ocid={`cropsuggestions.crop.item.${idx + 1}`}
                  className="glass-card p-5"
                >
                  <div className="flex items-start gap-3">
                    <span className="text-3xl">{crop.emoji}</span>
                    <div className="flex-1">
                      <h3 className="font-sora font-bold text-lg text-white mb-2">
                        {crop.name}
                      </h3>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {/* biome-ignore lint/suspicious/noArrayIndexKey: static rows */}
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
                            <span style={{ color: "#84cc16" }}>
                              {row.label}:{" "}
                            </span>
                            <span style={{ color: "#a7b3a7" }}>
                              {row.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
