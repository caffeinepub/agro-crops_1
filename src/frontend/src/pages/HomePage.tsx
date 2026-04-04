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
    emoji: "\u{1F33E}",
  },
  {
    keyTitle: "home.feature2",
    keyDesc: "home.feature2.desc",
    emoji: "\u{1F331}",
  },
  {
    keyTitle: "home.feature3",
    keyDesc: "home.feature3.desc",
    emoji: "\u267B\uFE0F",
  },
  {
    keyTitle: "home.feature4",
    keyDesc: "home.feature4.desc",
    emoji: "\uD83D\uDCB0",
  },
];

const seasonCrops: {
  name: string;
  emoji: string;
  desc: string;
  image: string | null;
}[] = [
  {
    name: "Rice",
    emoji: "\u{1F33E}",
    desc: "Kharif crop | Best season",
    image: "/assets/generated/crop-rice.dim_400x300.jpg",
  },
  {
    name: "Cotton",
    emoji: "\uD83E\uDDF5",
    desc: "Cash crop | Premium price",
    image: null,
  },
  {
    name: "Sugarcane",
    emoji: "\uD83C\uDF6C",
    desc: "Year-round | High yield",
    image: "/assets/generated/crop-sugarcane.dim_400x300.jpg",
  },
];

const futureCards = [
  { keyTitle: "home.ai", keyDesc: "home.ai.desc", emoji: "\uD83E\uDD16" },
  { keyTitle: "home.drone", keyDesc: "home.drone.desc", emoji: "\uD83E\uDEF8" },
  {
    keyTitle: "home.irrigation",
    keyDesc: "home.irrigation.desc",
    emoji: "\uD83D\uDCA7",
  },
];

const schemeHighlights = [
  {
    name: "PM-KISAN",
    desc: "₹6000/year direct income support",
    emoji: "\uD83C\uDFE6",
  },
  {
    name: "PMFBY",
    desc: "Crop insurance at 2% premium",
    emoji: "\uD83D\uDEE1\uFE0F",
  },
  {
    name: "KCC",
    desc: "Kisan Credit Card at 7% interest",
    emoji: "\uD83D\uDCB3",
  },
];

const testimonials = [
  {
    name: "Ramesh Patel",
    location: "Pune, Maharashtra",
    role: "Small Farmer",
    quote:
      "Since switching to organic farming with Agro Crops, my income has doubled in just 2 years. The crop guides helped me grow better tomatoes and the fertilizer recommendations improved my soil health tremendously.",
    photo: "/assets/generated/farmer-testimonial-1.dim_300x300.jpg",
  },
  {
    name: "Sunita Devi",
    location: "Nashik, Maharashtra",
    role: "Organic Grower",
    quote:
      "The government scheme information on this platform helped me get ₹6000 under PM-KISAN. I also learned proper irrigation techniques that saved 40% water usage.",
    photo: "/assets/generated/farmer-testimonial-2.dim_300x300.jpg",
  },
  {
    name: "Harbans Singh",
    location: "Ludhiana, Punjab",
    role: "Progressive Farmer",
    quote:
      "The equipment guide and cattle care information is exceptional. My dairy farm now generates 30% more revenue following the health tips provided here.",
    photo: "/assets/generated/farmer-testimonial-3.dim_300x300.jpg",
  },
];

const seasons = [
  {
    name: "Kharif",
    period: "June – October",
    emoji: "\uD83C\uDF26\uFE0F",
    tips: "Prepare soil early, sow paddy/cotton/soybean, ensure proper drainage to avoid waterlogging during heavy rains.",
    color: "#2e7d32",
  },
  {
    name: "Rabi",
    period: "October – March",
    emoji: "\u2603\uFE0F",
    tips: "Sow wheat, mustard, chickpea. Irrigation is essential. Protect against frost during Dec–Jan using straw mulch.",
    color: "#1565c0",
  },
  {
    name: "Zaid",
    period: "February – May",
    emoji: "\u2600\uFE0F",
    tips: "Grow short-duration crops like cucumber, melon, watermelon. Frequent watering needed. Use heat-resistant varieties.",
    color: "#e65100",
  },
  {
    name: "Year-Round",
    period: "All Seasons",
    emoji: "\uD83D\uDD04",
    tips: "Practice crop rotation, test soil every 6 months, maintain composting pits, add biofertilizers regularly.",
    color: "#6a1b9a",
  },
];

