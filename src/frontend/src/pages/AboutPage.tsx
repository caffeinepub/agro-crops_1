import VoiceReader from "../components/VoiceReader";
import { useLang } from "../contexts/LangContext";

const stats = [
  { key: "about.stats.farmers", icon: "👨\u200d🌾" },
  { key: "about.stats.crops", icon: "🌾" },
  { key: "about.stats.states", icon: "🗺️" },
  { key: "about.stats.products", icon: "🛒" },
];

const techniques = [
  {
    title: "Composting",
    emoji: "🌱",
    desc: "Converting organic waste into rich fertilizer for soil health. Apply 2-4 tonnes per acre annually for best results.",
  },
  {
    title: "Crop Rotation",
    emoji: "🔄",
    desc: "Alternating crops seasonally to maintain soil nutrients and break pest cycles. Follow legume-cereal rotation.",
  },
  {
    title: "Natural Pest Control",
    emoji: "💪",
    desc: "Using neem oil, garlic spray, and beneficial insects like ladybirds to manage pests without chemicals.",
  },
  {
    title: "Green Manuring",
    emoji: "🌿",
    desc: "Growing legume crops like dhaincha or sunn hemp and plowing them into soil to add 60-80 kg N/acre.",
  },
  {
    title: "Mulching",
    emoji: "🍂",
    desc: "Covering soil with organic matter to retain moisture, suppress weeds, and regulate soil temperature.",
  },
  {
    title: "Vermicomposting",
    emoji: "🪱",
    desc: "Using earthworms to produce nutrient-rich castings — 5x more nutrient-dense than regular compost.",
  },
  {
    title: "Biodynamic Farming",
    emoji: "🌍",
    desc: "Treating the farm as a self-sustaining ecosystem, using lunar calendar for planting and harvesting decisions.",
  },
  {
    title: "Water Harvesting",
    emoji: "💧",
    desc: "Collecting and storing rainwater in farm ponds or check dams for use during dry spells in irrigation.",
  },
  {
    title: "Intercropping",
    emoji: "🌻",
    desc: "Growing two or more crops simultaneously in the same field to maximize land use and improve biodiversity.",
  },
];

const team = [
  {
    name: "Chaitanya Kharat",
    role: "CEO & Founder",
    phone: "8421016006",
    emoji: "👨\u200d💼",
    bio: "Visionary agronomist with 10+ years in organic farming advocacy and AgriTech innovation.",
  },
  {
    name: "Aditya Anarase",
    role: "Chief Agricultural Officer",
    phone: "9423653174",
    emoji: "👨\u200d🌾",
    bio: "Expert in sustainable farming practices, soil science, and organic certification processes.",
  },
  {
    name: "Dhananjay Dhadge",
    role: "Head of Marketing",
    phone: "7219872347",
    emoji: "👨\u200d💻",
    bio: "Digital marketing specialist connecting organic farmers to modern e-commerce platforms.",
  },
  {
    name: "Shivam Murkute",
    role: "Head of Marketing",
    phone: "8378093053",
    emoji: "🧑\u200d💼",
    bio: "Rural market development expert building farmer communities across Maharashtra and beyond.",
  },
];

const futureItems = [
  {
    emoji: "🤖",
    title: "AI-Driven Crop Advisory",
    desc: "Real-time recommendations using satellite imagery and ML algorithms for precision farming.",
  },
  {
    emoji: "📱",
    title: "Mobile Farmer App",
    desc: "Vernacular app for every farmer with offline support in 12+ Indian languages.",
  },
  {
    emoji: "🌐",
    title: "Global Market Access",
    desc: "Connecting Indian organic farmers directly to international organic product buyers.",
  },
];

