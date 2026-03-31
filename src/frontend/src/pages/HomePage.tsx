import ParticleCanvas from "../components/ParticleCanvas";
import VoiceReader from "../components/VoiceReader";
import { useLang } from "../contexts/LangContext";

type Page =
  | "home"
  | "about"
  | "farm"
  | "shop"
  | "cattle"
  | "equipment"
  | "cropSuggestions"
  | "schemes"
  | "contact";

interface Props {
  onNavigate: (page: Page) => void;
}

const featureCards = [
  {
    keyTitle: "home.feature1",
    keyDesc: "home.feature1.desc",
    emoji: "🌾",
    gradient: "from-green-900 to-teal-800",
  },
  {
    keyTitle: "home.feature2",
    keyDesc: "home.feature2.desc",
    emoji: "🌱",
    gradient: "from-amber-900 to-lime-800",
  },
  {
    keyTitle: "home.feature3",
    keyDesc: "home.feature3.desc",
    emoji: "♻️",
    gradient: "from-cyan-900 to-blue-900",
  },
  {
    keyTitle: "home.feature4",
    keyDesc: "home.feature4.desc",
    emoji: "💰",
    gradient: "from-purple-900 to-indigo-900",
  },
];

const seasonCrops = [
  {
    name: "Rice",
    emoji: "🌾",
    desc: "Kharif crop | Best season",
    gradient: "from-green-900 to-teal-800",
  },
  {
    name: "Cotton",
    emoji: "🧵",
    desc: "Cash crop | Premium price",
    gradient: "from-stone-800 to-gray-700",
  },
  {
    name: "Sugarcane",
    emoji: "🍬",
    desc: "Year-round | High yield",
    gradient: "from-amber-900 to-lime-800",
  },
];

const futureCards = [
  {
    keyTitle: "home.ai",
    keyDesc: "home.ai.desc",
    emoji: "🤖",
    gradient: "from-blue-900 to-indigo-900",
  },
  {
    keyTitle: "home.drone",
    keyDesc: "home.drone.desc",
    emoji: "🫸",
    gradient: "from-slate-900 to-blue-900",
  },
  {
    keyTitle: "home.irrigation",
    keyDesc: "home.irrigation.desc",
    emoji: "💧",
    gradient: "from-cyan-900 to-teal-900",
  },
];

const schemeHighlights = [
  { name: "PM-KISAN", desc: "₹6000/year direct income support", emoji: "🏦" },
  { name: "PMFBY", desc: "Crop insurance at 2% premium", emoji: "🛡️" },
  { name: "KCC", desc: "Kisan Credit Card at 7% interest", emoji: "💳" },
];

