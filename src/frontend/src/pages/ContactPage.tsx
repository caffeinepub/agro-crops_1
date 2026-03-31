import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import ParticleCanvas from "../components/ParticleCanvas";
import VoiceReader from "../components/VoiceReader";
import { useLang } from "../contexts/LangContext";

const faqs = [
  {
    q: "How do I start organic farming?",
    a: "Start with soil health assessment, choose suitable organic crops, use natural inputs like compost and vermicompost, and get certified organic after 3 years.",
  },
  {
    q: "What certifications are required for organic farming?",
    a: "In India, PGS (Participatory Guarantee System) and NPOP (National Programme for Organic Production) are the main certification systems.",
  },
  {
    q: "How can I get government subsidies for organic farming?",
    a: "Apply through PKVY scheme at your local agriculture office, or register on the PM-KISAN portal for income support.",
  },
  {
    q: "Which crops are most profitable for organic farming?",
    a: "Spices like turmeric, ginger, cardamom; vegetables like tomato, capsicum; and fruits like mango, banana are highly profitable as organic produce.",
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
      <section className="relative min-h-[35vh] flex items-center justify-center overflow-hidden">
        <ParticleCanvas />
        <div className="relative z-10 text-center px-4 py-14">
          <h1
            className="font-sora font-extrabold text-4xl md:text-5xl text-white mb-3 slide-up"
            style={{ textShadow: "0 0 30px rgba(132,204,22,0.4)" }}
          >
            {t("contact.hero")}
          </h1>
          <p style={{ color: "#a7b3a7" }}>We'd love to hear from you</p>
        </div>
      </section>

      <section
        data-ocid="contact.main.section"
        className="py-12 px-4 max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="font-sora font-bold text-2xl text-white mb-6">
              Get in Touch
            </h2>
            <div className="space-y-4 mb-8">
              <a
                href="mailto:kharatchaitanya03@gmail.com"
                className="flex items-center gap-3 p-4 glass-card hover:scale-100 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(132,204,22,0.15)" }}
                >
                  <Mail size={18} style={{ color: "#84cc16" }} />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "#a7b3a7" }}>
                    Email
                  </p>
                  <p className="text-sm text-white">
                    kharatchaitanya03@gmail.com
                  </p>
                </div>
              </a>
              <a
                href="tel:8421016006"
                className="flex items-center gap-3 p-4 glass-card hover:scale-100 group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(132,204,22,0.15)" }}
                >
                  <Phone size={18} style={{ color: "#84cc16" }} />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "#a7b3a7" }}>
                    Phone
                  </p>
                  <p className="text-sm text-white">+91 8421016006</p>
                </div>
              </a>
              <div className="flex items-center gap-3 p-4 glass-card">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(132,204,22,0.15)" }}
                >
                  <Clock size={18} style={{ color: "#84cc16" }} />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "#a7b3a7" }}>
                    {t("contact.officeHours")}
                  </p>
                  <p className="text-sm text-white">
                    Mon–Sat: 9:00 AM – 6:00 PM IST
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 glass-card">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(132,204,22,0.15)" }}
                >
                  <MapPin size={18} style={{ color: "#84cc16" }} />
                </div>
                <div>
                  <p className="text-xs" style={{ color: "#a7b3a7" }}>
                    Location
                  </p>
                  <p className="text-sm text-white">Pune, Maharashtra, India</p>
                </div>
              </div>
            </div>
            <div className="glass-card p-5">
              <p className="text-sm italic" style={{ color: "#a7b3a7" }}>
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
              <h2 className="font-sora font-bold text-xl text-white mb-2">
                Send a Message
              </h2>
              {contactFields.map(({ key, id, type }) => (
                <div key={key}>
                  <label
                    htmlFor={id}
                    className="block text-sm mb-1"
                    style={{ color: "#a7b3a7" }}
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
                    className="w-full px-4 py-2.5 rounded-xl text-white text-sm outline-none"
                    style={{
                      background: "rgba(132,204,22,0.05)",
                      border: "1px solid rgba(132,204,22,0.25)",
                    }}
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="cn-message"
                  className="block text-sm mb-1"
                  style={{ color: "#a7b3a7" }}
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
                  className="w-full px-4 py-2.5 rounded-xl text-white text-sm outline-none resize-none"
                  style={{
                    background: "rgba(132,204,22,0.05)",
                    border: "1px solid rgba(132,204,22,0.25)",
                  }}
                />
              </div>
              {status === "success" && (
                <p
                  data-ocid="contact.success_state"
                  className="text-sm"
                  style={{ color: "#84cc16" }}
                >
                  {t("contact.success")}
                </p>
              )}
              {status === "error" && (
                <p
                  data-ocid="contact.error_state"
                  className="text-sm"
                  style={{ color: "#f87171" }}
                >
                  {t("contact.error")}
                </p>
              )}
              <button
                type="submit"
                data-ocid="contact.send.button"
                disabled={status === "loading"}
                className="w-full py-3 rounded-xl font-semibold text-black transition-all hover:scale-105 disabled:opacity-60"
                style={{
                  background: "linear-gradient(135deg, #84cc16, #a3e635)",
                  boxShadow: "0 0 20px rgba(132,204,22,0.3)",
                }}
              >
                {status === "loading" ? t("common.loading") : t("contact.send")}
              </button>
            </form>
          </div>
        </div>

        <section data-ocid="contact.faq.section" className="mt-12">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="font-sora font-bold text-2xl text-white">
              {t("contact.faq")}
            </h2>
            <VoiceReader text={faqs.map((f) => `${f.q}. ${f.a}`).join(". ")} />
          </div>
          <div className="space-y-4">
            {/* biome-ignore lint/suspicious/noArrayIndexKey: static faq items */}
            {faqs.map((faq, idx) => (
              <div
                key={faq.q}
                data-ocid={`contact.faq.item.${idx + 1}`}
                className="glass-card p-5"
              >
                <h3 className="font-sora font-semibold text-white mb-2">
                  ❓ {faq.q}
                </h3>
                <p className="text-sm" style={{ color: "#a7b3a7" }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
