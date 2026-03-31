import { ExternalLink, Search } from "lucide-react";
import { useState } from "react";
import ParticleCanvas from "../components/ParticleCanvas";
import { useLang } from "../contexts/LangContext";
import { type Equipment, equipmentList } from "../data/equipment";

type CatFilter = "all" | Equipment["category"];

const filters: { key: CatFilter; labelKey: string }[] = [
  { key: "all", labelKey: "equipment.filter.all" },
  { key: "tillage", labelKey: "equipment.filter.tillage" },
  { key: "seeding", labelKey: "equipment.filter.seeding" },
  { key: "harvesting", labelKey: "equipment.filter.harvesting" },
  { key: "irrigation", labelKey: "equipment.filter.irrigation" },
  { key: "protection", labelKey: "equipment.filter.protection" },
  { key: "processing", labelKey: "equipment.filter.processing" },
];

export default function EquipmentPage() {
  const { t } = useLang();
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<CatFilter>("all");

  const filtered = equipmentList.filter((e) => {
    const matchCat = activeFilter === "all" || e.category === activeFilter;
    const matchQ = !query || e.name.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <main>
      <section className="relative min-h-[35vh] flex items-center justify-center overflow-hidden">
        <ParticleCanvas />
        <div className="relative z-10 text-center px-4 py-14">
          <h1
            className="font-sora font-extrabold text-4xl md:text-5xl text-white mb-3 slide-up"
            style={{ textShadow: "0 0 30px rgba(132,204,22,0.4)" }}
          >
            {t("equipment.hero")}
          </h1>
          <p style={{ color: "#a7b3a7" }}>
            23+ modern farming implements with tutorials
          </p>
        </div>
      </section>

      <section
        data-ocid="equipment.list.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative max-w-md w-full">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2"
              style={{ color: "#84cc16" }}
            />
            <input
              data-ocid="equipment.search.input"
              type="text"
              placeholder={t("equipment.search")}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl text-white text-sm outline-none"
              style={{
                background: "rgba(132,204,22,0.05)",
                border: "1px solid rgba(132,204,22,0.25)",
              }}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              type="button"
              key={f.key}
              data-ocid={`equipment.filter.${f.key}.tab`}
              onClick={() => setActiveFilter(f.key)}
              className="px-4 py-1.5 rounded-full text-sm transition-all"
              style={{
                background:
                  activeFilter === f.key
                    ? "rgba(132,204,22,0.2)"
                    : "rgba(132,204,22,0.06)",
                border:
                  activeFilter === f.key
                    ? "1px solid #84cc16"
                    : "1px solid rgba(132,204,22,0.2)",
                color: activeFilter === f.key ? "#84cc16" : "#a7b3a7",
              }}
            >
              {t(f.labelKey as Parameters<typeof t>[0])}
            </button>
          ))}
        </div>

        {filtered.length === 0 && (
          <div data-ocid="equipment.empty_state" className="text-center py-20">
            <p style={{ color: "#a7b3a7" }}>No equipment found</p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((eq, idx) => (
            <div
              key={eq.id}
              data-ocid={`equipment.item.${idx + 1}`}
              className="glass-card overflow-hidden"
            >
              <div
                className={`w-full h-24 bg-gradient-to-br ${eq.gradient} flex items-center justify-center text-4xl`}
              >
                {eq.emoji}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-sora font-bold text-lg text-white">
                    {eq.name}
                  </h3>
                  <span
                    className="px-2 py-0.5 rounded-full text-xs capitalize"
                    style={{
                      background: "rgba(132,204,22,0.1)",
                      color: "#84cc16",
                    }}
                  >
                    {eq.category}
                  </span>
                </div>
                <p className="text-sm mb-3" style={{ color: "#a7b3a7" }}>
                  {eq.description}
                </p>
                <div className="mb-3">
                  <p
                    className="text-xs font-semibold mb-1"
                    style={{ color: "#84cc16" }}
                  >
                    {t("equipment.uses")}:
                  </p>
                  <ul className="space-y-0.5">
                    {/* biome-ignore lint/suspicious/noArrayIndexKey: static uses list */}
                    {eq.uses.map((use) => (
                      <li
                        key={use}
                        className="text-xs flex items-center gap-1"
                        style={{ color: "#a7b3a7" }}
                      >
                        <span style={{ color: "#84cc16" }}>•</span> {use}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs mb-3">
                  <span style={{ color: "#84cc16" }}>
                    {t("equipment.specs")}:{" "}
                  </span>
                  <span style={{ color: "#a7b3a7" }}>{eq.specs}</span>
                </p>
                <a
                  data-ocid={`equipment.tutorial.${idx + 1}`}
                  href={eq.tutorialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2 px-4 rounded-xl text-sm font-medium transition-all hover:scale-105 w-full justify-center"
                  style={{
                    background: "rgba(132,204,22,0.15)",
                    border: "1px solid rgba(132,204,22,0.3)",
                    color: "#84cc16",
                  }}
                >
                  <ExternalLink size={13} /> {t("equipment.tutorial")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
