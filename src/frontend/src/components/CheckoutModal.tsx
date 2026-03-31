import emailjs from "@emailjs/browser";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useCart } from "../contexts/CartContext";
import { useLang } from "../contexts/LangContext";

interface Props {
  open: boolean;
  onClose: () => void;
}

function buildProductTable(
  items: { name: string; price: number; qty: number }[],
  total: number,
): string {
  const rows = items
    .map(
      (item, idx) =>
        `<tr style="background:${idx % 2 === 0 ? "#f9fff0" : "#ffffff"}">
          <td style="padding:8px 12px;border:1px solid #c6e47a;text-align:center;">${idx + 1}</td>
          <td style="padding:8px 12px;border:1px solid #c6e47a;font-weight:500;">${item.name}</td>
          <td style="padding:8px 12px;border:1px solid #c6e47a;text-align:right;">₹${item.price.toLocaleString("en-IN")}</td>
          <td style="padding:8px 12px;border:1px solid #c6e47a;text-align:center;">${item.qty}</td>
          <td style="padding:8px 12px;border:1px solid #c6e47a;text-align:right;font-weight:600;color:#4a7c00;">₹${(item.price * item.qty).toLocaleString("en-IN")}</td>
        </tr>`,
    )
    .join("");

  return `<table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:14px;">
    <thead>
      <tr style="background:#84cc16;color:#000;">
        <th style="padding:10px 12px;border:1px solid #6aaa0a;">#</th>
        <th style="padding:10px 12px;border:1px solid #6aaa0a;text-align:left;">Product Name</th>
        <th style="padding:10px 12px;border:1px solid #6aaa0a;">Unit Price</th>
        <th style="padding:10px 12px;border:1px solid #6aaa0a;">Qty</th>
        <th style="padding:10px 12px;border:1px solid #6aaa0a;">Subtotal</th>
      </tr>
    </thead>
    <tbody>
      ${rows}
    </tbody>
    <tfoot>
      <tr style="background:#1a2e05;color:#84cc16;font-weight:bold;">
        <td colspan="4" style="padding:10px 12px;border:1px solid #6aaa0a;text-align:right;">Grand Total</td>
        <td style="padding:10px 12px;border:1px solid #6aaa0a;text-align:right;font-size:16px;">₹${total.toLocaleString("en-IN")}</td>
      </tr>
    </tfoot>
  </table>`;
}

