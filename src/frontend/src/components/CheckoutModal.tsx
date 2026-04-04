import { X } from "lucide-react";
import { useState } from "react";
import { createPortal } from "react-dom";
import { useCart } from "../contexts/CartContext";
import { useLang } from "../contexts/LangContext";

const EMAILJS_SERVICE_ID = "service_mq76jtj";
const EMAILJS_TEMPLATE_ID = "template_38wjfqt";
const EMAILJS_PUBLIC_KEY = "ralKaweZUsirim3Pg";

const HOST_EMAIL = "kharatchaitanya03@gmail.com";

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
      <td style="padding:8px 12px;border:1px solid #c6e47a;text-align:center;color:#2c2416;">${idx + 1}</td>
      <td style="padding:8px 12px;border:1px solid #c6e47a;font-weight:500;color:#2c2416;">${item.name}</td>
      <td style="padding:8px 12px;border:1px solid #c6e47a;text-align:right;color:#2c2416;">&#8377;${item.price.toLocaleString("en-IN")}</td>
      <td style="padding:8px 12px;border:1px solid #c6e47a;text-align:center;color:#2c2416;">${item.qty}</td>
      <td style="padding:8px 12px;border:1px solid #c6e47a;text-align:right;font-weight:600;color:#3a6b1e;">&#8377;${(item.price * item.qty).toLocaleString("en-IN")}</td>
    </tr>`,
    )
    .join("");

  return `
<table style="border-collapse:collapse;width:100%;font-family:Arial,sans-serif;font-size:14px;">
  <thead>
    <tr style="background:#3a6b1e;color:#ffffff;">
      <th style="padding:10px 12px;border:1px solid #2d5217;text-align:center;">#</th>
      <th style="padding:10px 12px;border:1px solid #2d5217;text-align:left;">Product Name</th>
      <th style="padding:10px 12px;border:1px solid #2d5217;text-align:right;">Unit Price</th>
      <th style="padding:10px 12px;border:1px solid #2d5217;text-align:center;">Qty</th>
      <th style="padding:10px 12px;border:1px solid #2d5217;text-align:right;">Subtotal</th>
    </tr>
  </thead>
  <tbody>${rows}</tbody>
  <tfoot>
    <tr style="background:#edf3e8;">
      <td colspan="4" style="padding:10px 12px;border:1px solid #b5c9a0;text-align:right;font-weight:bold;color:#2c2416;">Grand Total</td>
      <td style="padding:10px 12px;border:1px solid #b5c9a0;text-align:right;font-weight:bold;font-size:15px;color:#3a6b1e;">&#8377;${total.toLocaleString("en-IN")}</td>
    </tr>
  </tfoot>
