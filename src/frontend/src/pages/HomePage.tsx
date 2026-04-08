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
  },
  {
    keyTitle: "home.feature2",
    keyDesc: "home.feature2.desc",
    emoji: "🌱",
  },
  {
    keyTitle: "home.feature3",
    keyDesc: "home.feature3.desc",
    emoji: "♻️",
  },
  {
    keyTitle: "home.feature4",
    keyDesc: "home.feature4.desc",
    emoji: "💰",
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
    emoji: "🌾",
    desc: "Kharif crop | Best season",
    image: "/assets/generated/crop-rice.dim_400x300.jpg",
  },
  {
    name: "Cotton",
    emoji: "🧵",
    desc: "Cash crop | Premium price",
    image: null,
  },
  {
    name: "Sugarcane",
    emoji: "🍬",
    desc: "Year-round | High yield",
    image: "/assets/generated/crop-sugarcane.dim_400x300.jpg",
  },
];

const futureCards = [
  { keyTitle: "home.ai", keyDesc: "home.ai.desc", emoji: "🤖" },
  { keyTitle: "home.drone", keyDesc: "home.drone.desc", emoji: "🫸" },
  {
    keyTitle: "home.irrigation",
    keyDesc: "home.irrigation.desc",
    emoji: "💧",
  },
];

const schemeHighlights = [
  {
    name: "PM-KISAN",
    desc: "₹6000/year direct income support",
    emoji: "🏦",
  },
  {
    name: "PMFBY",
    desc: "Crop insurance at 2% premium",
    emoji: "🛡️",
  },
  {
    name: "KCC",
    desc: "Kisan Credit Card at 7% interest",
    emoji: "💳",
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
    emoji: "🌦️",
    tips: "Prepare soil early, sow paddy/cotton/soybean, ensure proper drainage to avoid waterlogging during heavy rains.",
    color: "#2e7d32",
  },
  {
    name: "Rabi",
    period: "October – March",
    emoji: "☃️",
    tips: "Sow wheat, mustard, chickpea. Irrigation is essential. Protect against frost during Dec–Jan using straw mulch.",
    color: "#1565c0",
  },
  {
    name: "Zaid",
    period: "February – May",
    emoji: "☀️",
    tips: "Grow short-duration crops like cucumber, melon, watermelon. Frequent watering needed. Use heat-resistant varieties.",
    color: "#e65100",
  },
  {
    name: "Year-Round",
    period: "All Seasons",
    emoji: "🔄",
    tips: "Practice crop rotation, test soil every 6 months, maintain composting pits, add biofertilizers regularly.",
    color: "#6a1b9a",
  },
];

const impactStats = [
  {
    value: "2,500+",
    label: "Farmers Empowered",
    emoji: "👨\u200d🌾",
  },
  { value: "35+", label: "Organic Crops Documented", emoji: "🌱" },
  {
    value: "₹1.2 Cr",
    label: "Subsidy Claims Facilitated",
    emoji: "🏦",
  },
  { value: "98%", label: "Customer Satisfaction", emoji: "⭐" },
];

const marketPrices = [
  { crop: "Tomato", price: "₹25/kg", trend: "↑", trendColor: "#16a34a" },
  { crop: "Onion", price: "₹20/kg", trend: "↓", trendColor: "#dc2626" },
  { crop: "Potato", price: "₹15/kg", trend: "→", trendColor: "#d97706" },
  { crop: "Rice", price: "₹35/kg", trend: "↑", trendColor: "#16a34a" },
  { crop: "Wheat", price: "₹28/kg", trend: "→", trendColor: "#d97706" },
  { crop: "Cotton", price: "₹55/kg", trend: "↑", trendColor: "#16a34a" },
  { crop: "Sugarcane", price: "₹3/kg", trend: "→", trendColor: "#d97706" },
  { crop: "Soybean", price: "₹48/kg", trend: "↑", trendColor: "#16a34a" },
];

