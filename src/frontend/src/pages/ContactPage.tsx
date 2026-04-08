import {
  Clock,
  ExternalLink,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Youtube,
} from "lucide-react";
import { useState } from "react";
import VoiceReader from "../components/VoiceReader";
import { useLang } from "../contexts/LangContext";

const faqs = [
  {
    q: "How do I start organic farming?",
    a: "Start with soil health assessment, choose suitable organic crops, use natural inputs like compost and vermicompost, and get certified organic after 3 years of chemical-free farming.",
  },
  {
    q: "What certifications are required for organic farming?",
    a: "In India, PGS (Participatory Guarantee System) and NPOP (National Programme for Organic Production) are the main certification systems. PGS is simpler and better for small farmers.",
  },
  {
    q: "How can I get government subsidies for organic farming?",
    a: "Apply through PKVY scheme at your local agriculture office, or register on the PM-KISAN portal for income support. Visit our Government Schemes page for detailed information.",
  },
  {
    q: "Which crops are most profitable for organic farming?",
    a: "Spices like turmeric, ginger, cardamom; vegetables like tomato, capsicum; and fruits like mango, banana are highly profitable as organic produce commands 30–50% premium.",
  },
  {
    q: "How can I track my order?",
    a: "Use your order confirmation email to track your package. You will receive tracking details within 24 hours of dispatch. Contact us at 8421016006 for urgent queries.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept UPI, Net Banking, Credit/Debit cards, and Cash on Delivery (COD). All online payments are secured with SSL encryption.",
  },
  {
    q: "Do you provide farming consultancy?",
    a: "Yes, we offer free farming consultancy for all registered farmers via WhatsApp and phone. Chat with our expert at +91 8421016006 during office hours.",
  },
  {
    q: "Are your products certified organic?",
    a: "Yes, all products carry NPOP (National Programme for Organic Production) and/or PGS-India organic certification. Certificate details are available on every product listing.",
  },
];

const contactFields = [
  { key: "name" as const, id: "cn-name", type: "text" },
  { key: "email" as const, id: "cn-email", type: "email" },
  { key: "subject" as const, id: "cn-subject", type: "text" },
];

