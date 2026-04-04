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
        className="fixed inset-0 z-[60] bg-black/30"
        onClick={() => setIsOpen(false)}
      />
      <div
        className="fixed right-0 top-0 h-full z-[70] flex flex-col"
        style={{
          width: "min(400px, 100vw)",
          background: "#ffffff",
          borderLeft: "1px solid #e2d8cc",
        }}
      >
        <div
          className="flex items-center justify-between p-4"
          style={{ borderBottom: "1px solid #e2d8cc" }}
        >
          <h2
            className="font-bold flex items-center gap-2"
            style={{ color: "#2c2416" }}
          >
            <ShoppingBag size={18} style={{ color: "#3a6b1e" }} />
            {t("cart.title")}
            {count > 0 && (
              <span
                className="text-sm font-normal"
                style={{ color: "#6b6554" }}
              >
                ({count} items)
              </span>
            )}
          </h2>
          <button
            type="button"
            data-ocid="cart.close.button"
            onClick={() => setIsOpen(false)}
            style={{ color: "#6b6554" }}
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
                style={{ color: "#b5c9a0" }}
                className="mb-3"
              />
              <p style={{ color: "#6b6554" }}>{t("cart.empty")}</p>
            </div>
          ) : (
            items.map((item, idx) => (
              <div
                key={item.id}
                data-ocid={`cart.item.${idx + 1}`}
                className="flex items-center gap-3 p-3 rounded-xl"
                style={{ background: "#f9f6f1", border: "1px solid #e2d8cc" }}
              >
                <div className="flex-1 min-w-0">
                  <p
                    className="text-sm font-medium truncate"
                    style={{ color: "#2c2416" }}
                  >
                    {item.name}
                  </p>
                  <p className="text-xs" style={{ color: "#6b6554" }}>
                    ₹{item.price} each
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    data-ocid={`cart.qty_dec.${idx + 1}`}
                    onClick={() => updateQty(item.id, item.qty - 1)}
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: "#edf3e8", color: "#3a6b1e" }}
                  >
                    <Minus size={10} />
                  </button>
                  <span
                    className="text-sm w-6 text-center"
                    style={{ color: "#2c2416" }}
                  >
                    {item.qty}
                  </span>
                  <button
                    type="button"
                    data-ocid={`cart.qty_inc.${idx + 1}`}
                    onClick={() => updateQty(item.id, item.qty + 1)}
                    className="w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: "#edf3e8", color: "#3a6b1e" }}
                  >
                    <Plus size={10} />
                  </button>
                </div>
                <p
                  className="text-sm font-semibold"
                  style={{ color: "#3a6b1e" }}
                >
                  ₹{item.price * item.qty}
                </p>
                <button
                  type="button"
                  data-ocid={`cart.remove.${idx + 1}`}
                  onClick={() => removeFromCart(item.id)}
                  style={{ color: "#dc2626" }}
                >
                  <X size={14} />
                </button>
              </div>
            ))
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4" style={{ borderTop: "1px solid #e2d8cc" }}>
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold" style={{ color: "#2c2416" }}>
                {t("cart.total")}
              </span>
              <span className="text-xl font-bold" style={{ color: "#3a6b1e" }}>
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
              className="w-full py-3 rounded-xl font-semibold text-white transition-all"
              style={{ background: "#3a6b1e" }}
            >
              {t("cart.checkout")}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