const farmingCalendar = [
  {
    month: "Jan",
    activities: ["Rabi irrigation", "Wheat top-dress", "Mustard harvest prep"],
  },
  {
    month: "Feb",
    activities: ["Rabi harvesting begins", "Soil testing", "Summer crop prep"],
  },
  {
    month: "Mar",
    activities: [
      "Wheat/Mustard harvest",
      "Post-harvest soil treatment",
      "Zaid sowing",
    ],
  },
  {
    month: "Apr",
    activities: ["Zaid crops sowing", "Ginger/Turmeric planting", "Composting"],
  },
  {
    month: "May",
    activities: [
      "Summer crops harvesting",
      "Deep ploughing",
      "Field preparation",
    ],
  },
  {
    month: "Jun",
    activities: [
      "Kharif sowing starts",
      "Paddy nursery",
      "Cotton/Soybean sowing",
    ],
  },
  {
    month: "Jul",
    activities: [
      "Paddy transplanting",
      "Kharif weeding",
      "Pest scouting begins",
    ],
  },
  {
    month: "Aug",
    activities: [
      "Top-dressing Kharif crops",
      "Drainage management",
      "Disease monitoring",
    ],
  },
  {
    month: "Sep",
    activities: [
      "Kharif harvesting begins",
      "Rabi preparation starts",
      "Seed selection",
    ],
  },
  {
    month: "Oct",
    activities: ["Rice harvest", "Rabi sowing (wheat/gram)", "Soil amendment"],
  },
  {
    month: "Nov",
    activities: ["Rabi crop care", "Irrigation scheduling", "FYM application"],
  },
  {
    month: "Dec",
    activities: ["Rabi weeding", "Cold protection", "Equipment maintenance"],
  },
];

const soilTestingCards = [
  {
    emoji: "🧪",
    title: "Why Test Your Soil?",
    desc: "Soil testing reveals pH, NPK levels, and micronutrient deficiencies. Applying the right fertilizer based on test results can increase yield by 20-40% and reduce fertilizer waste.",
  },
  {
    emoji: "📋",
    title: "How to Collect Sample",
    desc: "Collect 250g of soil from 8-10 spots in the field at 0-15 cm depth. Mix all samples, air-dry, and put 500g in a labeled bag. Submit before sowing season.",
  },
  {
    emoji: "💵",
    title: "Cost of Testing",
    desc: "Soil testing costs ₹200-₹500 at private labs. Government soil testing labs (KVK, Agriculture Department) offer FREE testing for farmers. Get your Soil Health Card today.",
  },
  {
    emoji: "🌾",
    title: "Where to Get It Done",
    desc: "Contact your nearest Krishi Vigyan Kendra (KVK), District Agriculture Office, or apply online at soilhealth.dac.gov.in. Results available in 15-30 days.",
  },
];

