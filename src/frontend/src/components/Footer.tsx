import { Mail, Phone, Youtube } from "lucide-react";
import { SiFacebook, SiWhatsapp } from "react-icons/si";
import { useLang } from "../contexts/LangContext";

type Page =
  | "home"
  | "about"
  | "farm"
  | "shop"
  | "cattle"
  | "equipment"
  | "farmingTechniques"
  | "cropSuggestions"
  | "schemes"
  | "contact";

interface Props {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: Props) {
  const { t } = useLang();

  return (
    <footer className="mt-16" style={{ borderTop: "1px solid #d4c9b8" }}>
      <div style={{ background: "#2c2416" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <img
                src="/assets/generated/agro-crops-logo-transparent.dim_200x60.png"
                alt="Agro Crops"
                className="h-10 mb-3 object-contain"
              />
              <p className="text-sm" style={{ color: "#c8b99a" }}>
                {t("footer.tagline")}
              </p>
              <div className="flex items-center gap-3 mt-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition-colors"
                  style={{ background: "#3d3426", color: "#c8b99a" }}
                  aria-label="Facebook"
                >
                  <SiFacebook size={16} />
                </a>
                <a
                  href="https://wa.me/918421016006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition-colors"
                  style={{ background: "#3d3426", color: "#c8b99a" }}
                  aria-label="WhatsApp"
                >
                  <SiWhatsapp size={16} />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full transition-colors"
                  style={{ background: "#3d3426", color: "#c8b99a" }}
                  aria-label="YouTube"
                >
                  <Youtube size={16} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-3" style={{ color: "#e8ddd0" }}>
                {t("footer.quickLinks")}
              </h4>
              <ul className="space-y-2">
                {(["home", "about", "farm", "shop", "cattle"] as Page[]).map(
                  (p) => (
                    <li key={p}>
                      <button
                        type="button"
                        data-ocid={`footer.${p}.link`}
                        onClick={() => onNavigate(p)}
                        className="text-sm capitalize"
                        style={{ color: "#c8b99a" }}
                      >
                        {t(`nav.${p}` as Parameters<typeof t>[0])}
                      </button>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* More links */}
            <div>
              <h4 className="font-semibold mb-3" style={{ color: "#e8ddd0" }}>
                More
              </h4>
              <ul className="space-y-2">
                {(
                  [
                    "equipment",
                    "farmingTechniques",
                    "cropSuggestions",
                    "schemes",
                    "contact",
                  ] as Page[]
                ).map((p) => (
                  <li key={p}>
                    <button
                      type="button"
                      data-ocid={`footer.more.${p}.link`}
                      onClick={() => onNavigate(p)}
                      className="text-sm capitalize"
                      style={{ color: "#c8b99a" }}
                    >
                      {p === "farmingTechniques"
                        ? t("nav.techniques")
                        : t(`nav.${p}` as Parameters<typeof t>[0])}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-3" style={{ color: "#e8ddd0" }}>
                {t("footer.contactInfo")}
              </h4>
              <div className="space-y-2">
                <a
                  href="mailto:kharatchaitanya03@gmail.com"
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "#c8b99a" }}
                >
                  <Mail size={14} style={{ color: "#8fbb6a" }} />
                  kharatchaitanya03@gmail.com
                </a>
                <a
                  href="tel:8421016006"
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "#c8b99a" }}
                >
                  <Phone size={14} style={{ color: "#8fbb6a" }} /> 8421016006
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4" style={{ borderTop: "1px solid #3d3426" }}>
            <p className="text-center text-xs" style={{ color: "#8a7a68" }}>
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
