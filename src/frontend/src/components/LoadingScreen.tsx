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
      style={{ background: "#f9f6f1" }}
    >
      <div className="flex items-center justify-center mb-8">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{ background: "#edf3e8", border: "2px solid #b5c9a0" }}
        >
          <span className="text-3xl">\uD83C\uDF3F</span>
        </div>
      </div>

      <h1
        className="font-bold text-3xl mb-1"
        style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
      >
        Agro <span style={{ color: "#3a6b1e" }}>Crops</span>
      </h1>
      <p className="text-sm mb-8" style={{ color: "#6b6554" }}>
        Organic Farming Management System
      </p>

      <div
        className="w-64 h-1.5 rounded-full overflow-hidden"
        style={{ background: "#e2d8cc" }}
      >
        <div
          className="h-full rounded-full transition-all duration-100"
          style={{ width: `${progress}%`, background: "#3a6b1e" }}
        />
      </div>
      <p className="mt-2 text-xs" style={{ color: "#3a6b1e" }}>
        {progress}%
      </p>
    </div>
  );
}