export default function HomePage({ onNavigate }: Props) {
  const { t } = useLang();

  return (
    <main>
      <section
        data-ocid="home.hero.section"
        className="relative min-h-[70vh] flex items-center justify-center overflow-hidden"
      >
        <ParticleCanvas />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto py-20">
          <h1
            className="font-sora font-extrabold text-4xl md:text-6xl mb-4 slide-up"
            style={{
              color: "#eaf3ea",
              textShadow: "0 0 30px rgba(132,204,22,0.4)",
            }}
          >
            {t("hero.welcome")}
          </h1>
          <p
            className="text-lg md:text-xl mb-8 fade-in-up"
            style={{ color: "#a7b3a7", animationDelay: "0.2s" }}
          >
            {t("hero.subtitle")}
          </p>
          <div
            className="flex flex-wrap gap-4 justify-center fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <button
              type="button"
              data-ocid="home.explore.button"
              onClick={() => onNavigate("farm")}
              className="px-8 py-3 rounded-full font-semibold text-black transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #84cc16, #a3e635)",
                boxShadow: "0 0 20px rgba(132,204,22,0.5)",
              }}
            >
              {t("hero.explore")}
            </button>
            <button
              type="button"
              data-ocid="home.getstarted.button"
              onClick={() => onNavigate("about")}
              className="px-8 py-3 rounded-full font-semibold transition-all hover:scale-105"
              style={{
                border: "1px solid rgba(132,204,22,0.5)",
                color: "#84cc16",
              }}
            >
              {t("hero.getStarted")}
            </button>
          </div>
        </div>
      </section>

      <section
        data-ocid="home.why_organic.section"
        className="py-16 px-4 max-w-7xl mx-auto"
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-sora font-bold text-2xl md:text-3xl text-white">
            {t("home.whyOrganic")}
          </h2>
          <VoiceReader
            text={`${t("home.whyOrganic")}. ${t("home.whyOrganic.desc")}`}
          />
        </div>
        <p className="mb-8" style={{ color: "#a7b3a7" }}>
          {t("home.whyOrganic.desc")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* biome-ignore lint/suspicious/noArrayIndexKey: static content */}
          {featureCards.map((c, i) => (
            <div
              key={c.keyTitle}
              data-ocid={`home.feature.item.${i + 1}`}
              className="glass-card p-5"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3 bg-gradient-to-br ${c.gradient}`}
              >
                {c.emoji}
              </div>
              <h3 className="font-sora font-semibold text-white mb-1">
                {t(c.keyTitle as Parameters<typeof t>[0])}
              </h3>
              <p className="text-sm" style={{ color: "#a7b3a7" }}>
                {t(c.keyDesc as Parameters<typeof t>[0])}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        data-ocid="home.season.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <h2 className="font-sora font-bold text-2xl md:text-3xl text-white mb-8">
          {t("home.cropSeason")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {seasonCrops.map((c) => (
            // biome-ignore lint/a11y/useKeyWithClickEvents: card click is supplementary navigation
            <div
              key={c.name}
              data-ocid={`home.season.item.${c.name}`}
              className="glass-card p-6 text-center cursor-pointer"
              onClick={() => onNavigate("farm")}
            >
              <div
                className={`w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 bg-gradient-to-br ${c.gradient}`}
              >
                {c.emoji}
              </div>
              <h3 className="font-sora font-bold text-xl text-white mb-1">
                {c.name}
              </h3>
              <p className="text-sm" style={{ color: "#a7b3a7" }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        data-ocid="home.schemes.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <h2 className="font-sora font-bold text-2xl md:text-3xl text-white mb-8">
          {t("home.schemeHighlights")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {schemeHighlights.map((s) => (
            // biome-ignore lint/a11y/useKeyWithClickEvents: card click is supplementary navigation
            <div
              key={s.name}
              data-ocid={`home.scheme.item.${s.name}`}
              className="glass-card p-5 cursor-pointer"
              onClick={() => onNavigate("schemes")}
            >
              <span className="text-3xl">{s.emoji}</span>
              <h3 className="font-sora font-bold text-lg text-white mt-2 mb-1">
                {s.name}
              </h3>
              <p className="text-sm" style={{ color: "#a7b3a7" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        data-ocid="home.future.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <h2 className="font-sora font-bold text-2xl md:text-3xl text-white mb-8">
          {t("home.futureFarming")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* biome-ignore lint/suspicious/noArrayIndexKey: static content */}
          {futureCards.map((c, i) => (
            <div
              key={c.keyTitle}
              data-ocid={`home.future.item.${i + 1}`}
              className="glass-card p-6"
            >
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4 bg-gradient-to-br ${c.gradient}`}
              >
                {c.emoji}
              </div>
              <h3 className="font-sora font-bold text-lg text-white mb-2">
                {t(c.keyTitle as Parameters<typeof t>[0])}
              </h3>
              <p className="text-sm" style={{ color: "#a7b3a7" }}>
                {t(c.keyDesc as Parameters<typeof t>[0])}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        data-ocid="home.cta.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <div
          className="glass-card p-8 text-center"
          style={{
            background: "rgba(132,204,22,0.07)",
            border: "1px solid rgba(132,204,22,0.25)",
          }}
        >
          <h2 className="font-sora font-bold text-2xl md:text-3xl text-white mb-3">
            {t("home.contactCta")}
          </h2>
          <p className="mb-6" style={{ color: "#a7b3a7" }}>
            {t("home.contactCta.desc")}
          </p>
          <button
            type="button"
            data-ocid="home.cta.button"
            onClick={() => onNavigate("contact")}
            className="px-8 py-3 rounded-full font-semibold text-black transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #84cc16, #a3e635)",
              boxShadow: "0 0 20px rgba(132,204,22,0.4)",
            }}
          >
            {t("nav.contact")}
          </button>
        </div>
      </section>
    </main>
  );
}
