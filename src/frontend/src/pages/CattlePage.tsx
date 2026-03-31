import { Search } from "lucide-react";
import { useState } from "react";
import ParticleCanvas from "../components/ParticleCanvas";
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
      <section className="relative min-h-[35vh] flex items-center justify-center overflow-hidden">
        <ParticleCanvas />
        <div className="relative z-10 text-center px-4 py-14">
          <h1
            className="font-sora font-extrabold text-4xl md:text-5xl text-white mb-3 slide-up"
            style={{ textShadow: "0 0 30px rgba(132,204,22,0.4)" }}
          >
            {t("cattle.hero")}
          </h1>
          <p style={{ color: "#a7b3a7" }}>Complete guide to 15+ farm animals</p>
        </div>
      </section>

      <section
        data-ocid="cattle.list.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        {/* Search */}
        <div className="relative mb-6 max-w-md">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2"
            style={{ color: "#84cc16" }}
          />
          <input
            data-ocid="cattle.search.input"
            type="text"
            placeholder={t("cattle.search")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 rounded-xl text-white text-sm outline-none"
            style={{
              background: "rgba(132,204,22,0.05)",
              border: "1px solid rgba(132,204,22,0.25)",
            }}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filters.map((f) => (
            <button
              type="button"
              key={f.key}
              data-ocid={`cattle.filter.${f.key}.tab`}
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
          <div data-ocid="cattle.empty_state" className="text-center py-20">
            <p style={{ color: "#a7b3a7" }}>No animals found</p>
          </div>
        )}

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((animal, idx) => (
            <div
              key={animal.id}
              data-ocid={`cattle.animal.item.${idx + 1}`}
              className="glass-card overflow-hidden"
            >
              <div
                className={`w-full h-28 bg-gradient-to-br ${animal.gradient} flex items-center justify-center text-5xl`}
              >
                {animal.emoji}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-sora font-bold text-lg text-white">
                    {animal.name}
                  </h3>
                  <span
                    className="px-2 py-0.5 rounded-full text-xs capitalize"
                    style={{
                      background: "rgba(132,204,22,0.1)",
                      color: "#84cc16",
                    }}
                  >
                    {animal.category}
                  </span>
                </div>
                <div className="space-y-1.5 text-xs">
                  <p>
                    <span style={{ color: "#84cc16" }}>
                      {t("cattle.breed")}:{" "}
                    </span>
                    <span style={{ color: "#a7b3a7" }}>{animal.breed}</span>
                  </p>
                  <p>
                    <span style={{ color: "#84cc16" }}>
                      {t("cattle.feed")}:{" "}
                    </span>
                    <span style={{ color: "#a7b3a7" }}>{animal.feed}</span>
                  </p>
                  <p>
                    <span style={{ color: "#84cc16" }}>
                      {t("cattle.health")}:{" "}
                    </span>
                    <span style={{ color: "#a7b3a7" }}>{animal.health}</span>
                  </p>
                  <p>
                    <span style={{ color: "#84cc16" }}>
                      {t("cattle.benefits")}:{" "}
                    </span>
                    <span style={{ color: "#a7b3a7" }}>{animal.benefits}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits section */}
      <section
        data-ocid="cattle.benefits.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <h2 className="font-sora font-bold text-2xl text-white mb-6">
          Benefits of Livestock Farming
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              emoji: "🥛",
              title: "Milk Production",
              desc: "Daily income from dairy animals",
            },
            {
              emoji: "🚜",
              title: "Draught Power",
              desc: "Bullock power for farming",
            },
            {
              emoji: "🍖",
              title: "Meat & Eggs",
              desc: "Protein-rich food production",
            },
            {
              emoji: "🌿",
              title: "Manure",
              desc: "Natural fertilizer for crops",
            },
          ].map((b) => (
            <div key={b.title} className="glass-card p-4 text-center">
              <div className="text-3xl mb-2">{b.emoji}</div>
              <h4 className="font-sora font-semibold text-white text-sm mb-1">
                {b.title}
              </h4>
              <p className="text-xs" style={{ color: "#a7b3a7" }}>
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
