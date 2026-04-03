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
    <nav className="natural-nav sticky top-0 z-50 w-full">
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
                background: "#f0ebe3",
                border: "1px solid #d4c9b8",
                color: "#3a6b1e",
              }}
            >
              <Globe size={14} />
              {langOptions.find((l) => l.value === lang)?.label}
            </button>
            {langOpen && (
              <div
                className="absolute right-0 top-full mt-1 rounded-xl overflow-hidden z-50"
                style={{
                  background: "#ffffff",
                  border: "1px solid #e2d8cc",
                  minWidth: "130px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
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
                    className="block w-full px-4 py-2 text-left text-sm transition-colors"
                    style={{
                      color: lang === opt.value ? "#3a6b1e" : "#2c2416",
                      background:
                        lang === opt.value ? "#edf3e8" : "transparent",
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
              background: "#f0ebe3",
              border: "1px solid #d4c9b8",
              color: "#3a6b1e",
            }}
          >
            <ShoppingCart size={15} />
            {t("nav.cart")}
            {count > 0 && (
              <span
                className="absolute -top-1.5 -right-1.5 flex items-center justify-center rounded-full text-[10px] font-bold text-white"
                style={{
                  background: "#3a6b1e",
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
              background: "#fef2f2",
              border: "1px solid #fecaca",
              color: "#dc2626",
            }}
          >
            <LogOut size={14} />
            {t("nav.logout")}
          </button>
        </div>

        <button
          type="button"
          className="md:hidden"
          style={{ color: "#3a6b1e" }}
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
            background: "#f0ebe3",
            border: "1px solid #e2d8cc",
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
                  currentPage === item.key ? "#edf3e8" : "transparent",
                color: currentPage === item.key ? "#3a6b1e" : "#6b6554",
                border:
                  currentPage === item.key
                    ? "1px solid #b5c9a0"
                    : "1px solid transparent",
                fontWeight: currentPage === item.key ? 600 : 400,
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
            background: "#ffffff",
            borderTop: "1px solid #e2d8cc",
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
                  background: currentPage === item.key ? "#edf3e8" : "#f9f6f1",
                  color: currentPage === item.key ? "#3a6b1e" : "#6b6554",
                  border: "1px solid #e2d8cc",
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
                  background: lang === opt.value ? "#edf3e8" : "#f0ebe3",
                  color: "#3a6b1e",
                  border: "1px solid #d4c9b8",
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
                background: "#f0ebe3",
                color: "#3a6b1e",
                border: "1px solid #d4c9b8",
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