export default function CheckoutModal({ open, onClose }: Props) {
  const { items, total, clearCart } = useCart();
  const { t } = useLang();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  useEffect(() => {
    emailjs.init("ralKaweZUsirim3Pg");
  }, []);

  if (!open) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = t("checkout.required");
    if (!/^\d{10}$/.test(form.phone)) errs.phone = t("checkout.invalidPhone");
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email))
      errs.email = t("checkout.invalidEmail");
    if (!form.address.trim()) errs.address = t("checkout.required");
    return errs;
  };

  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus("loading");
    const quantity = items.reduce((s, i) => s + i.qty, 0);
    const productTable = buildProductTable(items, total);
    // Plain text fallback for email clients that don't render HTML
    const productPlain = items
      .map((i) => `${i.name} x${i.qty} = ₹${i.price * i.qty}`)
      .join(" | ");
    try {
      await emailjs.send(
        "service_mq76jtj",
        "template_38wjfqt",
        {
          user_name: form.name,
          user_phone: form.phone,
          user_email: form.email,
          user_address: form.address,
          product_name: productTable,
          product_list: productPlain,
          quantity: String(quantity),
          total_price: `₹${total.toLocaleString("en-IN")}`,
        },
        "ralKaweZUsirim3Pg",
      );
      setStatus("success");
      clearCart();
      setTimeout(onClose, 2500);
    } catch {
      setStatus("error");
    }
  };

  const fields = [
    { key: "name" as const, inputId: "co-name", type: "text" },
    { key: "phone" as const, inputId: "co-phone", type: "text" },
    { key: "email" as const, inputId: "co-email", type: "email" },
    { key: "address" as const, inputId: "co-address", type: "textarea" },
  ];

  const modal = (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4"
      data-ocid="checkout.modal"
    >
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: backdrop close */}
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <div
        className="relative w-full max-w-lg rounded-2xl p-6 max-h-[90vh] overflow-y-auto"
        style={{
          background: "rgba(10,18,10,0.97)",
          border: "1px solid rgba(132,204,22,0.35)",
          boxShadow: "0 0 40px rgba(132,204,22,0.2)",
        }}
      >
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-sora font-bold text-xl text-white">
            {t("checkout.title")}
          </h2>
          <button
            type="button"
            data-ocid="checkout.close.button"
            onClick={onClose}
            style={{ color: "#a7b3a7" }}
          >
            <X size={20} />
          </button>
        </div>

        {status === "success" ? (
          <div data-ocid="checkout.success_state" className="text-center py-8">
            <div className="text-5xl mb-4">🎉</div>
            <p className="text-white font-semibold text-lg">
              {t("checkout.success")}
            </p>
            <p className="text-sm mt-2" style={{ color: "#a7b3a7" }}>
              Order confirmation sent to {form.email}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Cart items table preview */}
            <div
              className="rounded-xl p-3"
              style={{
                background: "rgba(132,204,22,0.05)",
                border: "1px solid rgba(132,204,22,0.2)",
              }}
            >
              <p
                className="text-xs font-semibold mb-2"
                style={{ color: "#84cc16" }}
              >
                🛒 Order Summary
              </p>
              <table
                className="w-full text-xs"
                style={{ borderCollapse: "collapse" }}
              >
                <thead>
                  <tr
                    style={{
                      background: "rgba(132,204,22,0.2)",
                      color: "#84cc16",
                    }}
                  >
                    <th
                      className="text-left py-1.5 px-2"
                      style={{ border: "1px solid rgba(132,204,22,0.2)" }}
                    >
                      #
                    </th>
                    <th
                      className="text-left py-1.5 px-2"
                      style={{ border: "1px solid rgba(132,204,22,0.2)" }}
                    >
                      Product
                    </th>
                    <th
                      className="text-right py-1.5 px-2"
                      style={{ border: "1px solid rgba(132,204,22,0.2)" }}
                    >
                      Price
                    </th>
                    <th
                      className="text-center py-1.5 px-2"
                      style={{ border: "1px solid rgba(132,204,22,0.2)" }}
                    >
                      Qty
                    </th>
                    <th
                      className="text-right py-1.5 px-2"
                      style={{ border: "1px solid rgba(132,204,22,0.2)" }}
                    >
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, idx) => (
                    <tr
                      key={item.id}
                      style={{ color: idx % 2 === 0 ? "#e2e8e2" : "#c8d4c8" }}
                    >
                      <td
                        className="py-1.5 px-2"
                        style={{ border: "1px solid rgba(132,204,22,0.1)" }}
                      >
                        {idx + 1}
                      </td>
                      <td
                        className="py-1.5 px-2"
                        style={{ border: "1px solid rgba(132,204,22,0.1)" }}
                      >
                        {item.name}
                      </td>
                      <td
                        className="py-1.5 px-2 text-right"
                        style={{ border: "1px solid rgba(132,204,22,0.1)" }}
                      >
                        ₹{item.price}
                      </td>
                      <td
                        className="py-1.5 px-2 text-center"
                        style={{ border: "1px solid rgba(132,204,22,0.1)" }}
                      >
                        {item.qty}
                      </td>
                      <td
                        className="py-1.5 px-2 text-right font-semibold"
                        style={{
                          border: "1px solid rgba(132,204,22,0.1)",
                          color: "#84cc16",
                        }}
                      >
                        ₹{item.price * item.qty}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr style={{ background: "rgba(132,204,22,0.15)" }}>
                    <td
                      colSpan={4}
                      className="py-2 px-2 text-right font-bold"
                      style={{
                        border: "1px solid rgba(132,204,22,0.2)",
                        color: "#a7b3a7",
                      }}
                    >
                      Grand Total
                    </td>
                    <td
                      className="py-2 px-2 text-right font-bold text-sm"
                      style={{
                        border: "1px solid rgba(132,204,22,0.2)",
                        color: "#84cc16",
                      }}
                    >
                      ₹{total}
                    </td>
                  </tr>
                </tfoot>
              </table>
              <p className="text-xs mt-2" style={{ color: "#6b7b6b" }}>
                📧 This table will be sent to your email on order confirmation.
              </p>
            </div>

            {fields.map(({ key, inputId, type }) => (
              <div key={key}>
                <label
                  htmlFor={inputId}
                  className="block text-sm mb-1"
                  style={{ color: "#a7b3a7" }}
                >
                  {t(`checkout.${key}` as Parameters<typeof t>[0])}
                </label>
                {type === "textarea" ? (
                  <textarea
                    id={inputId}
                    data-ocid={`checkout.${key}.textarea`}
                    value={form[key]}
                    onChange={(e) =>
                      setForm({ ...form, [key]: e.target.value })
                    }
                    rows={2}
                    className="w-full px-3 py-2 rounded-xl text-sm text-white bg-transparent outline-none resize-none"
                    style={{
                      border: errors[key]
                        ? "1px solid #f87171"
                        : "1px solid rgba(132,204,22,0.3)",
                      background: "rgba(132,204,22,0.05)",
                    }}
                  />
                ) : (
                  <input
                    id={inputId}
                    data-ocid={`checkout.${key}.input`}
                    type={type}
                    value={form[key]}
                    onChange={(e) =>
                      setForm({ ...form, [key]: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-xl text-sm text-white bg-transparent outline-none"
                    style={{
                      border: errors[key]
                        ? "1px solid #f87171"
                        : "1px solid rgba(132,204,22,0.3)",
                      background: "rgba(132,204,22,0.05)",
                    }}
                  />
                )}
                {errors[key] && (
                  <p
                    data-ocid={`checkout.${key}_error`}
                    className="text-xs mt-1"
                    style={{ color: "#f87171" }}
                  >
                    {errors[key]}
                  </p>
                )}
              </div>
            ))}

            {status === "error" && (
              <p
                data-ocid="checkout.error_state"
                className="text-sm text-red-400"
              >
                {t("checkout.error")}
              </p>
            )}

            <button
              type="button"
              data-ocid="checkout.submit.button"
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="w-full py-3 rounded-xl font-semibold text-black transition-all hover:scale-105 disabled:opacity-60"
              style={{
                background: "linear-gradient(135deg, #84cc16, #a3e635)",
                boxShadow: "0 0 20px rgba(132,204,22,0.3)",
              }}
            >
              {status === "loading"
                ? t("common.loading")
                : t("checkout.submit")}
            </button>
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