</table>`;
}

async function sendEmail(params: Record<string, string>): Promise<void> {
  const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      service_id: EMAILJS_SERVICE_ID,
      template_id: EMAILJS_TEMPLATE_ID,
      user_id: EMAILJS_PUBLIC_KEY,
      template_params: params,
    }),
  });
  if (!res.ok) throw new Error(`EmailJS error: ${res.status}`);
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
    const orderTime = new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    // Plain-text fallback list for email clients that block HTML
    const productPlain = items
      .map(
        (i, idx) =>
          `${idx + 1}. ${i.name} | Qty: ${i.qty} | Unit: ₹${i.price} | Total: ₹${i.price * i.qty}`,
      )
      .join("\n");

    const sharedParams = {
      // Customer details
      user_name: form.name,
      user_phone: form.phone,
      user_address: form.address,
      // Order details
      product_name: productTable, // HTML table — use {{{product_name}}} in EmailJS template
      product_list: productPlain, // Plain-text fallback
      quantity: String(quantity),
      total_price: `₹${total.toLocaleString("en-IN")}`,
      order_time: orderTime,
    };

    try {
      // 1. Confirmation email to the customer
      await sendEmail({
        ...sharedParams,
        user_email: form.email,
        to_name: form.name,
        reply_to: HOST_EMAIL,
      });

      // 2. Notification email to the host/owner with full order details
      await sendEmail({
        ...sharedParams,
        user_email: HOST_EMAIL,
        to_name: "Chaitanya Kharat",
        reply_to: form.email,
        // Extra customer fields for host email clarity
        customer_name: form.name,
        customer_phone: form.phone,
        customer_email: form.email,
        customer_address: form.address,
      });

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

  const inputStyle = {
    background: "#ffffff",
    border: "1px solid #e2d8cc",
    color: "#2c2416",
  };
  const inputErrStyle = {
    background: "#ffffff",
    border: "1px solid #dc2626",
    color: "#2c2416",
  };

  const modal = (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4"
      data-ocid="checkout.modal"
    >
      {/* biome-ignore lint/a11y/useKeyWithClickEvents: backdrop close */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div
        className="relative w-full max-w-lg rounded-2xl p-6 max-h-[90vh] overflow-y-auto"
        style={{
          background: "#ffffff",
          border: "1px solid #e2d8cc",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        }}
      >
        <div className="flex items-center justify-between mb-5">
          <h2
            className="font-bold text-xl"
            style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
          >
            {t("checkout.title")}
          </h2>
          <button
            type="button"
            data-ocid="checkout.close.button"
            onClick={onClose}
            style={{ color: "#6b6554" }}
          >
            <X size={20} />
          </button>
        </div>

        {status === "success" ? (
          <div data-ocid="checkout.success_state" className="text-center py-8">
            <div className="text-5xl mb-4">🎉</div>
            <p className="font-semibold text-lg" style={{ color: "#2c2416" }}>
              {t("checkout.success")}
            </p>
            <p className="text-sm mt-2" style={{ color: "#6b6554" }}>
              Order confirmation sent to {form.email}
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Order summary table */}
            <div
              className="rounded-xl p-3"
              style={{ background: "#f9f6f1", border: "1px solid #e2d8cc" }}
            >
              <p
                className="text-xs font-semibold mb-2"
                style={{ color: "#3a6b1e" }}
              >
                🛒 Order Summary
              </p>
              <div className="overflow-x-auto">
                <table
                  className="w-full text-xs"
                  style={{ borderCollapse: "collapse" }}
                >
                  <thead>
                    <tr style={{ background: "#3a6b1e" }}>
                      {["#", "Product", "Price", "Qty", "Total"].map((h) => (
                        <th
                          key={h}
                          className="py-2 px-2 text-left"
                          style={{
                            border: "1px solid #2d5217",
                            color: "#ffffff",
                            fontWeight: 600,
                          }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item, idx) => (
                      <tr
                        key={item.id}
                        style={{
                          background: idx % 2 === 0 ? "#f9fff0" : "#ffffff",
                        }}
                      >
                        <td
                          className="py-1.5 px-2"
                          style={{
                            border: "1px solid #c6e47a",
                            color: "#2c2416",
                            textAlign: "center",
                          }}
                        >
                          {idx + 1}
                        </td>
                        <td
                          className="py-1.5 px-2 font-medium"
                          style={{
                            border: "1px solid #c6e47a",
                            color: "#2c2416",
                          }}
                        >
                          {item.name}
                        </td>
                        <td
                          className="py-1.5 px-2"
                          style={{
                            border: "1px solid #c6e47a",
                            color: "#2c2416",
                            textAlign: "right",
                          }}
                        >
                          ₹{item.price.toLocaleString("en-IN")}
                        </td>
                        <td
                          className="py-1.5 px-2 text-center"
                          style={{
                            border: "1px solid #c6e47a",
                            color: "#2c2416",
                          }}
                        >
                          {item.qty}
                        </td>
                        <td
                          className="py-1.5 px-2 text-right font-semibold"
                          style={{
                            border: "1px solid #c6e47a",
                            color: "#3a6b1e",
                          }}
                        >
                          ₹{(item.price * item.qty).toLocaleString("en-IN")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr style={{ background: "#edf3e8" }}>
                      <td
                        colSpan={4}
                        className="py-2 px-2 text-right font-bold"
                        style={{
                          border: "1px solid #b5c9a0",
                          color: "#2c2416",
                        }}
                      >
                        Grand Total
                      </td>
                      <td
                        className="py-2 px-2 text-right font-bold text-sm"
                        style={{
                          border: "1px solid #b5c9a0",
                          color: "#3a6b1e",
                        }}
                      >
                        ₹{total.toLocaleString("en-IN")}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>

            {/* Checkout form fields */}
            {fields.map(({ key, inputId, type }) => (
              <div key={key}>
                <label
                  htmlFor={inputId}
                  className="block text-sm mb-1"
                  style={{ color: "#6b6554" }}
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
                    className="w-full px-3 py-2 rounded-xl text-sm outline-none resize-none"
                    style={errors[key] ? inputErrStyle : inputStyle}
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
                    className="w-full px-3 py-2 rounded-xl text-sm outline-none"
                    style={errors[key] ? inputErrStyle : inputStyle}
                  />
                )}
                {errors[key] && (
                  <p
                    data-ocid={`checkout.${key}_error`}
                    className="text-xs mt-1"
                    style={{ color: "#dc2626" }}
                  >
                    {errors[key]}
                  </p>
                )}
              </div>
            ))}

            {status === "error" && (
              <p
                data-ocid="checkout.error_state"
                className="text-sm"
                style={{ color: "#dc2626" }}
              >
                {t("checkout.error")}
              </p>
            )}

            <button
              type="button"
              data-ocid="checkout.submit.button"
              onClick={handleSubmit}
              disabled={status === "loading"}
              className="w-full py-3 rounded-xl font-semibold text-white transition-all disabled:opacity-60"
              style={{ background: "#3a6b1e" }}
            >
              {status === "loading"
                ? t("common.loading")
                : t("checkout.submit")}
            </button>

            {/* EmailJS template reminder */}
            <p className="text-xs text-center" style={{ color: "#9e9485" }}>
              Order details will be sent to your email after placing the order.
            </p>
          </div>
        )}
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
