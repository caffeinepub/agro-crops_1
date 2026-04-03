import VoiceReader from "../components/VoiceReader";
import { useLang } from "../contexts/LangContext";

const stats = [
  { key: "about.stats.farmers", icon: "\uD83D\uDC68\u200D\uD83C\uDF3E" },
  { key: "about.stats.crops", icon: "\uD83C\uDF3E" },
  { key: "about.stats.states", icon: "\uD83D\uDDFA\uFE0F" },
  { key: "about.stats.products", icon: "\uD83D\uDED2" },
];

const techniques = [
  {
    title: "Composting",
    emoji: "\uD83C\uDF31",
    desc: "Converting organic waste into rich fertilizer for soil health. Apply 2-4 tonnes per acre annually for best results.",
  },
  {
    title: "Crop Rotation",
    emoji: "\uD83D\uDD04",
    desc: "Alternating crops seasonally to maintain soil nutrients and break pest cycles. Follow legume-cereal rotation.",
  },
  {
    title: "Natural Pest Control",
    emoji: "\uD83D\uDCAA",
    desc: "Using neem oil, garlic spray, and beneficial insects like ladybirds to manage pests without chemicals.",
  },
  {
    title: "Green Manuring",
    emoji: "\uD83C\uDF3F",
    desc: "Growing legume crops like dhaincha or sunn hemp and plowing them into soil to add 60-80 kg N/acre.",
  },
  {
    title: "Mulching",
    emoji: "\uD83C\uDF42",
    desc: "Covering soil with organic matter to retain moisture, suppress weeds, and regulate soil temperature.",
  },
  {
    title: "Vermicomposting",
    emoji: "\uD83E\uDEB1",
    desc: "Using earthworms to produce nutrient-rich castings — 5x more nutrient-dense than regular compost.",
  },
  {
    title: "Biodynamic Farming",
    emoji: "\uD83C\uDF0D",
    desc: "Treating the farm as a self-sustaining ecosystem, using lunar calendar for planting and harvesting decisions.",
  },
  {
    title: "Water Harvesting",
    emoji: "\uD83D\uDCA7",
    desc: "Collecting and storing rainwater in farm ponds or check dams for use during dry spells in irrigation.",
  },
  {
    title: "Intercropping",
    emoji: "\uD83C\uDF3B",
    desc: "Growing two or more crops simultaneously in the same field to maximize land use and improve biodiversity.",
  },
];

const team = [
  {
    name: "Chaitanya Kharat",
    role: "CEO & Founder",
    phone: "8421016006",
    emoji: "\uD83D\uDC68\u200D\uD83D\uDCBC",
    bio: "Visionary agronomist with 10+ years in organic farming advocacy and AgriTech innovation.",
  },
  {
    name: "Aditya Anarase",
    role: "Chief Agricultural Officer",
    phone: "9423653174",
    emoji: "\uD83D\uDC68\u200D\uD83C\uDF3E",
    bio: "Expert in sustainable farming practices, soil science, and organic certification processes.",
  },
  {
    name: "Dhananjay Dhadge",
    role: "Head of Marketing",
    phone: "7219872347",
    emoji: "\uD83D\uDC68\u200D\uD83D\uDCBB",
    bio: "Digital marketing specialist connecting organic farmers to modern e-commerce platforms.",
  },
  {
    name: "Shivam Murkute",
    role: "Head of Marketing",
    phone: "8378093053",
    emoji: "\uD83E\uDDD1\u200D\uD83D\uDCBC",
    bio: "Rural market development expert building farmer communities across Maharashtra and beyond.",
  },
];

const futureItems = [
  {
    emoji: "\uD83E\uDD16",
    title: "AI-Driven Crop Advisory",
    desc: "Real-time recommendations using satellite imagery and ML algorithms for precision farming.",
  },
  {
    emoji: "\uD83D\uDCF1",
    title: "Mobile Farmer App",
    desc: "Vernacular app for every farmer with offline support in 12+ Indian languages.",
  },
  {
    emoji: "\uD83C\uDF10",
    title: "Global Market Access",
    desc: "Connecting Indian organic farmers directly to international organic product buyers.",
  },
];

