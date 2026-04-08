import { useState } from "react";
import VoiceReader from "../components/VoiceReader";
import { useLang } from "../contexts/LangContext";

const TECHNIQUES = [
  {
    id: "organic",
    emoji: "🌿",
    category: "organic",
    title: "Organic Farming",
    titleHi: "जैविक खेती",
    titleMr: "सेंद्रिय शेती",
    desc: "Farming without synthetic chemicals using natural inputs to improve soil health and biodiversity.",
    descHi:
      "प्राकृतिक तत्वों का उपयोग करके सिंथेटिक रसायनों के बिना खेती, मिट्टी और जैव विविधता को बढ़ावा देना।",
    descMr:
      "कृत्रिम रसायनांशिवाय नैसर्गिक घटकांचा वापर करून शेती, माती आणि जैवविविधता सुधारणे.",
    steps: [
      "Use compost and green manure as fertilizers",
      "Practice crop rotation every 2-3 seasons",
      "Use neem-based pesticides and biopesticides",
      "Maintain beneficial insect habitats",
      "Avoid GM seeds, use open-pollinated varieties",
    ],
    benefits: [
      "Healthier produce",
      "Improved soil fertility",
      "Higher market price",
      "Environment friendly",
    ],
    bestCrops: "Vegetables, Cereals, Pulses, Fruits",
    bestStates: "All states of India",
    color: "#3a6b1e",
    bg: "#edf3e8",
  },
  {
    id: "drip",
    emoji: "💧",
    category: "irrigation",
    title: "Drip Irrigation",
    titleHi: "ड्रिप सिंचाई",
    titleMr: "ठिबक सिंचन",
    desc: "Delivers water directly to plant roots through a network of pipes, valves, and emitters — saving 40-70% water.",
    descHi:
      "पाइप, वाल्व और एमिटर के जरिए पानी सीधे पौधों की जड़ों तक पहुंचाना — 40-70% पानी बचाता है।",
    descMr:
      "पाइप, व्हॉल्व्ह आणि एमिटरद्वारे थेट झाडाच्या मुळाशी पाणी पोहोचवणे — 40-70% पाणी बचत.",
    steps: [
      "Install main pipeline and sub-pipelines",
      "Place drip emitters near each plant",
      "Set irrigation timer for early morning",
      "Add fertilizer through fertigation system",
      "Clean filters every 15 days",
    ],
    benefits: [
      "Water saving",
      "Reduced weed growth",
      "Less disease",
      "Higher yield",
    ],
    bestCrops: "Sugarcane, Grapes, Banana, Tomato, Cotton",
    bestStates: "Maharashtra, Gujarat, Karnataka, Rajasthan",
    color: "#0369a1",
    bg: "#e0f2fe",
  },
  {
    id: "rotation",
    emoji: "🔄",
    category: "soil",
    title: "Crop Rotation",
    titleHi: "फसल चक्र",
    titleMr: "पीक आवर्तन",
    desc: "Growing different crops on the same land in sequential seasons to restore soil nutrients and break pest cycles.",
    descHi:
      "भूमि की उर्वरता बहाल करने और कीट चक्र तोड़ने के लिए विभिन्न मौसमों में अलग-अलग फसलें उगाना।",
    descMr:
      "माती सुपीकता पुनर्संचयित करण्यासाठी आणि कीड चक्र तोडण्यासाठी क्रमाक्रमाने वेगळी पिके घेणे.",
    steps: [
      "Plan 3-4 year rotation schedule",
      "Follow cereal → legume → vegetable order",
      "Include a fallow or cover crop season",
      "Test soil before and after each season",
      "Record what was grown in each plot",
    ],
    benefits: [
      "Natural nitrogen fixation",
      "Reduced soil erosion",
      "Less chemical use",
      "Better farm economics",
    ],
    bestCrops: "Wheat-Rice-Legume, Corn-Soybean",
    bestStates: "Punjab, Haryana, UP, MP, Bihar",
    color: "#7c3aed",
    bg: "#ede9fe",
  },
  {
    id: "intercropping",
    emoji: "🌱",
    category: "soil",
    title: "Intercropping",
    titleHi: "अंतर-फसल",
    titleMr: "आंतरपीक",
    desc: "Growing two or more crops simultaneously on the same land to maximize yield and optimize resource use.",
    descHi:
      "एक ही भूमि पर एक साथ दो या अधिक फसलें उगाना, उपज बढ़ाना और संसाधनों का बेहतर उपयोग।",
    descMr:
      "एकाच जमिनीवर दोन किंवा अधिक पिके एकत्र घेऊन उत्पन्न वाढवणे आणि संसाधने वापरणे.",
    steps: [
      "Choose compatible crops (tall + short, deep + shallow root)",
      "Plan row ratios like 2:1 or 4:2",
      "Ensure main crop gets sufficient light",
      "Time sowing of secondary crops 2-3 weeks later",
      "Harvest companion crops before main crop matures",
    ],
    benefits: [
      "Higher income per acre",
      "Reduced risk of total crop failure",
      "Soil enrichment",
      "Pest suppression",
    ],
    bestCrops: "Maize + Soybean, Sorghum + Pigeon Pea, Cotton + Groundnut",
    bestStates: "Maharashtra, Karnataka, Andhra Pradesh",
    color: "#059669",
    bg: "#d1fae5",
  },
  {
    id: "mulching",
    emoji: "🍂",
    category: "soil",
    title: "Mulching",
    titleHi: "मल्चिंग",
    titleMr: "मल्चिंग",
    desc: "Covering soil around plants with organic or plastic material to retain moisture, regulate temperature, and suppress weeds.",
    descHi:
      "नमी बनाए रखने, तापमान नियंत्रित करने और खरपतवार रोकने के लिए पौधों के आसपास जमीन को ढकना।",
    descMr:
      "ओलावा टिकवणे, तापमान नियंत्रित करणे आणि तण नियंत्रणासाठी झाडांभोवती जमीन झाकणे.",
    steps: [
      "Clear weeds and water the soil first",
      "Spread straw, dry leaves, or plastic sheet",
      "Keep mulch 2-4 inches thick",
      "Leave small gap around plant stems",
      "Replenish organic mulch every season",
    ],
    benefits: [
      "Moisture retention",
      "Weed suppression",
      "Soil temperature control",
      "Improved soil structure",
    ],
    bestCrops: "Tomato, Chili, Strawberry, Potato, Watermelon",
    bestStates: "All states; especially dry regions",
    color: "#b45309",
    bg: "#fef3c7",
  },
  {
    id: "vermicompost",
    emoji: "🪱",
    category: "organic",
    title: "Vermicomposting",
    titleHi: "वर्मीकम्पोस्टिंग",
    titleMr: "गांडूळ खत निर्मिती",
    desc: "Converting organic waste into rich compost using earthworms, producing highly nutritious natural fertilizer.",
    descHi: "केंचुओं का उपयोग कर जैविक कचरे को पोषण-युक्त प्राकृतिक खाद में बदलना।",
    descMr: "गांडुळे वापरून सेंद्रिय कचऱ्यापासून पोषणयुक्त नैसर्गिक खत तयार करणे.",
    steps: [
      "Set up a shaded vermicompost bed (1m x 2m)",
      "Add 6-inch layer of moistened cow dung",
      "Introduce 1 kg of red earthworms",
      "Cover with farm waste (leaves, vegetable peels)",
      "Harvest compost in 45-60 days",
    ],
    benefits: [
      "Rich NPK fertilizer",
      "Improves soil aeration",
      "Low cost production",
      "Sustainable waste management",
    ],
    bestCrops: "All crops, especially vegetables and fruits",
    bestStates: "Maharashtra, Tamil Nadu, Karnataka, Uttar Pradesh",
    color: "#92400e",
    bg: "#fef9c3",
  },
  {
    id: "pest",
    emoji: "🐛",
    category: "protection",
    title: "Natural Pest Management",
    titleHi: "प्राकृतिक कीट प्रबंधन",
    titleMr: "नैसर्गिक कीड व्यवस्थापन",
    desc: "Controlling pests using natural predators, botanical extracts, and cultural practices instead of chemical pesticides.",
    descHi:
      "रासायनिक कीटनाशकों की बजाय प्राकृतिक शिकारी, वनस्पति अर्क और खेती पद्धतियों से कीटों को नियंत्रित करना।",
    descMr:
      "रासायनिक कीटनाशकांऐवजी नैसर्गिक शत्रु, वनस्पती अर्क आणि शेती पद्धतींनी कीड नियंत्रण.",
    steps: [
      "Install yellow sticky traps and pheromone traps",
      "Spray neem oil solution (5ml/liter) every 10 days",
      "Plant marigold border crops as pest repellent",
      "Release beneficial insects like ladybugs",
      "Prepare garlic-chili spray for aphids and mites",
    ],
    benefits: [
      "No chemical residue",
      "Safer for farmers",
      "Preserves beneficial insects",
      "Lower input cost",
    ],
    bestCrops: "Vegetables, Cotton, Chili, Tomato",
    bestStates: "All states",
    color: "#dc2626",
    bg: "#fee2e2",
  },
  {
    id: "polyhouse",
    emoji: "🏗️",
    category: "protected",
    title: "Polyhouse / Greenhouse Farming",
    titleHi: "पॉलीहाउस / ग्रीनहाउस खेती",
    titleMr: "पॉलीहाऊस / हरितगृह शेती",
    desc: "Growing crops inside protected plastic or glass structures to control climate, extend growing seasons, and achieve year-round production.",
    descHi:
      "जलवायु नियंत्रित प्लास्टिक या कांच की संरचनाओं में फसल उगाना, जिससे साल भर उत्पादन संभव हो।",
    descMr: "हवामान नियंत्रित प्लास्टिक किंवा काचेच्या संरचनेत पिके घेऊन वर्षभर उत्पादन घेणे.",
    steps: [
      "Select site with 6+ hours of sunlight",
      "Construct polyhouse frame (GI pipes or bamboo)",
      "Cover with 200-micron UV stabilized plastic",
      "Install drip irrigation and ventilation fans",
      "Monitor temperature (18-25°C ideal) and humidity",
    ],
    benefits: [
      "Year-round cultivation",
      "3-5x higher yield",
      "Controlled environment",
      "Premium price crops",
    ],
    bestCrops: "Capsicum, Tomato, Cucumber, Gerbera, Rose",
    bestStates: "Himachal Pradesh, Karnataka, Maharashtra, Punjab",
    color: "#0891b2",
    bg: "#cffafe",
  },
  {
    id: "zbnf",
    emoji: "🌾",
    category: "organic",
    title: "Zero Budget Natural Farming (ZBNF)",
    titleHi: "शून्य बजट प्राकृतिक खेती",
    titleMr: "शून्य बजट नैसर्गिक शेती",
    desc: "Farming system developed by Subhash Palekar using local cow dung and urine to grow crops at near-zero external cost.",
    descHi:
      "सुभाष पालेकर द्वारा विकसित प्रणाली, स्थानीय गाय के गोबर और गोमूत्र से शून्य लागत पर खेती।",
    descMr:
      "सुभाष पाळेकर यांनी विकसित केलेली पद्धत, स्थानिक गाईचे शेण आणि मूत्र वापरून जवळजवळ शून्य खर्चात शेती.",
    steps: [
      "Prepare Jeevamrut: 10L cow urine, 10kg dung, 2kg jaggery, 2kg gram flour, handful of farm soil",
      "Apply Beejamrut for seed treatment before sowing",
      "Use Ghanjeevamrut as solid fertilizer",
      "Practice Mulching with crop residue",
      "Maintain moisture with Whapasa (air-water balance)",
    ],
    benefits: [
      "Near-zero input cost",
      "Improves soil microbial life",
      "Sustainable long-term",
      "Supported by government",
    ],
    bestCrops: "All field crops, especially Paddy, Wheat, Sugarcane",
    bestStates: "Andhra Pradesh, Karnataka, Maharashtra",
    color: "#15803d",
    bg: "#dcfce7",
  },
  {
    id: "precision",
    emoji: "📡",
    category: "technology",
    title: "Precision Farming",
    titleHi: "परिशुद्ध खेती",
    titleMr: "अचूक शेती",
    desc: "Technology-based agriculture using GPS, sensors, drones, and data analytics to optimize inputs and maximize yields.",
    descHi:
      "GPS, सेंसर, ड्रोन और डेटा विश्लेषण से इनपुट को अनुकूलित करके उत्पादन को अधिकतम करना।",
    descMr:
      "GPS, सेन्सर, ड्रोन आणि डेटा विश्लेषणाद्वारे इनपुट ऑप्टिमाइझ करून उत्पादन वाढवणे.",
    steps: [
      "Install soil moisture and nutrient sensors",
      "Use GPS-guided tractors for uniform field operations",
      "Deploy drones for crop monitoring and spraying",
      "Use weather forecasting apps for timely decisions",
      "Analyze yield maps to optimize next season",
    ],
    benefits: [
      "30-40% input cost reduction",
      "Higher yield consistency",
      "Real-time field monitoring",
      "Data-driven decisions",
    ],
    bestCrops: "All major crops at scale",
    bestStates: "Punjab, Haryana, Gujarat, Telangana",
    color: "#6d28d9",
    bg: "#ede9fe",
  },
  {
    id: "hydroponics",
    emoji: "🫙",
    category: "technology",
    title: "Hydroponics",
    titleHi: "हाइड्रोपोनिक्स",
    titleMr: "हायड्रोपोनिक्स",
    desc: "Soilless farming where plants grow in nutrient-rich water solutions, ideal for urban areas and water-scarce regions.",
    descHi:
      "मिट्टी के बिना खेती, जहां पौधे पोषण-युक्त पानी में उगते हैं — शहरी क्षेत्रों और जल-संकट वाले स्थानों के लिए आदर्श।",
    descMr:
      "मातीशिवाय शेती, जिथे झाडे पोषणयुक्त पाण्यात वाढतात — शहरी भागांसाठी आणि पाणीटंचाई क्षेत्रांसाठी आदर्श.",
    steps: [
      "Set up NFT (Nutrient Film Technique) or DWC channels",
      "Prepare balanced nutrient solution (EC 1.5-2.5 mS/cm)",
      "Maintain pH between 5.5 - 6.5",
      "Ensure 16 hours of light (grow lights or natural)",
      "Monitor and refresh nutrient solution weekly",
    ],
    benefits: [
      "90% less water use",
      "No soil needed",
      "Faster growth cycle",
      "Year-round production",
    ],
    bestCrops: "Lettuce, Spinach, Basil, Strawberry, Tomato",
    bestStates: "Urban areas across India",
    color: "#0284c7",
    bg: "#e0f2fe",
  },
];

