import { ExternalLink } from "lucide-react";
import ParticleCanvas from "../components/ParticleCanvas";
import VoiceReader from "../components/VoiceReader";
import { useLang } from "../contexts/LangContext";
import { schemes } from "../data/schemes";

export default function SchemesPage() {
  const { t } = useLang();

  return (
    <main>
      <section className="relative min-h-[35vh] flex items-center justify-center overflow-hidden">
        <ParticleCanvas />
        <div className="relative z-10 text-center px-4 py-14">
          <h1
            className="font-sora font-extrabold text-4xl md:text-5xl text-white mb-3 slide-up"
            style={{ textShadow: "0 0 30px rgba(132,204,22,0.4)" }}
          >
            {t("schemes.hero")}
          </h1>
          <p style={{ color: "#a7b3a7" }}>
            10+ government schemes to boost your farming income
          </p>
        </div>
      </section>

      <section
        data-ocid="schemes.list.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-sora font-bold text-2xl text-white">
            Available Schemes
          </h2>
          <VoiceReader
            text={schemes.map((s) => `${s.name}. ${s.description}`).join(". ")}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {schemes.map((scheme, idx) => (
            <div
              key={scheme.id}
              data-ocid={`schemes.scheme.item.${idx + 1}`}
              className="glass-card p-5"
            >
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl flex-shrink-0">{scheme.emoji}</span>
                <div>
                  <h3 className="font-sora font-bold text-lg text-white">
                    {scheme.name}
                  </h3>
                  <span
                    className="inline-block px-2 py-0.5 rounded-full text-xs"
                    style={{
                      background: "rgba(132,204,22,0.15)",
                      color: "#84cc16",
                    }}
                  >
                    {scheme.shortName}
                  </span>
                </div>
              </div>
              <p className="text-sm mb-3" style={{ color: "#a7b3a7" }}>
                {scheme.description}
              </p>
              <div className="space-y-1.5 text-xs mb-4">
                <p>
                  <span style={{ color: "#84cc16" }}>
                    {t("schemes.benefits")}:{" "}
                  </span>
                  <span style={{ color: "#a7b3a7" }}>{scheme.benefits}</span>
                </p>
                <p>
                  <span style={{ color: "#84cc16" }}>
                    {t("schemes.eligibility")}:{" "}
                  </span>
                  <span style={{ color: "#a7b3a7" }}>{scheme.eligibility}</span>
                </p>
              </div>
              <a
                data-ocid={`schemes.apply.${idx + 1}`}
                href={scheme.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2.5 px-5 rounded-xl text-sm font-medium transition-all hover:scale-105 w-fit"
                style={{
                  background: "linear-gradient(135deg, #84cc16, #a3e635)",
                  color: "#000",
                }}
              >
                <ExternalLink size={13} /> {t("schemes.applyNow")}
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
