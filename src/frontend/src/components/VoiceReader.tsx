import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import { useLang } from "../contexts/LangContext";

interface Props {
  text: string;
}

const langCodes = { en: "en-IN", hi: "hi-IN", mr: "mr-IN" };

export default function VoiceReader({ text }: Props) {
  const [speaking, setSpeaking] = useState(false);
  const { lang } = useLang();

  const speak = () => {
    if (speaking) {
      speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = langCodes[lang];
    utt.onend = () => setSpeaking(false);
    utt.onerror = () => setSpeaking(false);
    speechSynthesis.speak(utt);
    setSpeaking(true);
  };

  return (
    <button
      type="button"
      onClick={speak}
      data-ocid="voice.toggle"
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all"
      style={{
        background: speaking ? "#1f301f" : "#1a2a1a",
        border: "1px solid #2d4a2d",
        color: "#84cc16",
      }}
      title={speaking ? "Stop" : "Read aloud"}
    >
      {speaking ? <VolumeX size={14} /> : <Volume2 size={14} />}
      {speaking ? "Stop" : "Read"}
    </button>
  );
}
