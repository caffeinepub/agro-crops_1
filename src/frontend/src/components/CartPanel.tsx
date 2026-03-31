import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useCart } from "../contexts/CartContext";
import { useLang } from "../contexts/LangContext";

interface Props {
  onCheckout: () => void;
}

export default function CartPanel({ onCheckout }: Props) {
  const { items, removeFromCart, updateQty, total, count, isOpen, setIsOpen } =
    useCart();
  const { t } = useLang();

  if (!isOpen) return null;

  return (
    <>
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: backdrop close is supplementary */}
      <div
        className="fixed inset-0 z-[60] bg-black/50"
        onClick={() => setIsOpen(false)}
      />
      <div
        className="fixed right-0 top-0 h-full z-[70] flex flex-col"
        style={{
          width: "min(400px, 100vw)",
          background: "rgba(10,15,10,0.97)",
          borderLeft: "1px solid rgba(132,204,22,0.3)",
          backdropFilter: "blur(20px)",
        }}
      >
        <div
          className="flex items-center justify-between p-4"
          style={{ borderBottom: "1px solid rgba(132,204,22,0.15)" }}
        >
          <h2 className="font-sora font-bold text-white flex items-center gap-2">
            <ShoppingBag size={18} style={{ color: "#84cc16" }} />{" "}
            {t("cart.title")}
            {count > 0 && (
              <span
                className="text-sm font-normal"
                style={{ color: "#a7b3a7" }}
              >
                ({count} items)
              </span>
            )}
          </h2>
          <button
            type="button"
            data-ocid="cart.close.button"
            onClick={() => setIsOpen(false)}
            style={{ color: "#a7b3a7" }}
            className="hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {items.length === 0 ? (
            <div
              data-ocid="cart.empty_state"
              className="flex flex-col items-center justify-center h-48 text-center"
            >
              <ShoppingBag
                size={40}
                style={{ color: "rgba(132,204,22,0.3)" }}
                className="mb-3"
              />
              <p style={{ color: "#a7b3a7" }}>{t("cart.empty")}</p>
            </div>
          ) : (
            items.map((item, idx) => (
              <div
                key={item.id}
                data-ocid={`cart.item.${idx + 1}`}
                className="flex items-center gap-3 p-3 rounded-xl"
                style={{
                  background: "rgba(132,204,22,0.05)",
                  border: "1px solid rgba(132,204,22,0.15)",
                }}
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">
                    {item.name}
                  </p>
                  <p className="text-xs" style={{ color: "#a7b3a7" }}>
                    ₹{item.price} each
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    data-ocid={`cart.qty_dec.${idx + 1}`}
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    className="w-6 h-6 rounded-full flex items-center justify-center transition-colors"
                    style={{
                      background: "rgba(132,204,22,0.15)",
                      color: "#84cc16",
                    }}
                  >
                    <Minus size={10} />
                  </button>
                  <span className="text-sm text-white w-6 text-center">
                    {item.qty}
                  </span>
                  <button
                    type="button"
                    data-ocid={`cart.qty_inc.${idx + 1}`}
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="w-6 h-6 rounded-full flex items-center justify-center transition-colors"
                    style={{
                      background: "rgba(132,204,22,0.15)",
                      color: "#84cc16",
                    }}
                  >
                    <Plus size={10} />
                  </button>
                </div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#84cc16" }}
                >
                  ₹{item.price * item.qty}
                </p>
                <button
                  type="button"
                  data-ocid={`cart.remove.${idx + 1}`}
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-400 hover:text-red-300 transition-colors ml-1"
                >
                  <X size={14} />
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div
            className="p-4"
            style={{ borderTop: "1px solid rgba(132,204,22,0.15)" }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-semibold">
                {t("cart.total")}
              </span>
              <span className="text-xl font-bold" style={{ color: "#84cc16" }}>
                ₹{total}
              </span>
            </div>
            <button
              type="button"
              data-ocid="cart.checkout.button"
              onClick={() => {
                setIsOpen(false);
                onCheckout();
              }}
              className="w-full py-3 rounded-xl font-semibold text-black transition-all hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #84cc16, #a3e635)",
                boxShadow: "0 0 20px rgba(132,204,22,0.4)",
              }}
            >
              {t("cart.checkout")}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