const timeline = [
  {
    year: "2019",
    title: "Foundation",
    desc: "Founded by Chaitanya Kharat with a vision to empower organic farmers across India.",
    emoji: "\uD83C\uDF31",
  },
  {
    year: "2020",
    title: "First 500 Farmers",
    desc: "Onboarded 500 farmers across Maharashtra, launched the crop guide database with 25+ crops.",
    emoji: "\uD83D\uDC68\u200D\uD83C\uDF3E",
  },
  {
    year: "2021",
    title: "State Partnerships",
    desc: "Partnered with state agricultural departments in 5 states for scheme dissemination.",
    emoji: "\uD83E\uDD1D",
  },
  {
    year: "2022",
    title: "E-Commerce Launch",
    desc: "Launched organic product e-commerce platform with 60+ certified organic products.",
    emoji: "\uD83D\uDED2",
  },
  {
    year: "2023",
    title: "National Expansion",
    desc: "Expanded to 25+ states with 2,500+ farmers empowered and \u20B91.2 crore in subsidies facilitated.",
    emoji: "\uD83C\uDDEE\uD83C\uDDF3",
  },
];

const certifications = [
  {
    emoji: "\uD83C\uDFC6",
    title: "NPOP Certified",
    desc: "National Programme for Organic Production certified platform — India's premier organic standard.",
  },
  {
    emoji: "\uD83E\uDD47",
    title: "State Agriculture Award 2022",
    desc: "Recognized as Best AgriTech Platform by the Maharashtra Government for farmer empowerment.",
  },
  {
    emoji: "\uD83C\uDF3F",
    title: "ISO 9001:2015",
    desc: "Quality management certified operations ensuring consistent service delivery standards.",
  },
  {
    emoji: "\uD83E\uDD1D",
    title: "ICAR Collaboration",
    desc: "Research partnership with Indian Council of Agricultural Research for crop science advancement.",
  },
];

