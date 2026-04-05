import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { useState } from "react";
import VoiceReader from "../components/VoiceReader";
import { useLang } from "../contexts/LangContext";
import { schemes } from "../data/schemes";

interface SchemeDetails {
  steps: string[];
  documents: string[];
  helpline: string;
  deadline: string;
}

const schemeDetails: Record<string, SchemeDetails> = {
  pmkisan: {
    steps: [
      "Visit pmkisan.gov.in",
      'Click "New Farmer Registration"',
      "Enter Aadhaar + land details",
      "Submit and track status online",
    ],
    documents: [
      "Aadhaar Card",
      "Bank Passbook",
      "Land Records (7/12)",
      "Mobile Number",
    ],
    helpline: "155261 / 1800-115-526",
    deadline: "Ongoing — Register anytime",
  },
  pmfby: {
    steps: [
      "Visit pmfby.gov.in",
      "Login with Aadhaar",
      "Select crop and enter land area",
      "Pay 2% premium and receive policy",
    ],
    documents: [
      "Aadhaar Card",
      "Land Records",
      "Bank Account Details",
      "Sowing Certificate",
    ],
    helpline: "1800-200-7710",
    deadline: "Before sowing (May for Kharif, Oct for Rabi)",
  },
  kcc: {
    steps: [
      "Visit nearest bank or CSC",
      "Fill KCC application form",
      "Submit land and income documents",
      "Receive card within 15 working days",
    ],
    documents: [
      "Aadhaar Card",
      "PAN Card",
      "Land Records",
      "Passport Photo",
      "Bank Statement",
    ],
    helpline: "1800-11-0001",
    deadline: "Ongoing — Apply anytime at bank",
  },
  soilHealth: {
    steps: [
      "Contact nearest Krishi Vigyan Kendra (KVK)",
      "Submit soil sample (250g from 0–15 cm depth)",
      "Receive Soil Health Card within 30 days",
      "Follow fertilizer recommendations on card",
    ],
    documents: ["Aadhaar Card", "Land Survey Number", "Mobile Number"],
    helpline: "1800-180-1551",
    deadline: "Apply any time of the year",
  },
  pmksy: {
    steps: [
      "Apply through state agriculture department",
      "Submit land ownership documents",
      "Get technical survey done for irrigation plan",
      "Receive subsidy directly in bank account",
    ],
    documents: [
      "Aadhaar Card",
      "Land Records",
      "Bank Account Details",
      "Photo ID Proof",
    ],
    helpline: "1800-180-1551",
    deadline: "Annual — Apply before March each year",
  },
};

const stateHelplines = [
  { state: "Maharashtra", number: "020-26122501" },
  { state: "Punjab", number: "0172-2970271" },
  { state: "Uttar Pradesh", number: "0522-2204482" },
  { state: "Karnataka", number: "080-22213551" },
  { state: "Andhra Pradesh", number: "0866-2410011" },
  { state: "Tamil Nadu", number: "044-25384052" },
  { state: "Gujarat", number: "079-23259237" },
  { state: "Rajasthan", number: "0141-2227726" },
];