const timeline = [
  {
    year: "2019",
    title: "Foundation",
    desc: "Founded by Chaitanya Kharat with a vision to empower organic farmers across India.",
    emoji: "🌱",
  },
  {
    year: "2020",
    title: "First 500 Farmers",
    desc: "Onboarded 500 farmers across Maharashtra, launched the crop guide database with 25+ crops.",
    emoji: "👨\u200d🌾",
  },
  {
    year: "2021",
    title: "State Partnerships",
    desc: "Partnered with state agricultural departments in 5 states for scheme dissemination.",
    emoji: "🤝",
  },
  {
    year: "2022",
    title: "E-Commerce Launch",
    desc: "Launched organic product e-commerce platform with 60+ certified organic products.",
    emoji: "🛒",
  },
  {
    year: "2023",
    title: "National Expansion",
    desc: "Expanded to 25+ states with 2,500+ farmers empowered and ₹1.2 crore in subsidies facilitated.",
    emoji: "🇮🇳",
  },
  {
    year: "2024",
    title: "Digital Platform Launch",
    desc: "Launched multilingual digital platform in English, Hindi, and Marathi with real-time crop data.",
    emoji: "📱",
  },
  {
    year: "2025",
    title: "AgriTech Integration",
    desc: "Integrated drone advisory, IoT-based soil sensors, and AI crop recommendations for 500+ pilot farms.",
    emoji: "🫸",
  },
];

const certifications = [
  {
    emoji: "🏆",
    title: "NPOP Certified",
    desc: "National Programme for Organic Production certified platform — India's premier organic standard.",
  },
  {
    emoji: "🥇",
    title: "State Agriculture Award 2022",
    desc: "Recognized as Best AgriTech Platform by the Maharashtra Government for farmer empowerment.",
  },
  {
    emoji: "🌿",
    title: "ISO 9001:2015",
    desc: "Quality management certified operations ensuring consistent service delivery standards.",
  },
  {
    emoji: "🤝",
    title: "ICAR Collaboration",
    desc: "Research partnership with Indian Council of Agricultural Research for crop science advancement.",
  },
];

const partners = [
  {
    emoji: "🌱",
    name: "ICAR",
    fullName: "Indian Council of Agricultural Research",
    desc: "Research collaboration for crop variety development, soil science, and pest management innovations.",
  },
  {
    emoji: "🏦",
    name: "NABARD",
    fullName: "National Bank for Agriculture & Rural Development",
    desc: "Financial partner providing farmer credit, SHG linkage, and rural infrastructure funding support.",
  },
  {
    emoji: "🏫",
    name: "State Agri Universities",
    fullName: "State Agriculture Universities Network",
    desc: "Academic partnerships with IARI, PAU, MPKV for training, extension, and knowledge dissemination.",
  },
  {
    emoji: "🌾",
    name: "KVK Network",
    fullName: "Krishi Vigyan Kendra",
    desc: "700+ KVKs across India provide last-mile agricultural technology transfer and farmer training.",
  },
  {
    emoji: "🌍",
    name: "FAO India",
    fullName: "Food & Agriculture Organization of the UN",
    desc: "Technical partner for sustainable agriculture programs, food security, and agro-ecology initiatives.",
  },
  {
    emoji: "📦",
    name: "APEDA",
    fullName: "Agricultural & Processed Food Export Development Authority",
    desc: "Export partner helping certified organic farmers access international markets in 120+ countries.",
  },
];

const awards = [
  {
    emoji: "🏆",
    title: "National Best AgriTech 2022",
    body: "ASSOCHAM India",
    desc: "Recognized for innovation in digital agriculture and farmer empowerment across rural Maharashtra.",
  },
  {
    emoji: "🥇",
    title: "ICAR Excellence Award 2021",
    body: "Indian Council of Agricultural Research",
    desc: "Awarded for outstanding contribution to organic farming knowledge dissemination in India.",
  },
  {
    emoji: "🌾",
    title: "State Farmer Support Award 2023",
    body: "Maharashtra Government",
    desc: "Felicitated for facilitating ₹1.2 crore in government scheme benefits for 2,500+ farmers.",
  },
  {
    emoji: "💻",
    title: "Digital India Agriculture Champion 2022",
    body: "MeitY India",
    desc: "Recognized under Digital India initiative for rural digital literacy in the agriculture sector.",
  },
];

