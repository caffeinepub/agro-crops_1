import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import ParticleCanvas from "../components/ParticleCanvas";
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

export default function FarmPage() {
  const { t } = useLang();
  const [active, setActive] = useState<Category>("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered =
    active === "all" ? crops : crops.filter((c) => c.category === active);

  return (
    <main>
      <section className="relative min-h-[35vh] flex items-center justify-center overflow-hidden">
        <ParticleCanvas />
        <div className="relative z-10 text-center px-4 py-14">
          <h1
            className="font-sora font-extrabold text-4xl md:text-5xl text-white mb-3 slide-up"
            style={{ textShadow: "0 0 30px rgba(132,204,22,0.4)" }}
          >
            {t("farm.hero")}
          </h1>
          <p style={{ color: "#a7b3a7" }}>
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
                background:
                  active === cat.key
                    ? "rgba(132,204,22,0.2)"
                    : "rgba(132,204,22,0.06)",
                border:
                  active === cat.key
                    ? "1px solid #84cc16"
                    : "1px solid rgba(132,204,22,0.2)",
                color: active === cat.key ? "#84cc16" : "#a7b3a7",
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
              <div
                className={`w-full h-28 bg-gradient-to-br ${crop.gradient} flex items-center justify-center text-5xl`}
              >
                {crop.emoji}
              </div>
              <div className="p-4">
                <h3 className="font-sora font-bold text-lg text-white mb-2">
                  {crop.name}
                </h3>
                <div className="flex flex-wrap gap-2 mb-3">
                  <span
                    className="px-2 py-0.5 rounded-full text-xs"
                    style={{
                      background: "rgba(132,204,22,0.1)",
                      color: "#84cc16",
                    }}
                  >
                    {crop.season}
                  </span>
                  <span
                    className="px-2 py-0.5 rounded-full text-xs"
                    style={{
                      background: "rgba(132,204,22,0.1)",
                      color: "#a7b3a7",
                    }}
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
                  style={{ color: "#84cc16" }}
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
                    {/* biome-ignore lint/suspicious/noArrayIndexKey: static detail rows */}
                    {[
                      { label: t("farm.soil"), value: crop.soil },
                      { label: t("farm.water"), value: crop.water },
                      { label: t("farm.states"), value: crop.states },
                      { label: t("farm.fertilizer"), value: crop.fertilizer },
                    ].map((row) => (
                      <div key={row.label} className="text-xs">
                        <span style={{ color: "#84cc16" }}>{row.label}: </span>
                        <span style={{ color: "#a7b3a7" }}>{row.value}</span>
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
        <h2 className="font-sora font-bold text-2xl text-white mb-6">
          {t("farm.calendar")}
        </h2>
        <div className="glass-card p-5 overflow-x-auto">
          <table className="w-full text-sm min-w-[600px]">
            <thead>
              <tr style={{ borderBottom: "1px solid rgba(132,204,22,0.2)" }}>
                {calendarHeaders.map((h) => (
                  <th
                    key={h}
                    className="py-2 px-2 text-left"
                    style={{ color: "#84cc16" }}
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
                  style={{ borderBottom: "1px solid rgba(132,204,22,0.1)" }}
                >
                  <td className="py-2 px-2 font-medium text-white">
                    {row.name}
                  </td>
                  {calendarHeaders.slice(1).map((monthName, mi) => (
                    <td key={monthName} className="py-2 px-2">
                      {row.months[mi] === 1 ? (
                        <div
                          className="w-full h-4 rounded"
                          style={{ background: "rgba(132,204,22,0.5)" }}
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
    </main>
  );
}