export default function AboutPage() {
  const { t } = useLang();

  return (
    <main>
      <section
        className="flex items-center justify-center text-center"
        style={{
          background: "#3a6b1e",
          minHeight: "40vh",
          padding: "4rem 1rem",
        }}
      >
        <div>
          <h1
            className="font-bold text-4xl md:text-5xl mb-3"
            style={{ color: "#ffffff", fontFamily: "Fraunces, Georgia, serif" }}
          >
            {t("about.hero")}
          </h1>
          <p className="text-lg" style={{ color: "#c8e0b0" }}>
            Growing a greener tomorrow, together
          </p>
        </div>
      </section>

      <section
        data-ocid="about.stats.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <div
              key={s.key}
              data-ocid={`about.stat.item.${i + 1}`}
              className="glass-card p-5 text-center"
            >
              <div className="text-3xl mb-2">{s.icon}</div>
              <p
                className="font-bold text-xl"
                style={{
                  color: "#3a6b1e",
                  fontFamily: "Fraunces, Georgia, serif",
                }}
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
          <h2
            className="font-bold text-2xl md:text-3xl"
            style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
          >
            {t("about.mission")} &amp; {t("about.vision")}
          </h2>
          <VoiceReader
            text={`${t("about.mission.text")} ${t("about.vision.text")}`}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-6">
            <h3
              className="font-bold text-xl mb-3"
              style={{
                color: "#3a6b1e",
                fontFamily: "Fraunces, Georgia, serif",
              }}
            >
              \uD83C\uDFAF {t("about.mission")}
            </h3>
            <p style={{ color: "#6b6554", lineHeight: "1.8" }}>
              {t("about.mission.text")}
            </p>
          </div>
          <div className="glass-card p-6">
            <h3
              className="font-bold text-xl mb-3"
              style={{
                color: "#3a6b1e",
                fontFamily: "Fraunces, Georgia, serif",
              }}
            >
              \uD83D\uDC41\uFE0F {t("about.vision")}
            </h3>
            <p style={{ color: "#6b6554", lineHeight: "1.8" }}>
              {t("about.vision.text")}
            </p>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section
        data-ocid="about.timeline.section"
        className="py-12 px-4 max-w-5xl mx-auto"
      >
        <h2
          className="font-bold text-2xl md:text-3xl mb-10"
          style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
        >
          Our Journey
        </h2>
        <div className="relative">
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5"
            style={{ background: "#b5c9a0" }}
          />
          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div
                key={item.year}
                data-ocid={`about.timeline.item.${i + 1}`}
                className="flex gap-6 items-start"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-xl flex-shrink-0 relative z-10"
                  style={{ background: "#3a6b1e", border: "3px solid #ffffff" }}
                >
                  {item.emoji}
                </div>
                <div className="glass-card p-4 flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span
                      className="font-bold text-base"
                      style={{ color: "#3a6b1e" }}
                    >
                      {item.year}
                    </span>
                    <span
                      className="font-semibold"
                      style={{ color: "#2c2416" }}
                    >
                      — {item.title}
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: "#6b6554" }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section
        data-ocid="about.certifications.section"
        className="py-12 px-4 max-w-7xl mx-auto"
        style={{ background: "#f5f0e8" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-bold text-2xl md:text-3xl mb-8"
            style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
          >
            Certifications &amp; Recognition
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map((cert, i) => (
              <div
                key={cert.title}
                data-ocid={`about.certification.item.${i + 1}`}
                className="glass-card p-5 text-center"
              >
                <div className="text-4xl mb-3">{cert.emoji}</div>
                <h3 className="font-bold mb-2" style={{ color: "#2c2416" }}>
                  {cert.title}
                </h3>
                <p className="text-sm" style={{ color: "#6b6554" }}>
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        data-ocid="about.techniques.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <h2
          className="font-bold text-2xl md:text-3xl mb-8"
          style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
        >
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
              <h3 className="font-semibold mb-1" style={{ color: "#2c2416" }}>
                {tech.title}
              </h3>
              <p className="text-sm" style={{ color: "#6b6554" }}>
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
        <h2
          className="font-bold text-2xl md:text-3xl mb-8"
          style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
        >
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
              <h3 className="font-semibold mb-1" style={{ color: "#2c2416" }}>
                {member.name}
              </h3>
              <p className="text-sm mb-2" style={{ color: "#3a6b1e" }}>
                {member.role}
              </p>
              <p
                className="text-xs mb-3"
                style={{ color: "#6b6554", lineHeight: "1.6" }}
              >
                {member.bio}
              </p>
              <a
                href={`tel:${member.phone}`}
                className="text-sm"
                style={{ color: "#6b6554" }}
              >
                \uD83D\uDCDE {member.phone}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section
        data-ocid="about.future.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <h2
          className="font-bold text-2xl mb-4"
          style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
        >
          {t("about.futureScope")}
        </h2>
        <div className="glass-card p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          {futureItems.map((f) => (
            <div key={f.title} className="text-center p-3">
              <div className="text-3xl mb-2">{f.emoji}</div>
              <h4 className="font-semibold mb-1" style={{ color: "#2c2416" }}>
                {f.title}
              </h4>
              <p className="text-sm" style={{ color: "#6b6554" }}>
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
          style={{ background: "#edf3e8", border: "1px solid #b5c9a0" }}
        >
          <h2
            className="font-bold text-2xl mb-3"
            style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
          >
            {t("about.joinUs")}
          </h2>
          <p style={{ color: "#6b6554" }}>{t("about.joinUs.desc")}</p>
        </div>
      </section>
    </main>
  );
}