export default function SchemesPage() {
  const { t } = useLang();
  const [expandedScheme, setExpandedScheme] = useState<string | null>(null);

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
            {t("schemes.hero")}
          </h1>
          <p style={{ color: "#c8e0b0" }}>
            10+ government schemes to boost your farming income
          </p>
        </div>
      </section>

      <section
        data-ocid="schemes.list.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <div className="flex items-center justify-between mb-8">
          <h2
            className="font-bold text-2xl"
            style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
          >
            Available Schemes
          </h2>
          <VoiceReader
            text={schemes.map((s) => `${s.name}. ${s.description}`).join(". ")}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {schemes.map((scheme, idx) => {
            const details = schemeDetails[scheme.id];
            const isExpanded = expandedScheme === scheme.id;
            return (
              <div
                key={scheme.id}
                data-ocid={`schemes.scheme.item.${idx + 1}`}
                className="glass-card p-5"
              >
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-3xl flex-shrink-0">{scheme.emoji}</span>
                  <div>
                    <h3
                      className="font-bold text-lg"
                      style={{ color: "#2c2416" }}
                    >
                      {scheme.name}
                    </h3>
                    <span
                      className="inline-block px-2 py-0.5 rounded-full text-xs"
                      style={{ background: "#edf3e8", color: "#3a6b1e" }}
                    >
                      {scheme.shortName}
                    </span>
                  </div>
                </div>
                <p className="text-sm mb-3" style={{ color: "#6b6554" }}>
                  {scheme.description}
                </p>
                <div className="space-y-1.5 text-xs mb-4">
                  <p>
                    <span style={{ color: "#3a6b1e" }}>
                      {t("schemes.benefits")}:{" "}
                    </span>
                    <span style={{ color: "#6b6554" }}>{scheme.benefits}</span>
                  </p>
                  <p>
                    <span style={{ color: "#3a6b1e" }}>
                      {t("schemes.eligibility")}:{" "}
                    </span>
                    <span style={{ color: "#6b6554" }}>
                      {scheme.eligibility}
                    </span>
                  </p>
                  {details && (
                    <p>
                      <span style={{ color: "#3a6b1e" }}>Helpline: </span>
                      <a
                        href={`tel:${details.helpline.split(" / ")[0]}`}
                        className="font-medium"
                        style={{ color: "#2c2416" }}
                      >
                        {details.helpline}
                      </a>
                    </p>
                  )}
                  {details && (
                    <p>
                      <span style={{ color: "#3a6b1e" }}>Deadline: </span>
                      <span style={{ color: "#6b6554" }}>
                        {details.deadline}
                      </span>
                    </p>
                  )}
                </div>

                {details && (
                  <div className="mb-4">
                    <button
                      type="button"
                      data-ocid={`schemes.details.${idx + 1}.toggle`}
                      onClick={() =>
                        setExpandedScheme(isExpanded ? null : scheme.id)
                      }
                      className="flex items-center gap-1 text-sm font-medium"
                      style={{ color: "#3a6b1e" }}
                    >
                      {isExpanded ? (
                        <>
                          Hide Details <ChevronUp size={14} />
                        </>
                      ) : (
                        <>
                          How to Apply <ChevronDown size={14} />
                        </>
                      )}
                    </button>

                    {isExpanded && (
                      <div
                        className="mt-3 p-4 rounded-xl space-y-3"
                        style={{ background: "#f5f0e8" }}
                      >
                        <div>
                          <p
                            className="font-semibold text-xs mb-2"
                            style={{ color: "#2c2416" }}
                          >
                            Application Steps:
                          </p>
                          <ol className="space-y-1">
                            {details.steps.map((step, si) => (
                              <li
                                key={step}
                                className="text-xs flex items-start gap-2"
                                style={{ color: "#6b6554" }}
                              >
                                <span
                                  className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                                  style={{
                                    background: "#3a6b1e",
                                    color: "#ffffff",
                                  }}
                                >
                                  {si + 1}
                                </span>
                                {step}
                              </li>
                            ))}
                          </ol>
                        </div>
                        <div>
                          <p
                            className="font-semibold text-xs mb-2"
                            style={{ color: "#2c2416" }}
                          >
                            Required Documents:
                          </p>
                          <ul className="space-y-1">
                            {details.documents.map((doc) => (
                              <li
                                key={doc}
                                className="text-xs flex items-center gap-1"
                                style={{ color: "#6b6554" }}
                              >
                                <span style={{ color: "#3a6b1e" }}>•</span>{" "}
                                {doc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <a
                  data-ocid={`schemes.apply.${idx + 1}`}
                  href={scheme.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 py-2.5 px-5 rounded-xl text-sm font-medium transition-all w-fit text-white"
                  style={{ background: "#3a6b1e" }}
                >
                  <ExternalLink size={13} /> {t("schemes.applyNow")}
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* State Helplines */}
      <section
        data-ocid="schemes.helplines.section"
        className="py-12 px-4"
        style={{ background: "#f5f0e8" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-bold text-2xl mb-6"
            style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
          >
            State Agriculture Helplines
          </h2>
          <div className="glass-card overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ background: "#edf3e8" }}>
                  <th
                    className="py-3 px-5 text-left font-semibold"
                    style={{ color: "#3a6b1e" }}
                  >
                    State
                  </th>
                  <th
                    className="py-3 px-5 text-left font-semibold"
                    style={{ color: "#3a6b1e" }}
                  >
                    Helpline Number
                  </th>
                  <th
                    className="py-3 px-5 text-left font-semibold"
                    style={{ color: "#3a6b1e" }}
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {stateHelplines.map((row, i) => (
                  <tr
                    key={row.state}
                    data-ocid={`schemes.helpline.row.${i + 1}`}
                    style={{
                      borderTop: "1px solid #e2d8cc",
                      background: i % 2 === 0 ? "#ffffff" : "#faf7f2",
                    }}
                  >
                    <td
                      className="py-3 px-5 font-medium"
                      style={{ color: "#2c2416" }}
                    >
                      {row.state}
                    </td>
                    <td className="py-3 px-5" style={{ color: "#6b6554" }}>
                      {row.number}
                    </td>
                    <td className="py-3 px-5">
                      <a
                        href={`tel:${row.number}`}
                        className="text-sm font-medium flex items-center gap-1"
                        style={{ color: "#3a6b1e" }}
                      >
                        {"📞"} Call
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