const CATEGORIES = [
  { key: "all", label: "All", labelHi: "सभी", labelMr: "सर्व", emoji: "🌐" },
  {
    key: "organic",
    label: "Organic",
    labelHi: "जैविक",
    labelMr: "सेंद्रिय",
    emoji: "🌿",
  },
  {
    key: "irrigation",
    label: "Irrigation",
    labelHi: "सिंचाई",
    labelMr: "सिंचन",
    emoji: "💧",
  },
  {
    key: "soil",
    label: "Soil Management",
    labelHi: "मिट्टी प्रबंधन",
    labelMr: "माती व्यवस्थापन",
    emoji: "🌱",
  },
  {
    key: "protection",
    label: "Pest Protection",
    labelHi: "कीट सुरक्षा",
    labelMr: "कीड संरक्षण",
    emoji: "🛡️",
  },
  {
    key: "protected",
    label: "Protected Cultivation",
    labelHi: "संरक्षित खेती",
    labelMr: "संरक्षित लागवड",
    emoji: "🏗️",
  },
  {
    key: "technology",
    label: "Technology",
    labelHi: "तकनीक",
    labelMr: "तंत्रज्ञान",
    emoji: "📡",
  },
];

export default function FarmingTechniquesPage() {
  const { lang } = useLang();
  const [activeCategory, setActiveCategory] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered =
    activeCategory === "all"
      ? TECHNIQUES
      : TECHNIQUES.filter((t) => t.category === activeCategory);

  const getTitle = (t: (typeof TECHNIQUES)[0]) =>
    lang === "hi" ? t.titleHi : lang === "mr" ? t.titleMr : t.title;
  const getDesc = (t: (typeof TECHNIQUES)[0]) =>
    lang === "hi" ? t.descHi : lang === "mr" ? t.descMr : t.desc;

  const voiceText = filtered
    .map((t) => `${getTitle(t)}. ${getDesc(t)}`)
    .join(". ");

  return (
    <div className="min-h-screen" style={{ background: "#f9f6f1" }}>
      {/* Hero */}
      <div
        className="w-full py-12 px-4 text-center"
        style={{
          background:
            "linear-gradient(135deg, #2d5016 0%, #3a6b1e 60%, #4a8c27 100%)",
        }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          {lang === "hi"
            ? "🌾 खेती की तकनीकें"
            : lang === "mr"
              ? "🌾 शेती तंत्रे"
              : "🌾 Farming Techniques"}
        </h1>
        <p className="text-green-100 max-w-2xl mx-auto text-base">
          {lang === "hi"
            ? "आधुनिक और पारंपरिक कृषि तकनीकों की विस्तृत जानकारी, चरण-दर-चरण मार्गदर्शिका और सुझाव"
            : lang === "mr"
              ? "आधुनिक आणि पारंपरिक शेती तंत्रांची सविस्तर माहिती, टप्प्याटप्प्याने मार्गदर्शन आणि टिपा"
              : "Comprehensive guide to modern and traditional farming techniques with step-by-step instructions and tips"}
        </p>
        <div className="mt-4 flex justify-center">
          <VoiceReader text={voiceText} />
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {CATEGORIES.map((cat) => (
            <button
              type="button"
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all"
              style={{
                background: activeCategory === cat.key ? "#3a6b1e" : "#ffffff",
                color: activeCategory === cat.key ? "#ffffff" : "#3a6b1e",
                border: "1.5px solid #3a6b1e",
                boxShadow:
                  activeCategory === cat.key
                    ? "0 2px 8px rgba(58,107,30,0.3)"
                    : "none",
              }}
            >
              {cat.emoji}{" "}
              {lang === "hi"
                ? cat.labelHi
                : lang === "mr"
                  ? cat.labelMr
                  : cat.label}
            </button>
          ))}
        </div>

        {/* Stats Bar */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 rounded-2xl p-4"
          style={{ background: "#ffffff", border: "1px solid #e2d8cc" }}
        >
          {[
            {
              label:
                lang === "hi" ? "तकनीकें" : lang === "mr" ? "तंत्रे" : "Techniques",
              value: "11+",
            },
            {
              label:
                lang === "hi"
                  ? "श्रेणियां"
                  : lang === "mr"
                    ? "श्रेण्या"
                    : "Categories",
              value: "6",
            },
            {
              label:
                lang === "hi" ? "फसलें" : lang === "mr" ? "पिके" : "Crops Covered",
              value: "35+",
            },
            {
              label: lang === "hi" ? "राज्य" : lang === "mr" ? "राज्ये" : "States",
              value: "25+",
            },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold" style={{ color: "#3a6b1e" }}>
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: "#6b6554" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Technique Cards */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-2">
          {filtered.map((tech) => (
            <div
              key={tech.id}
              className="rounded-2xl overflow-hidden"
              style={{
                background: "#ffffff",
                border: "1px solid #e2d8cc",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
              }}
            >
              {/* Card Header */}
              <div
                className="px-5 py-4 flex items-center gap-3"
                style={{ background: tech.bg }}
              >
                <span className="text-3xl">{tech.emoji}</span>
                <div className="flex-1">
                  <h3
                    className="text-lg font-bold"
                    style={{ color: tech.color }}
                  >
                    {getTitle(tech)}
                  </h3>
                  <p className="text-sm mt-0.5" style={{ color: "#4b5563" }}>
                    {getDesc(tech)}
                  </p>
                </div>
              </div>

              {/* Quick Info */}
              <div className="px-5 py-3 grid grid-cols-2 gap-2">
                <div className="text-xs" style={{ color: "#6b6554" }}>
                  <span className="font-semibold" style={{ color: "#374151" }}>
                    {lang === "hi"
                      ? "उपयुक्त फसलें: "
                      : lang === "mr"
                        ? "उत्तम पिके: "
                        : "Best Crops: "}
                  </span>
                  {tech.bestCrops}
                </div>
                <div className="text-xs" style={{ color: "#6b6554" }}>
                  <span className="font-semibold" style={{ color: "#374151" }}>
                    {lang === "hi"
                      ? "राज्य: "
                      : lang === "mr"
                        ? "राज्ये: "
                        : "States: "}
                  </span>
                  {tech.bestStates}
                </div>
              </div>

              {/* Benefits */}
              <div className="px-5 pb-3">
                <div className="flex flex-wrap gap-1.5">
                  {tech.benefits.map((b) => (
                    <span
                      key={b}
                      className="px-2.5 py-1 rounded-full text-xs font-medium"
                      style={{ background: tech.bg, color: tech.color }}
                    >
                      ✓ {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Expand/Collapse */}
              <div className="px-5 pb-4">
                <button
                  type="button"
                  onClick={() =>
                    setExpandedId(expandedId === tech.id ? null : tech.id)
                  }
                  className="text-sm font-medium underline"
                  style={{ color: tech.color }}
                >
                  {expandedId === tech.id
                    ? lang === "hi"
                      ? "छुपाएं ▲"
                      : lang === "mr"
                        ? "लपवा ▲"
                        : "Hide Steps ▲"
                    : lang === "hi"
                      ? "चरण देखें ▼"
                      : lang === "mr"
                        ? "टप्पे पहा ▼"
                        : "View Steps ▼"}
                </button>

                {expandedId === tech.id && (
                  <div
                    className="mt-3 rounded-xl p-4"
                    style={{ background: tech.bg }}
                  >
                    <h4
                      className="font-semibold text-sm mb-3"
                      style={{ color: tech.color }}
                    >
                      {lang === "hi"
                        ? "📋 चरण-दर-चरण मार्गदर्शिका"
                        : lang === "mr"
                          ? "📋 टप्प्याटप्प्याने मार्गदर्शन"
                          : "📋 Step-by-Step Guide"}
                    </h4>
                    <ol className="space-y-2">
                      {tech.steps.map((step, i) => (
                        <li
                          key={step}
                          className="flex gap-2 text-sm"
                          style={{ color: "#374151" }}
                        >
                          <span
                            className="flex-shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center"
                            style={{ background: tech.color, color: "#fff" }}
                          >
                            {i + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Tip Banner */}
        <div
          className="mt-10 rounded-2xl p-6 text-center"
          style={{
            background: "linear-gradient(135deg, #edf3e8, #d4edda)",
            border: "1px solid #b5c9a0",
          }}
        >
          <div className="text-2xl mb-2">💡</div>
          <h3 className="font-bold text-lg mb-2" style={{ color: "#2d5016" }}>
            {lang === "hi"
              ? "सही तकनीक चुनें, बेहतर उत्पादन पाएं"
              : lang === "mr"
                ? "योग्य तंत्र निवडा, उत्तम उत्पादन मिळवा"
                : "Choose the Right Technique, Maximize Your Yield"}
          </h3>
          <p className="text-sm" style={{ color: "#4b6a2d" }}>
            {lang === "hi"
              ? "अपनी मिट्टी, पानी और बाजार की स्थिति के अनुसार तकनीक चुनें। किसी भी सहायता के लिए संपर्क करें: 8421016006"
              : lang === "mr"
                ? "तुमची माती, पाणी आणि बाजारपेठेनुसार तंत्र निवडा. कोणत्याही मदतीसाठी संपर्क करा: 8421016006"
                : "Select techniques based on your soil type, water availability, and market conditions. For expert guidance contact: 8421016006"}
          </p>
        </div>

        {/* Cost & Support Comparison */}
        <div
          className="mt-10 rounded-2xl overflow-hidden"
          style={{ border: "1px solid #e2d8cc" }}
          data-ocid="techniques.cost_table.section"
        >
          <div className="px-5 py-4" style={{ background: "#3a6b1e" }}>
            <h3 className="font-bold text-lg text-white">
              Technique Cost &amp; Support Overview
            </h3>
            <p className="text-green-100 text-sm mt-1">
              Compare investment, labor needs, water savings, and government
              support at a glance
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs min-w-[800px]">
              <thead>
                <tr style={{ background: "#edf3e8" }}>
                  {[
                    "Technique",
                    "Cost/Acre",
                    "Labor (person-days/acre)",
                    "Water Saving",
                    "Govt Support",
                    "ROI Period",
                  ].map((h) => (
                    <th
                      key={h}
                      className="py-3 px-4 text-left font-semibold"
                      style={{ color: "#3a6b1e" }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    tech: "Organic Farming",
                    cost: "₹5,000–15,000",
                    labor: "20–30",
                    water: "10–20%",
                    support: "PKVY ₹50,000/Ha",
                    roi: "2–3 seasons",
                  },
                  {
                    tech: "Drip Irrigation",
                    cost: "₹30,000–60,000",
                    labor: "2–5",
                    water: "50–70%",
                    support: "PMKSY 90% subsidy",
                    roi: "2–4 years",
                  },
                  {
                    tech: "Crop Rotation",
                    cost: "₹500–2,000",
                    labor: "5–10",
                    water: "5–15%",
                    support: "RKVY fund support",
                    roi: "1 season",
                  },
                  {
                    tech: "Mulching",
                    cost: "₹3,000–8,000",
                    labor: "8–12",
                    water: "30–40%",
                    support: "NMSA subsidy",
                    roi: "Same season",
                  },
                  {
                    tech: "Vermicomposting",
                    cost: "₹8,000–20,000 (setup)",
                    labor: "10–15",
                    water: "0%",
                    support: "NABARD startup loan",
                    roi: "6–12 months",
                  },
                  {
                    tech: "Precision Farming",
                    cost: "₹15,000–50,000",
                    labor: "3–8",
                    water: "20–40%",
                    support: "RKVY AgriTech fund",
                    roi: "1–2 seasons",
                  },
                  {
                    tech: "Polyhouse",
                    cost: "₹5–12 lakh/1000 sqm",
                    labor: "15–25",
                    water: "60–80%",
                    support: "NHM 50% subsidy",
                    roi: "3–5 years",
                  },
                  {
                    tech: "ZBNF (Natural)",
                    cost: "₹1,000–3,000",
                    labor: "12–18",
                    water: "10–20%",
                    support: "Andhra Pradesh state support",
                    roi: "1–2 seasons",
                  },
                ].map((row, i) => (
                  <tr
                    key={row.tech}
                    data-ocid={`techniques.cost_row.${i + 1}`}
                    style={{
                      borderTop: "1px solid #e2d8cc",
                      background: i % 2 === 0 ? "#ffffff" : "#faf7f2",
                    }}
                  >
                    <td
                      className="py-3 px-4 font-semibold"
                      style={{ color: "#2c2416" }}
                    >
                      {row.tech}
                    </td>
                    <td className="py-3 px-4" style={{ color: "#a16207" }}>
                      {row.cost}
                    </td>
                    <td className="py-3 px-4" style={{ color: "#6b6554" }}>
                      {row.labor}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className="px-2 py-0.5 rounded-full text-xs"
                        style={{ background: "#dbeafe", color: "#1d4ed8" }}
                      >
                        {row.water}
                      </span>
                    </td>
                    <td className="py-3 px-4" style={{ color: "#15803d" }}>
                      {row.support}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className="px-2 py-0.5 rounded-full text-xs"
                        style={{ background: "#dcfce7", color: "#15803d" }}
                      >
                        {row.roi}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Farmer Case Studies */}
        <div className="mt-10" data-ocid="techniques.case_studies.section">
          <h3
            className="font-bold text-xl mb-3"
            style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
          >
            &#128218; Farmer Success Stories
          </h3>
          <p className="mb-6 text-sm" style={{ color: "#6b6554" }}>
            Real farmers who transformed their income using these techniques
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                emoji: "🌿",
                farmer: "Raju Naik",
                location: "Nashik, Maharashtra",
                technique: "Organic Farming + Drip Irrigation",
                result:
                  "Increased tomato yield by 40% and sold at ₹55/kg premium organic price vs ₹20/kg conventional.",
                income: "+₹1.2 lakh/acre/season",
                years: "3 years of organic conversion",
              },
              {
                emoji: "💧",
                farmer: "Harbans Dhaliwal",
                location: "Fatehgarh Sahib, Punjab",
                technique: "Drip Irrigation in Wheat",
                result:
                  "Reduced water usage by 60% and saved ₹8,000/acre in electricity costs for pumping groundwater.",
                income: "₹8,000 saved + 15% yield increase",
                years: "1st season results",
              },
              {
                emoji: "🔄",
                farmer: "Savitabai Chavan",
                location: "Latur, Maharashtra",
                technique: "Crop Rotation (Soybean → Chickpea → Wheat)",
                result:
                  "Soil NPK improved by 30% over 3 years without additional fertilizer. Disease incidence reduced by 50%.",
                income: "₹15,000 saved in fertilizer costs/year",
                years: "3-year rotation cycle",
              },
              {
                emoji: "🐛",
                farmer: "Krishnamurthy Reddy",
                location: "Guntur, Andhra Pradesh",
                technique: "ZBNF (Zero Budget Natural Farming)",
                result:
                  "Completely eliminated chemical costs (₹25,000/acre/year). Soil health improved significantly in 2 seasons.",
                income: "₹25,000/acre cost reduction",
                years: "2 seasons for full results",
              },
            ].map((story, i) => (
              <div
                key={story.farmer}
                data-ocid={`techniques.case_study.item.${i + 1}`}
                className="rounded-2xl p-5"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2d8cc",
                }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: "#edf3e8" }}
                  >
                    {story.emoji}
                  </div>
                  <div>
                    <h4 className="font-bold" style={{ color: "#2c2416" }}>
                      {story.farmer}
                    </h4>
                    <p className="text-xs" style={{ color: "#6b6554" }}>
                      &#128205; {story.location}
                    </p>
                    <p
                      className="text-xs font-medium"
                      style={{ color: "#3a6b1e" }}
                    >
                      Technique: {story.technique}
                    </p>
                  </div>
                </div>
                <p className="text-sm mb-3" style={{ color: "#6b6554" }}>
                  {story.result}
                </p>
                <div className="flex items-center gap-3">
                  <span
                    className="px-2 py-0.5 rounded-full text-xs font-medium"
                    style={{ background: "#dcfce7", color: "#15803d" }}
                  >
                    &#128200; {story.income}
                  </span>
                  <span
                    className="px-2 py-0.5 rounded-full text-xs"
                    style={{ background: "#f0ebe3", color: "#6b6554" }}
                  >
                    &#128336; {story.years}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
