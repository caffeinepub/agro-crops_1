import { ExternalLink, Search } from "lucide-react";
import { useState } from "react";
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

const maintenanceTips = [
  {
    emoji: "🧹",
    title: "Daily Cleaning",
    desc: "Clean all equipment after each use. Remove soil and crop residue to prevent rust and corrosion.",
  },
  {
    emoji: "🔩",
    title: "Regular Lubrication",
    desc: "Lubricate all moving parts every 50 operating hours using engine oil or appropriate grease.",
  },
  {
    emoji: "🔋",
    title: "Battery Maintenance",
    desc: "Charge tractor battery monthly even if not in use. Check electrolyte levels every season.",
  },
  {
    emoji: "💧",
    title: "Hydraulic Fluid",
    desc: "Check hydraulic fluid level weekly in tractors. Replace every 500 operating hours or annually.",
  },
  {
    emoji: "🪛",
    title: "Blade Sharpening",
    desc: "Sharpen rotavator blades and plough shares after every 100 acres to maintain cutting efficiency.",
  },
  {
    emoji: "🏠",
    title: "Proper Storage",
    desc: "Store equipment under a shed. Cover with tarpaulin. Jack up tractor wheels during long storage.",
  },
];

const subsidySchemes = [
  {
    emoji: "🏛️",
    title: "SMAM Scheme",
    fullName: "Sub-Mission on Agricultural Mechanization",
    desc: "Up to 50% subsidy on farm equipment for small and marginal farmers. Apply through state agriculture dept.",
    link: "https://agrimachinery.nic.in/",
    amount: "Up to 50% subsidy",
  },
  {
    emoji: "🌾",
    title: "RKVY Mechanization",
    fullName: "Rashtriya Krishi Vikas Yojana",
    desc: "State-level funding for farm mechanization through RKVY. Contact your district agriculture office.",
    link: "https://rkvy.nic.in/",
    amount: "Project-based funding",
  },
  {
    emoji: "🤝",
    title: "Custom Hiring Centre",
    fullName: "Custom Hiring Centre (CHC) Scheme",
    desc: "Individual or FPO can start a CHC and rent out equipment to farmers. 40-50% subsidy on equipment.",
    link: "https://agrimachinery.nic.in/",
    amount: "40-50% subsidy for CHC",
  },
  {
    emoji: "💳",
    title: "Kisan Credit Card",
    fullName: "KCC for Equipment Purchase",
    desc: "Use KCC loan at 7% interest (effective 4% with subvention) to buy farm equipment up to ₹3 lakh.",
    link: "https://www.nabard.org/",
    amount: "Loan at 4% effective rate",
  },
];

const safetyGuidelines = [
  {
    emoji: "👓",
    title: "Eye Protection",
    desc: "Always wear safety goggles when operating grinding, cutting, or spraying equipment.",
  },
  {
    emoji: "👞",
    title: "Proper Footwear",
    desc: "Wear steel-toed boots in the field. Never operate equipment with open sandals or barefoot.",
  },
  {
    emoji: "🧤",
    title: "PTO Guard",
    desc: "Always keep PTO shaft guard in place. Loose clothing near rotating PTO is extremely dangerous.",
  },
  {
    emoji: "🔥",
    title: "Fire Extinguisher",
    desc: "Keep a 2-kg fire extinguisher on tractor during harvesting season. Dry crop residue is flammable.",
  },
  {
    emoji: "👶",
    title: "Keep Children Away",
    desc: "Never allow children near running farm equipment. Establish safety perimeter of at least 10 meters.",
  },
  {
    emoji: "📡",
    title: "Emergency Contacts",
    desc: "Keep local mechanic and emergency numbers saved. Know nearest tractor service station location.",
  },
  {
    emoji: "⚽",
    title: "No Alcohol Operation",
    desc: "Never operate heavy farm equipment after consuming alcohol. Impairment causes serious accidents.",
  },
  {
    emoji: "🧰",
    title: "Pre-Use Inspection",
    desc: "Walk around equipment before starting. Check tyres, hitches, and fluid levels before each session.",
  },
];

