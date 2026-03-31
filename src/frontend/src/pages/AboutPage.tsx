import ParticleCanvas from "../components/ParticleCanvas";
import VoiceReader from "../components/VoiceReader";
import { useLang } from "../contexts/LangContext";

const stats = [
  { key: "about.stats.farmers", icon: "👨‍🌾" },
  { key: "about.stats.crops", icon: "🌾" },
  { key: "about.stats.states", icon: "🗺️" },
  { key: "about.stats.products", icon: "🛒" },
];

const techniques = [
  {
    title: "Composting",
    emoji: "🌱",
    desc: "Converting organic waste into rich fertilizer for soil health",
  },
  {
    title: "Crop Rotation",
    emoji: "🔄",
    desc: "Alternating crops seasonally to maintain soil nutrients",
  },
  {
    title: "Natural Pest Control",
    emoji: "💪",
    desc: "Using neem, garlic and beneficial insects to manage pests",
  },
  {
    title: "Green Manuring",
    emoji: "🌿",
    desc: "Growing legume crops and plowing them into soil",
  },
  {
    title: "Mulching",
    emoji: "🍂",
    desc: "Covering soil with organic matter to retain moisture",
  },
  {
    title: "Vermicomposting",
    emoji: "🪱",
    desc: "Using earthworms to produce nutrient-rich compost",
  },
];

const team = [
  {
    name: "Chaitanya Kharat",
    role: "CEO & Founder",
    phone: "8421016006",
    emoji: "👨‍💼",
  },
  {
    name: "Aditya Anarase",
    role: "Chief Agricultural Officer",
    phone: "9423653174",
    emoji: "👨‍🌾",
  },
  {
    name: "Dhananjay Dhadge",
    role: "Head of Marketing",
    phone: "7219872347",
    emoji: "👨‍💻",
  },
  {
    name: "Shivam Murkute",
    role: "Head of Marketing",
    phone: "8378093053",
    emoji: "🧑‍💼",
  },
];

const futureItems = [
  {
    emoji: "🤖",
    title: "AI-Driven Crop Advisory",
    desc: "Real-time recommendations using satellite imagery and ML",
  },
  {
    emoji: "📱",
    title: "Mobile Farmer App",
    desc: "Vernacular app for every farmer with offline support",
  },
  {
    emoji: "🌐",
    title: "Global Market Access",
    desc: "Connecting Indian organic farmers to international buyers",
  },
];

export default function AboutPage() {
  const { t } = useLang();

  return (
    <main>
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <ParticleCanvas />
        <div className="relative z-10 text-center px-4 py-16">
          <h1
            className="font-sora font-extrabold text-4xl md:text-5xl text-white mb-3 slide-up"
            style={{ textShadow: "0 0 30px rgba(132,204,22,0.4)" }}
          >
            {t("about.hero")}
          </h1>
          <p className="text-lg" style={{ color: "#a7b3a7" }}>
            Growing a greener tomorrow, together
          </p>
        </div>
      </section>

      <section
        data-ocid="about.stats.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* biome-ignore lint/suspicious/noArrayIndexKey: static stats */}
          {stats.map((s, i) => (
            <div
              key={s.key}
              data-ocid={`about.stat.item.${i + 1}`}
              className="glass-card p-5 text-center"
            >
              <div className="text-3xl mb-2">{s.icon}</div>
              <p
                className="font-sora font-bold text-xl"
                style={{ color: "#84cc16" }}
              >
                {t(s.key as Parameters<typeof t>[0])}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        data-ocid="about.mission.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-sora font-bold text-2xl md:text-3xl text-white">
            {t("about.mission")} & {t("about.vision")}
          </h2>
          <VoiceReader
            text={`${t("about.mission.text")} ${t("about.vision.text")}`}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3
              className="font-sora font-bold text-xl mb-3"
              style={{ color: "#84cc16" }}
            >
              🎯 {t("about.mission")}
            </h3>
            <p style={{ color: "#a7b3a7", lineHeight: "1.8" }}>
              {t("about.mission.text")}
            </p>
          </div>
          <div className="glass-card p-6">
            <h3
              className="font-sora font-bold text-xl mb-3"
              style={{ color: "#84cc16" }}
            >
              👁️ {t("about.vision")}
            </h3>
            <p style={{ color: "#a7b3a7", lineHeight: "1.8" }}>
              {t("about.vision.text")}
            </p>
          </div>
        </div>
      </section>

      <section
        data-ocid="about.techniques.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <h2 className="font-sora font-bold text-2xl md:text-3xl text-white mb-8">
          {t("about.techniques")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {techniques.map((tech) => (
            <div
              key={tech.title}
              data-ocid={`about.technique.item.${tech.title}`}
              className="glass-card p-5"
            >
              <div className="text-3xl mb-2">{tech.emoji}</div>
              <h3 className="font-sora font-semibold text-white mb-1">
                {tech.title}
              </h3>
              <p className="text-sm" style={{ color: "#a7b3a7" }}>
                {tech.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        data-ocid="about.team.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <h2 className="font-sora font-bold text-2xl md:text-3xl text-white mb-8">
          {t("about.team")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {team.map((member) => (
            <div
              key={member.name}
              data-ocid={`about.team.item.${member.name}`}
              className="glass-card p-5 text-center"
            >
              <div className="text-4xl mb-3">{member.emoji}</div>
              <h3 className="font-sora font-semibold text-white mb-1">
                {member.name}
              </h3>
              <p className="text-sm mb-2" style={{ color: "#84cc16" }}>
                {member.role}
              </p>
              <a
                href={`tel:${member.phone}`}
                className="text-sm hover:text-lime-400 transition-colors"
                style={{ color: "#a7b3a7" }}
              >
                📞 {member.phone}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section
        data-ocid="about.future.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <h2 className="font-sora font-bold text-2xl text-white mb-4">
          {t("about.futureScope")}
        </h2>
        <div className="glass-card p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {futureItems.map((f) => (
            <div key={f.title} className="text-center p-3">
              <div className="text-3xl mb-2">{f.emoji}</div>
              <h4 className="font-sora font-semibold text-white mb-1">
                {f.title}
              </h4>
              <p className="text-sm" style={{ color: "#a7b3a7" }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        data-ocid="about.join.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <div
          className="glass-card p-8 text-center"
          style={{
            background: "rgba(132,204,22,0.07)",
            border: "1px solid rgba(132,204,22,0.25)",
          }}
        >
          <h2 className="font-sora font-bold text-2xl text-white mb-3">
            {t("about.joinUs")}
          </h2>
          <p style={{ color: "#a7b3a7" }}>{t("about.joinUs.desc")}</p>
        </div>
      </section>
    </main>
  );
}