const impactStats = [
  {
    value: "2,500+",
    label: "Farmers Empowered",
    emoji: "\uD83D\uDC68\u200D\uD83C\uDF3E",
  },
  { value: "35+", label: "Organic Crops Documented", emoji: "\uD83C\uDF31" },
  {
    value: "₹1.2 Cr",
    label: "Subsidy Claims Facilitated",
    emoji: "\uD83C\uDFE6",
  },
  { value: "98%", label: "Customer Satisfaction", emoji: "\u2B50" },
];

export default function HomePage({ onNavigate }: Props) {
  const { t } = useLang();

  return (
    <main>
      <section
        data-ocid="home.hero.section"
        className="flex items-center justify-center relative"
        style={{
          backgroundImage: "url(/assets/generated/hero-farm.dim_1200x600.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "60vh",
          padding: "5rem 1rem",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(0,0,0,0.45)" }}
        />
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <h1
            className="font-bold text-4xl md:text-6xl mb-4"
            style={{ color: "#ffffff", fontFamily: "Fraunces, Georgia, serif" }}
          >
            {t("hero.welcome")}
          </h1>
          <p className="text-lg md:text-xl mb-8" style={{ color: "#c8e0b0" }}>
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              type="button"
              data-ocid="home.explore.button"
              onClick={() => onNavigate("farm")}
              className="px-8 py-3 rounded-full font-semibold transition-all"
              style={{ background: "#ffffff", color: "#3a6b1e" }}
            >
              {t("hero.explore")}
            </button>
            <button
              type="button"
              data-ocid="home.getstarted.button"
              onClick={() => onNavigate("about")}
              className="px-8 py-3 rounded-full font-semibold transition-all"
              style={{
                border: "2px solid rgba(255,255,255,0.6)",
                color: "#ffffff",
                background: "transparent",
              }}
            >
              {t("hero.getStarted")}
            </button>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section
        data-ocid="home.impact.section"
        className="py-10 px-4"
        style={{ background: "#3a6b1e" }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {impactStats.map((stat, i) => (
            <div
              key={stat.label}
              data-ocid={`home.impact.item.${i + 1}`}
              className="text-center"
            >
              <div className="text-3xl mb-1">{stat.emoji}</div>
              <div
                className="font-bold text-2xl md:text-3xl"
                style={{
                  color: "#ffffff",
                  fontFamily: "Fraunces, Georgia, serif",
                }}
              >
                {stat.value}
              </div>
              <div className="text-sm mt-1" style={{ color: "#c8e0b0" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        data-ocid="home.why_organic.section"
        className="py-16 px-4 max-w-7xl mx-auto"
      >
        <div className="flex items-center justify-between mb-3">
          <h2
            className="font-bold text-2xl md:text-3xl"
            style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
          >
            {t("home.whyOrganic")}
          </h2>
          <VoiceReader
            text={`${t("home.whyOrganic")}. ${t("home.whyOrganic.desc")}`}
          />
        </div>
        <p className="mb-8" style={{ color: "#6b6554" }}>
          {t("home.whyOrganic.desc")}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featureCards.map((c, i) => (
            <div
              key={c.keyTitle}
              data-ocid={`home.feature.item.${i + 1}`}
              className="glass-card p-5"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3"
                style={{ background: "#edf3e8" }}
              >
                {c.emoji}
              </div>
              <h3 className="font-semibold mb-1" style={{ color: "#2c2416" }}>
                {t(c.keyTitle as Parameters<typeof t>[0])}
              </h3>
              <p className="text-sm" style={{ color: "#6b6554" }}>
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
        <h2
          className="font-bold text-2xl md:text-3xl mb-8"
          style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
        >
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
              {c.image ? (
                <img
                  src={c.image}
                  alt={c.name}
                  className="w-full h-32 object-cover rounded-xl mb-4"
                />
              ) : (
                <div
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4"
                  style={{ background: "#edf3e8" }}
                >
                  {c.emoji}
                </div>
              )}
              <h3
                className="font-bold text-xl mb-1"
                style={{
                  color: "#2c2416",
                  fontFamily: "Fraunces, Georgia, serif",
                }}
              >
                {c.name}
              </h3>
              <p className="text-sm" style={{ color: "#6b6554" }}>
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Seasonal Farming Tips */}
      <section
        data-ocid="home.seasonal_tips.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <h2
          className="font-bold text-2xl md:text-3xl mb-8"
          style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
        >
          Seasonal Farming Tips
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {seasons.map((s, i) => (
            <div
              key={s.name}
              data-ocid={`home.seasonal_tips.item.${i + 1}`}
              className="glass-card p-5"
            >
              <div className="text-3xl mb-2">{s.emoji}</div>
              <h3
                className="font-bold text-base mb-1"
                style={{
                  color: s.color,
                  fontFamily: "Fraunces, Georgia, serif",
                }}
              >
                {s.name}
              </h3>
              <p
                className="text-xs font-medium mb-2"
                style={{
                  color: "#3a6b1e",
                  background: "#edf3e8",
                  display: "inline-block",
                  padding: "2px 8px",
                  borderRadius: "999px",
                }}
              >
                {s.period}
              </p>
              <p className="text-sm" style={{ color: "#6b6554" }}>
                {s.tips}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        data-ocid="home.schemes.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <h2
          className="font-bold text-2xl md:text-3xl mb-8"
          style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
        >
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
              <h3
                className="font-bold text-lg mt-2 mb-1"
                style={{ color: "#2c2416" }}
              >
                {s.name}
              </h3>
              <p className="text-sm" style={{ color: "#6b6554" }}>
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
        <h2
          className="font-bold text-2xl md:text-3xl mb-8"
          style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
        >
          {t("home.futureFarming")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {futureCards.map((c, i) => (
            <div
              key={c.keyTitle}
              data-ocid={`home.future.item.${i + 1}`}
              className="glass-card p-6"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4"
                style={{ background: "#edf3e8" }}
              >
                {c.emoji}
              </div>
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: "#2c2416" }}
              >
                {t(c.keyTitle as Parameters<typeof t>[0])}
              </h3>
              <p className="text-sm" style={{ color: "#6b6554" }}>
                {t(c.keyDesc as Parameters<typeof t>[0])}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Farmer Testimonials */}
      <section
        data-ocid="home.testimonials.section"
        className="py-14 px-4"
        style={{ background: "#f5f0e8" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-bold text-2xl md:text-3xl mb-3 text-center"
            style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
          >
            Success Stories from Our Farmers
          </h2>
          <p className="text-center mb-8" style={{ color: "#6b6554" }}>
            Real farmers, real results — hear their journeys
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                data-ocid={`home.testimonial.item.${i + 1}`}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="w-16 h-16 rounded-full object-cover"
                    style={{ border: "3px solid #b5c9a0" }}
                  />
                  <div>
                    <h3 className="font-bold" style={{ color: "#2c2416" }}>
                      {t.name}
                    </h3>
                    <p className="text-xs" style={{ color: "#3a6b1e" }}>
                      {t.role}
                    </p>
                    <p className="text-xs" style={{ color: "#6b6554" }}>
                      \uD83D\uDCCD {t.location}
                    </p>
                  </div>
                </div>
                <p
                  className="text-sm italic leading-relaxed"
                  style={{ color: "#6b6554" }}
                >
                  &#8220;{t.quote}&#8221;
                </p>
                <div className="mt-3 flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span
                      key={s}
                      className="text-sm"
                      style={{ color: "#a36b0a" }}
                    >
                      &#9733;
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        data-ocid="home.cta.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <div
          className="glass-card p-8 text-center"
          style={{ background: "#edf3e8", border: "1px solid #b5c9a0" }}
        >
          <h2
            className="font-bold text-2xl md:text-3xl mb-3"
            style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
          >
            {t("home.contactCta")}
          </h2>
          <p className="mb-6" style={{ color: "#6b6554" }}>
            {t("home.contactCta.desc")}
          </p>
          <button
            type="button"
            data-ocid="home.cta.button"
            onClick={() => onNavigate("contact")}
            className="px-8 py-3 rounded-full font-semibold text-white transition-all"
            style={{ background: "#3a6b1e" }}
          >
            {t("nav.contact")}
          </button>
        </div>
      </section>
    </main>
  );
}