const maintenanceSchedule = [
  {
    equipment: "Tractor",
    daily: "Check oil, water, tyre pressure",
    weekly: "Grease all fittings, check battery",
    monthly: "Change engine oil, clean air filter",
    annual: "Full service, injector check, cooling system flush",
  },
  {
    equipment: "Rotavator",
    daily: "Clean blades, check bolts",
    weekly: "Grease gear box, check blade wear",
    monthly: "Replace worn blades, check oil level",
    annual: "Gear oil change, bearing replacement if needed",
  },
  {
    equipment: "Drip System",
    daily: "Check for leaks and blockages",
    weekly: "Flush laterals, clean filter",
    monthly: "Check emitter flow rate, inspect main lines",
    annual: "Replace damaged emitters and pipes",
  },
  {
    equipment: "Sprayer",
    daily: "Flush with water after use",
    weekly: "Clean nozzle tips, check pressure",
    monthly: "Inspect pump seals, check hoses",
    annual: "Replace nozzle tips, pump overhaul",
  },
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
            {t("equipment.hero")}
          </h1>
          <p style={{ color: "#c8e0b0" }}>
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
              style={{ color: "#3a6b1e" }}
            />
            <input
              data-ocid="equipment.search.input"
              type="text"
              placeholder={t("equipment.search")}
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
          <div data-ocid="equipment.empty_state" className="text-center py-20">
            <p style={{ color: "#6b6554" }}>No equipment found</p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((eq, idx) => (
            <div
              key={eq.id}
              data-ocid={`equipment.item.${idx + 1}`}
              className="glass-card overflow-hidden"
            >
              {eq.image ? (
                <img
                  src={eq.image}
                  alt={eq.name}
                  className="w-full h-24 object-cover"
                />
              ) : (
                <div
                  className="w-full h-24 flex items-center justify-center text-4xl"
                  style={{ background: "#edf3e8" }}
                >
                  {eq.emoji}
                </div>
              )}
              <div className="p-4">
                <div className="flex items-start justify-between mb-2 gap-2">
                  <h3
                    className="font-bold text-lg"
                    style={{ color: "#2c2416" }}
                  >
                    {eq.name}
                  </h3>
                  <div className="flex flex-col items-end gap-1 flex-shrink-0">
                    <span
                      className="px-2 py-0.5 rounded-full text-xs capitalize"
                      style={{ background: "#edf3e8", color: "#3a6b1e" }}
                    >
                      {eq.category}
                    </span>
                    {eq.costRange && (
                      <span
                        className="px-2 py-0.5 rounded-full text-xs"
                        style={{ background: "#fef9c3", color: "#a16207" }}
                      >
                        {eq.costRange}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm mb-2" style={{ color: "#6b6554" }}>
                  {eq.description}
                </p>
                {eq.maintenanceTip && (
                  <p
                    className="text-xs mb-2 italic"
                    style={{ color: "#3a6b1e" }}
                  >
                    &#128295; Tip: {eq.maintenanceTip}
                  </p>
                )}
                {/* New detailed fields */}
                <div className="grid grid-cols-2 gap-1 mb-3 text-xs">
                  {eq.engineCC && (
                    <div
                      className="rounded p-1.5"
                      style={{ background: "#f0ebe3" }}
                    >
                      <p style={{ color: "#6b6554" }}>Engine</p>
                      <p className="font-medium" style={{ color: "#2c2416" }}>
                        {eq.engineCC}
                      </p>
                    </div>
                  )}
                  {eq.landCoveragePerHour && (
                    <div
                      className="rounded p-1.5"
                      style={{ background: "#edf3e8" }}
                    >
                      <p style={{ color: "#6b6554" }}>Coverage</p>
                      <p className="font-medium" style={{ color: "#3a6b1e" }}>
                        {eq.landCoveragePerHour}
                      </p>
                    </div>
                  )}
                  {eq.fuelConsumptionPerHour && (
                    <div
                      className="rounded p-1.5"
                      style={{ background: "#fef9c3" }}
                    >
                      <p style={{ color: "#6b6554" }}>Fuel/hr</p>
                      <p className="font-medium" style={{ color: "#a16207" }}>
                        {eq.fuelConsumptionPerHour}
                      </p>
                    </div>
                  )}
                  {eq.weightKg && (
                    <div
                      className="rounded p-1.5"
                      style={{ background: "#f0ebe3" }}
                    >
                      <p style={{ color: "#6b6554" }}>Weight</p>
                      <p className="font-medium" style={{ color: "#6b6554" }}>
                        {eq.weightKg} kg
                      </p>
                    </div>
                  )}
                </div>
                {eq.safetyTips && eq.safetyTips.length > 0 && (
                  <div className="mb-3">
                    <p
                      className="text-xs font-semibold mb-1"
                      style={{ color: "#dc2626" }}
                    >
                      Safety Tips:
                    </p>
                    <ul className="space-y-0.5">
                      {eq.safetyTips.slice(0, 2).map((tip) => (
                        <li
                          key={tip}
                          className="text-xs flex items-center gap-1"
                          style={{ color: "#6b6554" }}
                        >
                          <span style={{ color: "#dc2626" }}>&#9888;</span>{" "}
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mb-3">
                  <p
                    className="text-xs font-semibold mb-1"
                    style={{ color: "#3a6b1e" }}
                  >
                    {t("equipment.uses")}:
                  </p>
                  <ul className="space-y-0.5">
                    {eq.uses.map((use) => (
                      <li
                        key={use}
                        className="text-xs flex items-center gap-1"
                        style={{ color: "#6b6554" }}
                      >
                        <span style={{ color: "#3a6b1e" }}>&#8226;</span> {use}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-xs mb-3">
                  <span style={{ color: "#3a6b1e" }}>
                    {t("equipment.specs")}:{" "}
                  </span>
                  <span style={{ color: "#6b6554" }}>{eq.specs}</span>
                </p>
                {eq.bestSeason && (
                  <p className="text-xs mb-3">
                    <span style={{ color: "#3a6b1e" }}>Best for: </span>
                    <span
                      className="px-2 py-0.5 rounded-full"
                      style={{ background: "#f0ebe3", color: "#6b6554" }}
                    >
                      {eq.bestSeason}
                    </span>
                  </p>
                )}
                <a
                  data-ocid={`equipment.tutorial.${idx + 1}`}
                  href={eq.tutorialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2 px-4 rounded-xl text-sm font-medium transition-all w-full justify-center"
                  style={{
                    background: "#edf3e8",
                    border: "1px solid #b5c9a0",
                    color: "#3a6b1e",
                  }}
                >
                  <ExternalLink size={13} /> {t("equipment.tutorial")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Operator Safety Guidelines */}
      <section
        data-ocid="equipment.safety.section"
        className="py-12 px-4"
        style={{ background: "#f5f0e8" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-bold text-2xl md:text-3xl mb-3"
            style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
          >
            Operator Safety Guidelines
          </h2>
          <p className="mb-8 text-sm" style={{ color: "#6b6554" }}>
            Safety is non-negotiable. Follow these 8 rules to prevent farm
            accidents.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {safetyGuidelines.map((tip, i) => (
              <div
                key={tip.title}
                data-ocid={`equipment.safety.item.${i + 1}`}
                className="glass-card p-5"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3"
                  style={{ background: "#fee2e2" }}
                >
                  {tip.emoji}
                </div>
                <h3 className="font-semibold mb-2" style={{ color: "#2c2416" }}>
                  {tip.title}
                </h3>
                <p className="text-sm" style={{ color: "#6b6554" }}>
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Maintenance Schedule */}
      <section
        data-ocid="equipment.schedule.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <h2
          className="font-bold text-2xl md:text-3xl mb-3"
          style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
        >
          Equipment Maintenance Schedule
        </h2>
        <p className="mb-8 text-sm" style={{ color: "#6b6554" }}>
          Planned maintenance extends equipment life and prevents costly
          breakdowns
        </p>
        <div className="glass-card overflow-x-auto">
          <table className="w-full text-xs min-w-[700px]">
            <thead>
              <tr style={{ background: "#edf3e8" }}>
                {["Equipment", "Daily", "Weekly", "Monthly", "Annual"].map(
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
              {maintenanceSchedule.map((row, i) => (
                <tr
                  key={row.equipment}
                  data-ocid={`equipment.schedule.row.${i + 1}`}
                  style={{
                    borderTop: "1px solid #e2d8cc",
                    background: i % 2 === 0 ? "#ffffff" : "#faf7f2",
                  }}
                >
                  <td
                    className="py-3 px-4 font-semibold"
                    style={{ color: "#2c2416" }}
                  >
                    {row.equipment}
                  </td>
                  <td className="py-3 px-4" style={{ color: "#6b6554" }}>
                    {row.daily}
                  </td>
                  <td className="py-3 px-4" style={{ color: "#6b6554" }}>
                    {row.weekly}
                  </td>
                  <td className="py-3 px-4" style={{ color: "#6b6554" }}>
                    {row.monthly}
                  </td>
                  <td className="py-3 px-4" style={{ color: "#6b6554" }}>
                    {row.annual}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Maintenance Tips */}
      <section
        data-ocid="equipment.maintenance.section"
        className="py-12 px-4"
        style={{ background: "#f5f0e8" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-bold text-2xl md:text-3xl mb-8"
            style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
          >
            General Maintenance Tips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {maintenanceTips.map((tip, i) => (
              <div
                key={tip.title}
                data-ocid={`equipment.maintenance.item.${i + 1}`}
                className="glass-card p-5"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3"
                  style={{ background: "#edf3e8" }}
                >
                  {tip.emoji}
                </div>
                <h3 className="font-semibold mb-2" style={{ color: "#2c2416" }}>
                  {tip.title}
                </h3>
                <p className="text-sm" style={{ color: "#6b6554" }}>
                  {tip.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subsidy Schemes */}
      <section
        data-ocid="equipment.subsidies.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <h2
          className="font-bold text-2xl md:text-3xl mb-3"
          style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
        >
          Subsidy &amp; Finance Options
        </h2>
        <p className="mb-8 text-sm" style={{ color: "#6b6554" }}>
          Get up to 50% subsidy on farm equipment from central and state
          government schemes
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {subsidySchemes.map((scheme, i) => (
            <div
              key={scheme.title}
              data-ocid={`equipment.subsidy.item.${i + 1}`}
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
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold" style={{ color: "#2c2416" }}>
                      {scheme.title}
                    </h3>
                    <span
                      className="px-2 py-0.5 rounded-full text-xs flex-shrink-0"
                      style={{ background: "#dcfce7", color: "#15803d" }}
                    >
                      {scheme.amount}
                    </span>
                  </div>
                  <p className="text-xs mb-2" style={{ color: "#3a6b1e" }}>
                    {scheme.fullName}
                  </p>
                  <p className="text-sm mb-3" style={{ color: "#6b6554" }}>
                    {scheme.desc}
                  </p>
                  <a
                    href={scheme.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium flex items-center gap-1"
                    style={{ color: "#3a6b1e" }}
                  >
                    Learn More <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
