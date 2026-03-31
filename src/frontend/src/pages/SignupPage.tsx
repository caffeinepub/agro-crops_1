import { useState } from "react";
import { useLang } from "../contexts/LangContext";

interface Props {
  onSignup: () => void;
}

export default function SignupPage({ onSignup }: Props) {
  const { t } = useLang();
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    password: "",
    confirm: "",
  });
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");

  const sendOtp = () => {
    if (!form.mobile.match(/^\d{10}$/)) {
      setError("Enter valid 10-digit mobile");
      return;
    }
    setOtpSent(true);
    setMsg(t("signup.otpSent"));
    setError("");
  };

  const verifyOtp = () => {
    if (otp === "1234") {
      setOtpVerified(true);
      setMsg("");
      setError("");
    } else {
      setError(t("signup.otpError"));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!otpVerified) {
      setError("Please verify OTP first");
      return;
    }
    if (form.password !== form.confirm) {
      setError("Passwords do not match");
      return;
    }
    localStorage.setItem(
      "agro-auth",
      JSON.stringify({ name: form.name, mobile: form.mobile }),
    );
    onSignup();
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: "linear-gradient(180deg, #070b07 0%, #0b120b 100%)",
      }}
    >
      <div className="w-full max-w-md glass-card p-8">
        <div className="text-center mb-6">
          <img
            src="/assets/generated/agro-crops-logo-transparent.dim_200x60.png"
            alt="Agro Crops"
            className="h-12 mx-auto mb-4 object-contain"
          />
          <h1 className="font-sora text-2xl font-bold text-white">
            {t("signup.title")}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            {/* biome-ignore lint/a11y/noLabelWithoutControl: input is associated via nesting */}
            <label className="block text-sm mb-1" style={{ color: "#a7b3a7" }}>
              {t("signup.name")}
              <input
                data-ocid="signup.name.input"
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                className="block w-full mt-1 px-4 py-2.5 rounded-xl text-white text-sm outline-none"
                style={{
                  background: "rgba(132,204,22,0.05)",
                  border: "1px solid rgba(132,204,22,0.25)",
                }}
              />
            </label>
          </div>

          <div>
            {/* biome-ignore lint/a11y/noLabelWithoutControl: input is associated via nesting */}
            <label className="block text-sm mb-1" style={{ color: "#a7b3a7" }}>
              {t("signup.mobile")}
              <div className="flex gap-2 mt-1">
                <input
                  data-ocid="signup.mobile.input"
                  type="tel"
                  value={form.mobile}
                  onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                  maxLength={10}
                  className="flex-1 px-4 py-2.5 rounded-xl text-white text-sm outline-none"
                  style={{
                    background: "rgba(132,204,22,0.05)",
                    border: "1px solid rgba(132,204,22,0.25)",
                  }}
                />
                {!otpSent && (
                  <button
                    type="button"
                    data-ocid="signup.send_otp.button"
                    onClick={sendOtp}
                    className="px-4 py-2.5 rounded-xl text-sm font-semibold text-black transition-all hover:scale-105"
                    style={{ background: "#84cc16" }}
                  >
                    {t("signup.sendOtp")}
                  </button>
                )}
              </div>
            </label>
          </div>

          {otpSent && !otpVerified && (
            <div>
              {/* biome-ignore lint/a11y/noLabelWithoutControl: input is associated via nesting */}
              <label
                className="block text-sm mb-1"
                style={{ color: "#a7b3a7" }}
              >
                {t("signup.enterOtp")} (demo: 1234)
                <div className="flex gap-2 mt-1">
                  <input
                    data-ocid="signup.otp.input"
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    maxLength={4}
                    className="flex-1 px-4 py-2.5 rounded-xl text-white text-sm outline-none"
                    style={{
                      background: "rgba(132,204,22,0.05)",
                      border: "1px solid rgba(132,204,22,0.25)",
                    }}
                  />
                  <button
                    type="button"
                    data-ocid="signup.verify_otp.button"
                    onClick={verifyOtp}
                    className="px-4 py-2.5 rounded-xl text-sm font-semibold text-black"
                    style={{ background: "#84cc16" }}
                  >
                    {t("signup.verify")}
                  </button>
                </div>
              </label>
            </div>
          )}

          {otpVerified && (
            <p className="text-sm" style={{ color: "#84cc16" }}>
              ✅ OTP Verified
            </p>
          )}

          <div>
            {/* biome-ignore lint/a11y/noLabelWithoutControl: input is associated via nesting */}
            <label className="block text-sm mb-1" style={{ color: "#a7b3a7" }}>
              {t("signup.password")}
              <input
                data-ocid="signup.password.input"
                type="password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
                className="block w-full mt-1 px-4 py-2.5 rounded-xl text-white text-sm outline-none"
                style={{
                  background: "rgba(132,204,22,0.05)",
                  border: "1px solid rgba(132,204,22,0.25)",
                }}
              />
            </label>
          </div>

          <div>
            {/* biome-ignore lint/a11y/noLabelWithoutControl: input is associated via nesting */}
            <label className="block text-sm mb-1" style={{ color: "#a7b3a7" }}>
              {t("signup.confirmPassword")}
              <input
                data-ocid="signup.confirm_password.input"
                type="password"
                value={form.confirm}
                onChange={(e) => setForm({ ...form, confirm: e.target.value })}
                required
                className="block w-full mt-1 px-4 py-2.5 rounded-xl text-white text-sm outline-none"
                style={{
                  background: "rgba(132,204,22,0.05)",
                  border: "1px solid rgba(132,204,22,0.25)",
                }}
              />
            </label>
          </div>

          {msg && (
            <p className="text-sm" style={{ color: "#84cc16" }}>
              {msg}
            </p>
          )}
          {error && (
            <p
              data-ocid="signup.error_state"
              className="text-sm"
              style={{ color: "#f87171" }}
            >
              {error}
            </p>
          )}

          <button
            data-ocid="signup.submit.button"
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-black mt-2 transition-all hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #84cc16, #a3e635)",
              boxShadow: "0 0 20px rgba(132,204,22,0.3)",
            }}
          >
            {t("signup.submit")}
          </button>
        </form>
      </div>
    </div>
  );
}
