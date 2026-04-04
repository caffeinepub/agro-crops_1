import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { useCart } from "../contexts/CartContext";
import { useLang } from "../contexts/LangContext";
import { type Product, products } from "../data/products";

type Category = "vegetables" | "seeds" | "fertilizers";

const tabs: { key: Category; labelKey: string }[] = [
  { key: "vegetables", labelKey: "shop.vegetables" },
  { key: "seeds", labelKey: "shop.seeds" },
  { key: "fertilizers", labelKey: "shop.fertilizers" },
];

const categoryBadge: Record<
  Category,
  { label: string; bg: string; color: string }
> = {
  vegetables: { label: "Fresh & Organic", bg: "#dcfce7", color: "#15803d" },
  seeds: { label: "Germination: 85%+", bg: "#dbeafe", color: "#1d4ed8" },
  fertilizers: { label: "Certified Organic", bg: "#ffedd5", color: "#c2410c" },
};

const whyBuyUs = [
  {
    emoji: "\uD83C\uDF3F",
    title: "100% Organic Certified",
    desc: "All products carry NPOP/PGS-India organic certification. No synthetic chemicals, ever.",
  },
  {
    emoji: "\uD83D\uDE9A",
    title: "Fast Delivery",
    desc: "Delivered within 3–5 working days across India. Real-time order tracking via email.",
  },
  {
    emoji: "\uD83D\uDCAF",
    title: "Quality Guarantee",
    desc: "30-day return policy if not satisfied with quality. No questions asked.",
  },
  {
    emoji: "\uD83D\uDCB0",
    title: "Best Price",
    desc: "Direct from farmers, no middlemen. Prices 20–40% lower than retail markets.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          className="text-xs"
          style={{ color: s <= Math.floor(rating) ? "#a36b0a" : "#d4c9b8" }}
        >
          &#9733;
        </span>
      ))}
      <span className="text-xs ml-1" style={{ color: "#6b6554" }}>
        {rating}
      </span>
    </div>
  );
}

export default function ShopPage() {
  const { t } = useLang();
  const { addToCart, wishlist, toggleWishlist } = useCart();
  const [activeTab, setActiveTab] = useState<Category>("vegetables");

  const filtered = products.filter((p) => p.category === activeTab);
  const badge = categoryBadge[activeTab];

  const handleAddToCart = (p: Product) => {
    addToCart({ id: p.id, name: p.name, price: p.price, category: p.category });
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
            {t("shop.hero")}
          </h1>
          <p style={{ color: "#c8e0b0" }}>
            60+ organic products — fresh, seeds &amp; fertilizers
          </p>
        </div>
      </section>

      <section
        data-ocid="shop.products.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <div className="flex gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab.key}
              data-ocid={`shop.${tab.key}.tab`}
              onClick={() => setActiveTab(tab.key)}
              className="px-6 py-2.5 rounded-full font-medium text-sm transition-all"
              style={{
                background: activeTab === tab.key ? "#3a6b1e" : "#f0ebe3",
                border:
                  activeTab === tab.key
                    ? "1px solid #3a6b1e"
                    : "1px solid #e2d8cc",
                color: activeTab === tab.key ? "#ffffff" : "#6b6554",
              }}
            >
              {t(tab.labelKey as Parameters<typeof t>[0])}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filtered.map((p, idx) => (
            <div
              key={p.id}
              data-ocid={`shop.product.item.${idx + 1}`}
              className="glass-card overflow-hidden flex flex-col"
            >
              <div className="w-full h-32 relative">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-32 object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-32 flex items-center justify-center text-5xl"
                    style={{ background: "#edf3e8" }}
                  >
                    <span>{p.emoji}</span>
                  </div>
                )}
                <button
                  type="button"
                  data-ocid={`shop.wishlist.${idx + 1}`}
                  onClick={() => toggleWishlist(p.id)}
                  className="absolute top-2 right-2 p-1.5 rounded-full transition-all"
                  style={{ background: "#ffffff", border: "1px solid #e2d8cc" }}
                  aria-label="Toggle wishlist"
                >
                  <Heart
                    size={14}
                    fill={wishlist.includes(p.id) ? "#dc2626" : "none"}
                    style={{
                      color: wishlist.includes(p.id) ? "#dc2626" : "#6b6554",
                    }}
                  />
                </button>
                {/* Category badge */}
                <span
                  className="absolute bottom-2 left-2 px-2 py-0.5 rounded-full text-xs font-medium"
                  style={{ background: badge.bg, color: badge.color }}
                >
                  {badge.label}
                </span>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-semibold mb-1" style={{ color: "#2c2416" }}>
                  {p.name}
                </h3>
                <p className="text-xs mb-1" style={{ color: "#6b6554" }}>
                  {p.unit}
                </p>
                <StarRating rating={p.rating} />
                <p
                  className="text-xl font-bold mt-2 mb-3"
                  style={{ color: "#3a6b1e" }}
                >
                  ₹{p.price}
                </p>
                <div className="flex flex-col gap-2 mt-auto">
                  <button
                    type="button"
                    data-ocid={`shop.add_cart.${idx + 1}`}
                    onClick={() => handleAddToCart(p)}
                    className="flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-medium transition-all"
                    style={{
                      background: "#edf3e8",
                      border: "1px solid #b5c9a0",
                      color: "#3a6b1e",
                    }}
                  >
                    <ShoppingCart size={14} /> {t("shop.addCart")}
                  </button>
                  <button
                    type="button"
                    data-ocid={`shop.buy_now.${idx + 1}`}
                    onClick={() => handleAddToCart(p)}
                    className="py-2 rounded-xl text-sm font-medium text-white transition-all"
                    style={{ background: "#3a6b1e" }}
                  >
                    {t("shop.buyNow")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Buy From Us */}
      <section
        data-ocid="shop.why_buy.section"
        className="py-14 px-4"
        style={{ background: "#f5f0e8" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-bold text-2xl md:text-3xl mb-3 text-center"
            style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
          >
            Why Buy From Us?
          </h2>
          <p className="text-center mb-8" style={{ color: "#6b6554" }}>
            Trusted by 2,500+ farmers across India
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyBuyUs.map((item, i) => (
              <div
                key={item.title}
                data-ocid={`shop.why_buy.item.${i + 1}`}
                className="glass-card p-5 text-center"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-3"
                  style={{ background: "#edf3e8" }}
                >
                  {item.emoji}
                </div>
                <h3 className="font-bold mb-2" style={{ color: "#2c2416" }}>
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: "#6b6554" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