const rdInitiatives = [
  {
    emoji: "🤖",
    title: "AI Crop Disease Detection",
    progress: 65,
    desc: "Developing a mobile AI tool that identifies 50+ crop diseases from leaf photos. Pilot phase with 100 farmers in Vidarbha.",
    status: "Pilot Testing",
  },
  {
    emoji: "🚜",
    title: "IoT Soil Monitoring System",
    progress: 40,
    desc: "Low-cost IoT sensors measuring soil moisture, temperature, and NPK levels in real-time. Prototype ready for field deployment.",
    status: "Prototype Ready",
  },
  {
    emoji: "🌾",
    title: "Organic Seed Bank",
    progress: 80,
    desc: "Building a repository of 200+ heritage and heirloom crop varieties with their growing guides and nutritional profiles.",
    status: "Active Development",
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
              🎯 {t("about.mission")}
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
              👁️ {t("about.vision")}
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
                      &mdash; {item.title}
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
        className="py-12 px-4"
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

      {/* Awards & Recognition */}
      <section
        data-ocid="about.awards.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <h2
          className="font-bold text-2xl md:text-3xl mb-8"
          style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
        >
          Awards &amp; Recognition
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {awards.map((award, i) => (
            <div
              key={award.title}
              data-ocid={`about.award.item.${i + 1}`}
              className="glass-card p-5"
              style={{ borderTop: "3px solid #3a6b1e" }}
            >
              <div className="text-4xl mb-3">{award.emoji}</div>
              <h3 className="font-bold mb-1" style={{ color: "#2c2416" }}>
                {award.title}
              </h3>
              <p
                className="text-xs mb-2 font-medium"
                style={{ color: "#3a6b1e" }}
              >
                By: {award.body}
              </p>
              <p className="text-sm" style={{ color: "#6b6554" }}>
                {award.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Partners */}
      <section
        data-ocid="about.partners.section"
        className="py-12 px-4"
        style={{ background: "#f5f0e8" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-bold text-2xl md:text-3xl mb-3"
            style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
          >
            Our Partners &amp; Collaborators
          </h2>
          <p className="mb-8 text-sm" style={{ color: "#6b6554" }}>
            Trusted partnerships that power our impact across India
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {partners.map((partner, i) => (
              <div
                key={partner.name}
                data-ocid={`about.partner.item.${i + 1}`}
                className="glass-card p-5"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: "#edf3e8" }}
                  >
                    {partner.emoji}
                  </div>
                  <div>
                    <h3 className="font-bold" style={{ color: "#2c2416" }}>
                      {partner.name}
                    </h3>
                    <p className="text-xs mb-2" style={{ color: "#3a6b1e" }}>
                      {partner.fullName}
                    </p>
                    <p className="text-sm" style={{ color: "#6b6554" }}>
                      {partner.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Development */}
      <section
        data-ocid="about.rd.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <h2
          className="font-bold text-2xl md:text-3xl mb-3"
          style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
        >
          Research &amp; Development Initiatives
        </h2>
        <p className="mb-8 text-sm" style={{ color: "#6b6554" }}>
          Ongoing R&amp;D programs to transform Indian agriculture with
          technology
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {rdInitiatives.map((rd, i) => (
            <div
              key={rd.title}
              data-ocid={`about.rd.item.${i + 1}`}
              className="glass-card p-5"
            >
              <div className="text-3xl mb-3">{rd.emoji}</div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-bold" style={{ color: "#2c2416" }}>
                  {rd.title}
                </h3>
                <span
                  className="px-2 py-0.5 rounded-full text-xs"
                  style={{ background: "#dcfce7", color: "#15803d" }}
                >
                  {rd.status}
                </span>
              </div>
              <p className="text-sm mb-4" style={{ color: "#6b6554" }}>
                {rd.desc}
              </p>
              <div
                className="w-full rounded-full h-2"
                style={{ background: "#e2d8cc" }}
              >
                <div
                  className="h-2 rounded-full"
                  style={{ width: `${rd.progress}%`, background: "#3a6b1e" }}
                />
              </div>
              <p className="text-xs mt-1" style={{ color: "#6b6554" }}>
                {rd.progress}% complete
              </p>
            </div>
          ))}
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