export default function ContactPage() {
  const { t } = useLang();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/xrbkzgld", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

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
            {t("contact.hero")}
          </h1>
          <p style={{ color: "#c8e0b0" }}>We'd love to hear from you</p>
        </div>
      </section>

      <section
        data-ocid="contact.main.section"
        className="py-12 px-4 max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2
              className="font-bold text-2xl mb-6"
              style={{
                color: "#2c2416",
                fontFamily: "Fraunces, Georgia, serif",
              }}
            >
              Get in Touch
            </h2>

            {/* WhatsApp Quick Contact */}
            <a
              href="https://wa.me/918421016006"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact.whatsapp.button"
              className="flex items-center gap-3 p-4 rounded-xl font-semibold text-white mb-4 w-full justify-center"
              style={{ background: "#25D366" }}
            >
              <MessageCircle size={20} />
              Chat on WhatsApp
            </a>

            <div className="space-y-3 mb-6">
              {[
                {
                  href: "mailto:kharatchaitanya03@gmail.com",
                  Icon: Mail,
                  label: "Email",
                  value: "kharatchaitanya03@gmail.com",
                },
                {
                  href: "tel:8421016006",
                  Icon: Phone,
                  label: "Phone",
                  value: "+91 8421016006",
                },
              ].map(({ href, Icon, label, value }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 p-4 glass-card"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: "#edf3e8" }}
                  >
                    <Icon size={18} style={{ color: "#3a6b1e" }} />
                  </div>
                  <div>
                    <p className="text-xs" style={{ color: "#6b6554" }}>
                      {label}
                    </p>
                    <p className="text-sm" style={{ color: "#2c2416" }}>
                      {value}
                    </p>
                  </div>
                </a>
              ))}

              {/* Office Hours */}
              <div className="flex items-start gap-3 p-4 glass-card">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "#edf3e8" }}
                >
                  <Clock size={18} style={{ color: "#3a6b1e" }} />
                </div>
                <div>
                  <p className="text-xs mb-1" style={{ color: "#6b6554" }}>
                    {t("contact.officeHours")}
                  </p>
                  <div
                    className="space-y-0.5 text-sm"
                    style={{ color: "#2c2416" }}
                  >
                    <p>Mon – Fri: 9:00 AM – 6:00 PM IST</p>
                    <p>Saturday: 9:00 AM – 2:00 PM IST</p>
                    <p style={{ color: "#6b6554" }}>Sunday: Closed</p>
                    <p
                      className="text-xs font-medium mt-1"
                      style={{ color: "#3a6b1e" }}
                    >
                      🚨 Emergency Helpline: 24/7 available
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 glass-card">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "#edf3e8" }}
                >
                  <MapPin size={18} style={{ color: "#3a6b1e" }} />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "#6b6554" }}>
                    Location
                  </p>
                  <p className="text-sm" style={{ color: "#2c2416" }}>
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="glass-card p-4 mb-4">
              <p
                className="text-sm font-semibold mb-3"
                style={{ color: "#2c2416" }}
              >
                Follow Us
              </p>
              <div className="flex gap-3">
                {[
                  {
                    Icon: Facebook,
                    label: "Facebook",
                    color: "#1877f2",
                    href: "#",
                  },
                  {
                    Icon: Instagram,
                    label: "Instagram",
                    color: "#e1306c",
                    href: "#",
                  },
                  {
                    Icon: Youtube,
                    label: "YouTube",
                    color: "#ff0000",
                    href: "#",
                  },
                  {
                    Icon: ExternalLink,
                    label: "Website",
                    color: "#3a6b1e",
                    href: "#",
                  },
                ].map(({ Icon, label, color, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-ocid={`contact.social.${label.toLowerCase()}.link`}
                    aria-label={label}
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{
                      background: "#f0ebe3",
                      border: "1px solid #e2d8cc",
                    }}
                  >
                    <Icon size={18} style={{ color }} />
                  </a>
                ))}
              </div>
            </div>

            <div
              className="glass-card p-5"
              style={{ background: "#edf3e8", border: "1px solid #b5c9a0" }}
            >
              <p className="text-sm italic" style={{ color: "#6b6554" }}>
                {t("contact.quote")}
              </p>
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              data-ocid="contact.form"
              className="glass-card p-6 space-y-4"
            >
              <h2
                className="font-bold text-xl mb-2"
                style={{
                  color: "#2c2416",
                  fontFamily: "Fraunces, Georgia, serif",
                }}
              >
                Send a Message
              </h2>
              {contactFields.map(({ key, id, type }) => (
                <div key={key}>
                  <label
                    htmlFor={id}
                    className="block text-sm mb-1"
                    style={{ color: "#6b6554" }}
                  >
                    {t(`contact.${key}` as Parameters<typeof t>[0])}
                  </label>
                  <input
                    id={id}
                    data-ocid={`contact.${key}.input`}
                    type={type}
                    value={form[key]}
                    onChange={(e) =>
                      setForm({ ...form, [key]: e.target.value })
                    }
                    required
                    className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                    style={{
                      background: "#ffffff",
                      border: "1px solid #e2d8cc",
                      color: "#2c2416",
                    }}
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="cn-message"
                  className="block text-sm mb-1"
                  style={{ color: "#6b6554" }}
                >
                  {t("contact.message")}
                </label>
                <textarea
                  id="cn-message"
                  data-ocid="contact.message.textarea"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-xl text-sm outline-none resize-none"
                  style={{
                    background: "#ffffff",
                    border: "1px solid #e2d8cc",
                    color: "#2c2416",
                  }}
                />
              </div>
              {status === "success" && (
                <p
                  data-ocid="contact.success_state"
                  className="text-sm"
                  style={{ color: "#3a6b1e" }}
                >
                  {t("contact.success")}
                </p>
              )}
              {status === "error" && (
                <p
                  data-ocid="contact.error_state"
                  className="text-sm"
                  style={{ color: "#dc2626" }}
                >
                  {t("contact.error")}
                </p>
              )}
              <button
                type="submit"
                data-ocid="contact.send.button"
                disabled={status === "loading"}
                className="w-full py-3 rounded-xl font-semibold text-white transition-all disabled:opacity-60"
                style={{ background: "#3a6b1e" }}
              >
                {status === "loading" ? t("common.loading") : t("contact.send")}
              </button>
            </form>
          </div>
        </div>

        <section data-ocid="contact.faq.section" className="mt-12">
          <div className="flex items-center gap-4 mb-6">
            <h2
              className="font-bold text-2xl"
              style={{
                color: "#2c2416",
                fontFamily: "Fraunces, Georgia, serif",
              }}
            >
              {t("contact.faq")}
            </h2>
            <VoiceReader text={faqs.map((f) => `${f.q}. ${f.a}`).join(". ")} />
          </div>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={faq.q}
                data-ocid={`contact.faq.item.${idx + 1}`}
                className="glass-card overflow-hidden"
              >
                <button
                  type="button"
                  data-ocid={`contact.faq.toggle.${idx + 1}`}
                  className="w-full text-left p-5 flex items-start justify-between gap-3"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <h3
                    className="font-semibold text-sm"
                    style={{ color: "#2c2416" }}
                  >
                    ❓ {faq.q}
                  </h3>
                  <span
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: "#3a6b1e" }}
                  >
                    {openFaq === idx ? "\u2212" : "+"}
                  </span>
                </button>
                {openFaq === idx && (
                  <div
                    className="px-5 pb-5"
                    style={{ borderTop: "1px solid #e2d8cc" }}
                  >
                    <p className="text-sm pt-3" style={{ color: "#6b6554" }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* Regional Offices */}
      <section
        data-ocid="contact.regional_offices.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <h2
          className="font-bold text-2xl md:text-3xl mb-3"
          style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
        >
          Regional Office Addresses
        </h2>
        <p className="mb-8 text-sm" style={{ color: "#6b6554" }}>
          Visit us at our regional offices for in-person consultations
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              region: "Maharashtra",
              emoji: "🏙️",
              address: "Agro Crops Office, Near KVK Campus, Pune – 411001",
              phone: "8421016006",
              email: "pune@agro-crops.in",
              timing: "Mon–Sat, 9am–6pm",
            },
            {
              region: "Punjab",
              emoji: "🌾",
              address: "Agro Crops, Agricultural Complex, Ludhiana – 141001",
              phone: "9423653174",
              email: "punjab@agro-crops.in",
              timing: "Mon–Sat, 9am–6pm",
            },
            {
              region: "Tamil Nadu",
              emoji: "🌴",
              address: "Agro Crops, Farmer House, Coimbatore – 641001",
              phone: "7219872347",
              email: "tn@agro-crops.in",
              timing: "Mon–Sat, 9am–6pm",
            },
            {
              region: "Uttar Pradesh",
              emoji: "🌻",
              address: "Agro Crops, Krishi Bhavan, Lucknow – 226001",
              phone: "8378093053",
              email: "up@agro-crops.in",
              timing: "Mon–Sat, 9am–6pm",
            },
          ].map((office, i) => (
            <div
              key={office.region}
              data-ocid={`contact.office.item.${i + 1}`}
              className="glass-card p-5"
            >
              <div className="text-3xl mb-2">{office.emoji}</div>
              <h3 className="font-bold mb-2" style={{ color: "#2c2416" }}>
                {office.region} Office
              </h3>
              <div className="space-y-1.5 text-xs">
                <p style={{ color: "#6b6554" }}>📍 {office.address}</p>
                <p>
                  <a
                    href={`tel:${office.phone}`}
                    className="font-medium"
                    style={{ color: "#3a6b1e" }}
                  >
                    📞 {office.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${office.email}`}
                    style={{ color: "#6b6554" }}
                  >
                    ✉️ {office.email}
                  </a>
                </p>
                <p style={{ color: "#6b6554" }}>🕐 {office.timing}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Field Officer Directory */}
      <section
        data-ocid="contact.officers.section"
        className="py-12 px-4"
        style={{ background: "#f5f0e8" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-bold text-2xl md:text-3xl mb-3"
            style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
          >
            Field Officer Directory
          </h2>
          <p className="mb-6 text-sm" style={{ color: "#6b6554" }}>
            Contact our field officers for region-specific guidance
          </p>
          <div className="glass-card overflow-x-auto">
            <table className="w-full text-sm min-w-[700px]">
              <thead>
                <tr style={{ background: "#edf3e8" }}>
                  {[
                    "Officer Name",
                    "Region",
                    "Phone",
                    "Specialization",
                    "Availability",
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
                    name: "Rajesh Kulkarni",
                    region: "Vidarbha, Maharashtra",
                    phone: "9423653174",
                    spec: "Cotton & Soybean farming",
                    avail: "Mon–Fri",
                  },
                  {
                    name: "Gurpreet Singh",
                    region: "Punjab & Haryana",
                    phone: "7219872347",
                    spec: "Wheat & Paddy cultivation",
                    avail: "Mon–Sat",
                  },
                  {
                    name: "Lakshmi Rajan",
                    region: "Tamil Nadu & Kerala",
                    phone: "8378093053",
                    spec: "Spices & Coconut farming",
                    avail: "Mon–Fri",
                  },
                  {
                    name: "Arun Sharma",
                    region: "UP & Bihar",
                    phone: "8421016006",
                    spec: "Sugarcane & Pulses",
                    avail: "Mon–Sat",
                  },
                  {
                    name: "Priya Patil",
                    region: "Marathwada, Maharashtra",
                    phone: "9423653174",
                    spec: "Organic certification & Grapes",
                    avail: "Mon–Fri",
                  },
                  {
                    name: "Suresh Yadav",
                    region: "Rajasthan & Gujarat",
                    phone: "7219872347",
                    spec: "Dryland farming & Millets",
                    avail: "Mon–Sat",
                  },
                ].map((officer, i) => (
                  <tr
                    key={officer.name}
                    data-ocid={`contact.officer.row.${i + 1}`}
                    style={{
                      borderTop: "1px solid #e2d8cc",
                      background: i % 2 === 0 ? "#ffffff" : "#faf7f2",
                    }}
                  >
                    <td
                      className="py-3 px-4 font-medium"
                      style={{ color: "#2c2416" }}
                    >
                      {officer.name}
                    </td>
                    <td
                      className="py-3 px-4 text-xs"
                      style={{ color: "#6b6554" }}
                    >
                      {officer.region}
                    </td>
                    <td className="py-3 px-4">
                      <a
                        href={`tel:${officer.phone}`}
                        className="text-sm font-medium"
                        style={{ color: "#3a6b1e" }}
                      >
                        {officer.phone}
                      </a>
                    </td>
                    <td
                      className="py-3 px-4 text-xs"
                      style={{ color: "#6b6554" }}
                    >
                      {officer.spec}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className="px-2 py-0.5 rounded-full text-xs"
                        style={{ background: "#edf3e8", color: "#3a6b1e" }}
                      >
                        {officer.avail}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Emergency Helplines */}
      <section
        data-ocid="contact.emergency.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <h2
          className="font-bold text-2xl md:text-3xl mb-3"
          style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
        >
          Emergency &amp; Farmer Helplines
        </h2>
        <p className="mb-8 text-sm" style={{ color: "#6b6554" }}>
          Free government helplines available 24x7 for all farmers
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              emoji: "📞",
              title: "Kisan Call Centre",
              number: "1800-180-1551",
              color: "#2e7d32",
              bg: "#dcfce7",
              desc: "24x7 toll-free helpline for agriculture queries in 22 languages",
            },
            {
              emoji: "🌾",
              title: "PM Kisan Helpline",
              number: "155261",
              color: "#1565c0",
              bg: "#dbeafe",
              desc: "For PM-KISAN payment issues, registration, and updates",
            },
            {
              emoji: "🌿",
              title: "Soil Health Card",
              number: "1800-180-1551",
              color: "#d97706",
              bg: "#fef9c3",
              desc: "For soil testing appointments and Soil Health Card queries",
            },
            {
              emoji: "🛡️",
              title: "Crop Insurance",
              number: "1800-200-7710",
              color: "#6a1b9a",
              bg: "#f3e8ff",
              desc: "For PMFBY crop insurance claims, complaints, and assistance",
            },
          ].map((helpline, i) => (
            <div
              key={helpline.title}
              data-ocid={`contact.helpline.item.${i + 1}`}
              className="glass-card p-5 text-center"
              style={{ borderTop: `3px solid ${helpline.color}` }}
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-3"
                style={{ background: helpline.bg }}
              >
                {helpline.emoji}
              </div>
              <h3 className="font-bold mb-1" style={{ color: "#2c2416" }}>
                {helpline.title}
              </h3>
              <a
                href={`tel:${helpline.number}`}
                className="text-xl font-bold block mb-2"
                style={{ color: helpline.color }}
              >
                {helpline.number}
              </a>
              <p className="text-xs" style={{ color: "#6b6554" }}>
                {helpline.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section
        data-ocid="contact.newsletter.section"
        className="py-12 px-4"
        style={{ background: "#f5f0e8" }}
      >
        <div className="max-w-xl mx-auto text-center">
          <h2
            className="font-bold text-2xl md:text-3xl mb-3"
            style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
          >
            🌐 Stay Updated with Agro Crops
          </h2>
          <p className="mb-6 text-sm" style={{ color: "#6b6554" }}>
            Get weekly farming tips, market price updates, and government scheme
            alerts in your inbox
          </p>
          <div className="glass-card p-6">
            <div className="flex gap-3">
              <input
                data-ocid="contact.newsletter.input"
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2.5 rounded-xl text-sm outline-none"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2d8cc",
                  color: "#2c2416",
                }}
              />
              <button
                type="button"
                data-ocid="contact.newsletter.submit_button"
                className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white flex-shrink-0"
                style={{ background: "#3a6b1e" }}
                onClick={() => {}}
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs mt-3" style={{ color: "#6b6554" }}>
              🔒 No spam. Unsubscribe anytime. Free forever.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