const expertTips = [
  {
    emoji: "🌱",
    title: "Seed Selection",
    desc: "Always use certified seeds from registered dealers. High-quality seeds improve germination by 20-30%. Store seeds in cool, dry conditions below 15°C to maintain viability.",
  },
  {
    emoji: "💧",
    title: "Water Conservation",
    desc: "Practice deficit irrigation — give 70-80% of crop water requirement for non-critical stages. Use mulching to reduce soil evaporation by 30-40%. Irrigate early morning.",
  },
  {
    emoji: "🌿",
    title: "Organic Fertilizers",
    desc: "Apply 2-4 tonnes of compost or vermicompost per acre per season. Compost improves soil structure and adds beneficial microbes that fix nitrogen and solubilize phosphorus.",
  },
  {
    emoji: "👁️",
    title: "Pest Scouting",
    desc: "Walk fields twice a week and examine 20 random plants per acre. Use Economic Threshold Level (ETL) before spraying — avoiding unnecessary pesticide use saves ₹500-2000/acre/season.",
  },
  {
    emoji: "🔄",
    title: "Crop Rotation",
    desc: "Rotate cereals with legumes to naturally replenish nitrogen in soil (40-60 kg N/acre). This breaks pest cycles, improves soil microbiome, and reduces fertilizer costs by 30%.",
  },
  {
    emoji: "📦",
    title: "Post-Harvest Storage",
    desc: "Use hermetic (airtight) storage bags to prevent grain losses. Proper storage can reduce post-harvest losses from 15-20% to less than 2%. Clean storage before filling.",
  },
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

      {/* Monthly Farming Calendar */}
      <section
        data-ocid="home.calendar.section"
        className="py-12 px-4"
        style={{ background: "#f5f0e8" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-bold text-2xl md:text-3xl mb-2"
            style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
          >
            Monthly Farming Calendar
          </h2>
          <p className="mb-8 text-sm" style={{ color: "#6b6554" }}>
            Key activities by month — plan your farm operations in advance
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {farmingCalendar.map((item, i) => (
              <div
                key={item.month}
                data-ocid={`home.calendar.item.${i + 1}`}
                className="glass-card p-4"
              >
                <div
                  className="font-bold text-base mb-2"
                  style={{
                    color: "#3a6b1e",
                    fontFamily: "Fraunces, Georgia, serif",
                  }}
                >
                  {item.month}
                </div>
                <ul className="space-y-1">
                  {item.activities.map((act) => (
                    <li
                      key={act}
                      className="text-xs"
                      style={{ color: "#6b6554" }}
                    >
                      • {act}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Price Trends */}
      <section
        data-ocid="home.market_prices.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2
              className="font-bold text-2xl md:text-3xl"
              style={{
                color: "#2c2416",
                fontFamily: "Fraunces, Georgia, serif",
              }}
            >
              Current Market Price Trends
            </h2>
            <p className="text-sm mt-1" style={{ color: "#6b6554" }}>
              Approximate wholesale market prices (indicative — April 2026)
            </p>
          </div>
          <VoiceReader text="Current market prices for major crops" />
        </div>
        <div className="glass-card overflow-x-auto">
          <table className="w-full text-sm min-w-[500px]">
            <thead>
              <tr
                style={{
                  background: "#edf3e8",
                  borderBottom: "1px solid #b5c9a0",
                }}
              >
                {["Crop", "Approx. Price", "Trend"].map((h) => (
                  <th
                    key={h}
                    className="py-3 px-5 text-left font-semibold"
                    style={{ color: "#3a6b1e" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {marketPrices.map((row, i) => (
                <tr
                  key={row.crop}
                  data-ocid={`home.market_price.row.${i + 1}`}
                  style={{
                    borderBottom: "1px solid #e2d8cc",
                    background: i % 2 === 0 ? "#ffffff" : "#faf7f2",
                  }}
                >
                  <td
                    className="py-3 px-5 font-medium"
                    style={{ color: "#2c2416" }}
                  >
                    {row.crop}
                  </td>
                  <td className="py-3 px-5" style={{ color: "#6b6554" }}>
                    {row.price}
                  </td>
                  <td className="py-3 px-5">
                    <span
                      className="font-bold text-lg"
                      style={{ color: row.trendColor }}
                    >
                      {row.trend}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Soil Testing Importance */}
      <section
        data-ocid="home.soil_testing.section"
        className="py-12 px-4"
        style={{ background: "#f5f0e8" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-bold text-2xl md:text-3xl mb-3"
            style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
          >
            Soil Testing — Why It Matters
          </h2>
          <p className="mb-8 text-sm" style={{ color: "#6b6554" }}>
            Healthy soil = healthy crops. Know your soil before you sow.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {soilTestingCards.map((card, i) => (
              <div
                key={card.title}
                data-ocid={`home.soil_testing.item.${i + 1}`}
                className="glass-card p-5"
              >
                <div className="text-3xl mb-3">{card.emoji}</div>
                <h3 className="font-bold mb-2" style={{ color: "#2c2416" }}>
                  {card.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "#6b6554", lineHeight: "1.7" }}
                >
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Farming Tips */}
      <section
        data-ocid="home.expert_tips.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <h2
          className="font-bold text-2xl md:text-3xl mb-3"
          style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
        >
          Expert Farming Tips
        </h2>
        <p className="mb-8 text-sm" style={{ color: "#6b6554" }}>
          Proven practices from experienced agronomists to maximize your yield
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {expertTips.map((tip, i) => (
            <div
              key={tip.title}
              data-ocid={`home.expert_tip.item.${i + 1}`}
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
              <p
                className="text-sm"
                style={{ color: "#6b6554", lineHeight: "1.7" }}
              >
                {tip.desc}
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
            {testimonials.map((tval, i) => (
              <div
                key={tval.name}
                data-ocid={`home.testimonial.item.${i + 1}`}
                className="glass-card p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={tval.photo}
                    alt={tval.name}
                    className="w-16 h-16 rounded-full object-cover"
                    style={{ border: "3px solid #b5c9a0" }}
                  />
                  <div>
                    <h3 className="font-bold" style={{ color: "#2c2416" }}>
                      {tval.name}
                    </h3>
                    <p className="text-xs" style={{ color: "#3a6b1e" }}>
                      {tval.role}
                    </p>
                    <p className="text-xs" style={{ color: "#6b6554" }}>
                      📍 {tval.location}
                    </p>
                  </div>
                </div>
                <p
                  className="text-sm italic leading-relaxed"
                  style={{ color: "#6b6554" }}
                >
                  "{tval.quote}"
                </p>
                <div className="mt-3 flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <span
                      key={s}
                      className="text-sm"
                      style={{ color: "#a36b0a" }}
                    >
                      ★
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
