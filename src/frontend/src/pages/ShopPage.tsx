import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import ParticleCanvas from "../components/ParticleCanvas";
import { useCart } from "../contexts/CartContext";
import { useLang } from "../contexts/LangContext";
import { type Product, products } from "../data/products";

type Category = "vegetables" | "seeds" | "fertilizers";

const tabs: { key: Category; labelKey: string }[] = [
  { key: "vegetables", labelKey: "shop.vegetables" },
  { key: "seeds", labelKey: "shop.seeds" },
  { key: "fertilizers", labelKey: "shop.fertilizers" },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <span
          key={s}
          className="text-xs"
          style={{ color: s <= Math.floor(rating) ? "#84cc16" : "#2a332a" }}
        >
          ★
        </span>
      ))}
      <span className="text-xs ml-1" style={{ color: "#a7b3a7" }}>
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

  const handleAddToCart = (p: Product) => {
    addToCart({ id: p.id, name: p.name, price: p.price, category: p.category });
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
            {t("shop.hero")}
          </h1>
          <p style={{ color: "#a7b3a7" }}>
            60+ organic products — fresh, seeds & fertilizers
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
                background:
                  activeTab === tab.key
                    ? "rgba(132,204,22,0.2)"
                    : "rgba(132,204,22,0.06)",
                border:
                  activeTab === tab.key
                    ? "1px solid #84cc16"
                    : "1px solid rgba(132,204,22,0.2)",
                color: activeTab === tab.key ? "#84cc16" : "#a7b3a7",
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
              <div
                className={`w-full h-32 bg-gradient-to-br ${p.gradient} flex items-center justify-center text-5xl relative`}
              >
                <span>{p.emoji}</span>
                <button
                  type="button"
                  data-ocid={`shop.wishlist.${idx + 1}`}
                  onClick={() => toggleWishlist(p.id)}
                  className="absolute top-2 right-2 p-1.5 rounded-full transition-all"
                  style={{ background: "rgba(0,0,0,0.5)" }}
                  aria-label="Toggle wishlist"
                >
                  <Heart
                    size={14}
                    fill={wishlist.includes(p.id) ? "#84cc16" : "none"}
                    style={{
                      color: wishlist.includes(p.id) ? "#84cc16" : "#a7b3a7",
                    }}
                  />
                </button>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="font-sora font-semibold text-white mb-1">
                  {p.name}
                </h3>
                <p className="text-xs mb-1" style={{ color: "#a7b3a7" }}>
                  {p.unit}
                </p>
                <StarRating rating={p.rating} />
                <p
                  className="text-xl font-bold mt-2 mb-3"
                  style={{ color: "#84cc16" }}
                >
                  ₹{p.price}
                </p>
                <div className="flex flex-col gap-2 mt-auto">
                  <button
                    type="button"
                    data-ocid={`shop.add_cart.${idx + 1}`}
                    onClick={() => handleAddToCart(p)}
                    className="flex items-center justify-center gap-2 py-2 rounded-xl text-sm font-medium transition-all hover:scale-105"
                    style={{
                      background: "rgba(132,204,22,0.15)",
                      border: "1px solid rgba(132,204,22,0.3)",
                      color: "#84cc16",
                    }}
                  >
                    <ShoppingCart size={14} /> {t("shop.addCart")}
                  </button>
                  <button
                    type="button"
                    data-ocid={`shop.buy_now.${idx + 1}`}
                    onClick={() => handleAddToCart(p)}
                    className="py-2 rounded-xl text-sm font-medium text-black transition-all hover:scale-105"
                    style={{
                      background: "linear-gradient(135deg, #84cc16, #a3e635)",
                    }}
                  >
                    {t("shop.buyNow")}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
