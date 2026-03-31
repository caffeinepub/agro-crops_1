import { useEffect, useState } from "react";

interface Props {
  onDone: () => void;
}

export default function LoadingScreen({ onDone }: Props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            localStorage.setItem("agro-visited", "true");
            onDone();
          }, 300);
          return 100;
        }
        return p + 2;
      });
    }, 45);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(180deg, #070b07 0%, #0b120b 100%)",
      }}
    >
      {/* Pulsing rings */}
      <div className="relative flex items-center justify-center mb-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute rounded-full border-2 border-lime-500"
            style={{
              width: `${80 + i * 50}px`,
              height: `${80 + i * 50}px`,
              animation: `pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) ${i * 0.4}s infinite`,
              opacity: 0.6 - i * 0.15,
            }}
          />
        ))}
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{
            background: "rgba(132, 204, 22, 0.15)",
            border: "2px solid #84cc16",
          }}
        >
          <span className="text-3xl">🌿</span>
        </div>
      </div>

      <h1
        className="font-sora text-3xl font-bold text-white mb-1"
        style={{ textShadow: "0 0 20px rgba(132,204,22,0.7)" }}
      >
        Agro <span style={{ color: "#84cc16" }}>Crops</span>
      </h1>
      <p className="text-sm mb-8" style={{ color: "#a7b3a7" }}>
        Organic Farming Management System
      </p>

      <div
        className="w-64 h-1.5 rounded-full overflow-hidden"
        style={{ background: "rgba(132,204,22,0.15)" }}
      >
        <div
          className="h-full rounded-full transition-all duration-100"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #84cc16, #a3e635)",
          }}
        />
      </div>
      <p className="mt-2 text-xs" style={{ color: "#84cc16" }}>
        {progress}%
      </p>
    </div>
  );
}
