import { Globe, LogOut, Menu, ShoppingCart, X } from "lucide-react";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { type Lang, useLang } from "../contexts/LangContext";

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
  currentPage: Page;
  onNavigate: (page: Page) => void;
  onLogout: () => void;
}

const navItems: { key: Page; labelKey: string }[] = [
  { key: "home", labelKey: "nav.home" },
  { key: "about", labelKey: "nav.about" },
  { key: "farm", labelKey: "nav.farm" },
  { key: "shop", labelKey: "nav.shop" },
  { key: "cattle", labelKey: "nav.cattle" },
  { key: "equipment", labelKey: "nav.equipment" },
  { key: "cropSuggestions", labelKey: "nav.cropSuggestions" },
  { key: "schemes", labelKey: "nav.schemes" },
  { key: "contact", labelKey: "nav.contact" },
];

const langOptions: { value: Lang; label: string }[] = [
  { value: "en", label: "English" },
  { value: "hi", label: "हिंदी" },
  { value: "mr", label: "मराठी" },
];

export default function Navbar({ currentPage, onNavigate, onLogout }: Props) {
  const { t, lang, setLang } = useLang();
  const { count, setIsOpen } = useCart();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  return (
    <nav className="glass-nav sticky top-0 z-50 w-full">
      <div className="flex items-center justify-between px-4 md:px-6 py-3">
        <div className="flex items-center gap-2">
          <img
            src="/assets/generated/agro-crops-logo-transparent.dim_200x60.png"
            alt="Agro Crops"
            className="h-10 w-auto object-contain"
          />
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <button
              type="button"
              data-ocid="nav.language.toggle"
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all"
              style={{
                background: "rgba(132,204,22,0.1)",
                border: "1px solid rgba(132,204,22,0.3)",
                color: "#84cc16",
              }}
            >
              <Globe size={14} />
              {langOptions.find((l) => l.value === lang)?.label}
            </button>
            {langOpen && (
              <div
                className="absolute right-0 top-full mt-1 rounded-xl overflow-hidden z-50"
                style={{
                  background: "rgba(10,15,10,0.95)",
                  border: "1px solid rgba(132,204,22,0.3)",
                  minWidth: "130px",
                }}
              >
                {langOptions.map((opt) => (
                  <button
                    type="button"
                    key={opt.value}
                    data-ocid={`nav.lang.${opt.value}.button`}
                    onClick={() => {
                      setLang(opt.value);
                      setLangOpen(false);
                    }}
                    className="block w-full px-4 py-2 text-left text-sm hover:bg-lime-500/10 transition-colors"
                    style={{
                      color: lang === opt.value ? "#84cc16" : "#eaf3ea",
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            data-ocid="nav.cart.button"
            onClick={() => setIsOpen(true)}
            className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all"
            style={{
              background: "rgba(132,204,22,0.1)",
              border: "1px solid rgba(132,204,22,0.3)",
              color: "#84cc16",
            }}
          >
            <ShoppingCart size={15} />
            {t("nav.cart")}
            {count > 0 && (
              <span
                className="absolute -top-1.5 -right-1.5 flex items-center justify-center rounded-full text-[10px] font-bold text-black"
                style={{
                  background: "#84cc16",
                  minWidth: "18px",
                  height: "18px",
                }}
              >
                {count}
              </span>
            )}
          </button>

          <button
            type="button"
            data-ocid="nav.logout.button"
            onClick={onLogout}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all"
            style={{
              background: "rgba(220,38,38,0.1)",
              border: "1px solid rgba(220,38,38,0.3)",
              color: "#f87171",
            }}
          >
            <LogOut size={14} />
            {t("nav.logout")}
          </button>
        </div>

        <button
          type="button"
          className="md:hidden"
          style={{ color: "#84cc16" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          data-ocid="nav.mobile_menu.button"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className="hidden md:flex items-center gap-1 px-4 pb-2 overflow-x-auto">
        <div
          className="flex items-center gap-1 px-2 py-1 rounded-2xl"
          style={{
            background: "rgba(132,204,22,0.05)",
            border: "1px solid rgba(132,204,22,0.1)",
          }}
        >
          {navItems.map((item) => (
            <button
              type="button"
              key={item.key}
              data-ocid={`nav.${item.key}.link`}
              onClick={() => onNavigate(item.key)}
              className="px-3 py-1.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all"
              style={{
                background:
                  currentPage === item.key
                    ? "rgba(132,204,22,0.2)"
                    : "transparent",
                color: currentPage === item.key ? "#84cc16" : "#a7b3a7",
                border:
                  currentPage === item.key
                    ? "1px solid rgba(132,204,22,0.4)"
                    : "1px solid transparent",
              }}
            >
              {t(item.labelKey as Parameters<typeof t>[0])}
            </button>
          ))}
        </div>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden px-4 pb-4"
          style={{
            background: "rgba(10,15,10,0.95)",
            borderTop: "1px solid rgba(132,204,22,0.1)",
          }}
        >
          <div className="grid grid-cols-2 gap-2 pt-3">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.key}
                data-ocid={`nav.mobile.${item.key}.link`}
                onClick={() => {
                  onNavigate(item.key);
                  setMobileOpen(false);
                }}
                className="px-3 py-2 rounded-xl text-sm text-left transition-all"
                style={{
                  background:
                    currentPage === item.key
                      ? "rgba(132,204,22,0.2)"
                      : "rgba(132,204,22,0.05)",
                  color: currentPage === item.key ? "#84cc16" : "#a7b3a7",
                  border: "1px solid rgba(132,204,22,0.15)",
                }}
              >
                {t(item.labelKey as Parameters<typeof t>[0])}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2 mt-3">
            {langOptions.map((opt) => (
              <button
                type="button"
                key={opt.value}
                onClick={() => {
                  setLang(opt.value);
                  setMobileOpen(false);
                }}
                className="px-3 py-1.5 rounded-full text-xs transition-all"
                style={{
                  background:
                    lang === opt.value
                      ? "rgba(132,204,22,0.2)"
                      : "rgba(132,204,22,0.05)",
                  color: "#84cc16",
                  border: "1px solid rgba(132,204,22,0.3)",
                }}
              >
                {opt.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
              style={{
                background: "rgba(132,204,22,0.1)",
                color: "#84cc16",
                border: "1px solid rgba(132,204,22,0.3)",
              }}
            >
              <ShoppingCart size={12} /> {count > 0 ? `(${count})` : ""} Cart
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
