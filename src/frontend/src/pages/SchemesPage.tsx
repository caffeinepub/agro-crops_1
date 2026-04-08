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

      {/* Application Process Guide */}
      <section
        data-ocid="schemes.application_guide.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <h2
          className="font-bold text-2xl md:text-3xl mb-3"
          style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
        >
          How to Apply — Step by Step
        </h2>
        <p className="mb-8 text-sm" style={{ color: "#6b6554" }}>
          Follow this 6-step guide to successfully apply for any government
          agriculture scheme
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              step: "1",
              emoji: "🔍",
              title: "Discover the Scheme",
              desc: "Visit the scheme portal or your nearest Common Service Centre (CSC). Check eligibility criteria carefully before proceeding.",
            },
            {
              step: "2",
              emoji: "📋",
              title: "Gather Documents",
              desc: "Collect Aadhaar, bank passbook, land records (7/12 Utara), passport photo, and any crop-specific certificates.",
            },
            {
              step: "3",
              emoji: "📝",
              title: "Fill Application Form",
              desc: "Complete the application form online (portal) or offline (district agriculture office). Double-check all details.",
            },
            {
              step: "4",
              emoji: "📤",
              title: "Submit & Get Receipt",
              desc: "Submit form with documents. Keep the acknowledgment receipt with reference number for future follow-up.",
            },
            {
              step: "5",
              emoji: "⏳",
              title: "Verification Process",
              desc: "Field officer will verify your land and documents within 15-30 days. Be present for the site visit if required.",
            },
            {
              step: "6",
              emoji: "🏦",
              title: "Receive Benefits",
              desc: "Scheme benefit (cash/subsidy/goods) transferred directly to your linked bank account (DBT) within 45-90 days.",
            },
          ].map((step, i) => (
            <div
              key={step.step}
              data-ocid={`schemes.process_step.item.${i + 1}`}
              className="glass-card p-5"
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                  style={{ background: "#3a6b1e" }}
                >
                  {step.step}
                </div>
                <span className="text-2xl">{step.emoji}</span>
              </div>
              <h3 className="font-bold mb-2" style={{ color: "#2c2416" }}>
                {step.title}
              </h3>
              <p className="text-sm" style={{ color: "#6b6554" }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Documents Checklist */}
      <section
        data-ocid="schemes.documents.section"
        className="py-12 px-4"
        style={{ background: "#f5f0e8" }}
      >
        <div className="max-w-7xl mx-auto">
          <h2
            className="font-bold text-2xl md:text-3xl mb-3"
            style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
          >
            Documents Checklist
          </h2>
          <p className="mb-8 text-sm" style={{ color: "#6b6554" }}>
            Commonly required documents across most government agriculture
            schemes
          </p>
          <div className="glass-card overflow-x-auto">
            <table className="w-full text-sm min-w-[600px]">
              <thead>
                <tr style={{ background: "#edf3e8" }}>
                  {["Document", "Why Needed", "Where to Get", "Common For"].map(
                    (h) => (
                      <th
                        key={h}
                        className="py-3 px-4 text-left font-semibold"
                        style={{ color: "#3a6b1e" }}
                      >
                        {h}
                      </th>
                    ),
                  )}
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    doc: "Aadhaar Card",
                    why: "Identity proof & DBT linkage",
                    where: "UIDAI / Aadhaar enrolment centre",
                    forSchemes: "All schemes",
                  },
                  {
                    doc: "Land Records (7/12 Utara)",
                    why: "Proof of land ownership/cultivation",
                    where: "Talathi office / Revenue department",
                    forSchemes: "PM-KISAN, KCC, PMFBY, PMKSY",
                  },
                  {
                    doc: "Bank Passbook (with IFSC)",
                    why: "Direct bank transfer of benefits",
                    where: "Your bank branch",
                    forSchemes: "All cash transfer schemes",
                  },
                  {
                    doc: "Sowing Certificate",
                    why: "Proof of crop grown",
                    where: "Village level worker (VLW) / Patwari",
                    forSchemes: "PMFBY (crop insurance)",
                  },
                  {
                    doc: "PAN Card",
                    why: "Tax identity for loans",
                    where: "NSDL / UTIITSL online",
                    forSchemes: "KCC loan, large subsidies",
                  },
                  {
                    doc: "Passport Photo (x2)",
                    why: "Identity verification",
                    where: "Nearby photo studio",
                    forSchemes: "KCC, NABARD loans",
                  },
                  {
                    doc: "Soil Health Card",
                    why: "Organic scheme eligibility",
                    where: "KVK or Agriculture Department",
                    forSchemes: "PKVY, NMSA organic schemes",
                  },
                  {
                    doc: "Caste Certificate",
                    why: "SC/ST extra subsidy eligibility",
                    where: "Tehsil / Revenue office",
                    forSchemes: "SC/ST special subsidies",
                  },
                ].map((row, i) => (
                  <tr
                    key={row.doc}
                    data-ocid={`schemes.document.row.${i + 1}`}
                    style={{
                      borderTop: "1px solid #e2d8cc",
                      background: i % 2 === 0 ? "#ffffff" : "#faf7f2",
                    }}
                  >
                    <td
                      className="py-3 px-4 font-semibold"
                      style={{ color: "#2c2416" }}
                    >
                      {row.doc}
                    </td>
                    <td
                      className="py-3 px-4 text-xs"
                      style={{ color: "#6b6554" }}
                    >
                      {row.why}
                    </td>
                    <td
                      className="py-3 px-4 text-xs"
                      style={{ color: "#6b6554" }}
                    >
                      {row.where}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{ background: "#edf3e8", color: "#3a6b1e" }}
                      >
                        {row.forSchemes}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Grievance Redressal */}
      <section
        data-ocid="schemes.grievance.section"
        className="py-12 px-4 max-w-7xl mx-auto"
      >
        <h2
          className="font-bold text-2xl md:text-3xl mb-3"
          style={{ color: "#2c2416", fontFamily: "Fraunces, Georgia, serif" }}
        >
          Grievance Redressal
        </h2>
        <p className="mb-8 text-sm" style={{ color: "#6b6554" }}>
          If your scheme benefit is denied or delayed, here is how to raise a
          complaint
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              emoji: "📞",
              title: "PM Kisan Helpline",
              info: "155261 / 1800-115-526",
              desc: "For PM-KISAN related complaints — payment delays, incorrect data, or registration issues.",
              color: "#1565c0",
            },
            {
              emoji: "🌾",
              title: "Kisan Call Centre",
              info: "1800-180-1551",
              desc: "Free 24x7 toll-free helpline for all agriculture queries including scheme information and complaints.",
              color: "#2e7d32",
            },
            {
              emoji: "🛡️",
              title: "PMFBY Grievance",
              info: "1800-200-7710",
              desc: "For crop insurance claim rejections or delays. You can also write to PMFBY Grievance Cell, Ministry of Agriculture.",
              color: "#6a1b9a",
            },
            {
              emoji: "🏛️",
              title: "CPGRAMS Portal",
              info: "pgportal.gov.in",
              desc: "File formal complaints about any central government scheme through the Centralized Public Grievance Redress System.",
              color: "#b45309",
            },
          ].map((card, i) => (
            <div
              key={card.title}
              data-ocid={`schemes.grievance.item.${i + 1}`}
              className="glass-card p-5"
            >
              <div className="text-3xl mb-3">{card.emoji}</div>
              <h3 className="font-bold mb-1" style={{ color: "#2c2416" }}>
                {card.title}
              </h3>
              <p
                className="font-semibold text-base mb-2"
                style={{ color: card.color }}
              >
                {card.info}
              </p>
              <p className="text-sm" style={{ color: "#6b6554" }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
        <div
          className="mt-8 glass-card p-5"
          style={{ background: "#edf3e8", border: "1px solid #b5c9a0" }}
        >
          <h3 className="font-bold mb-2" style={{ color: "#2c2416" }}>
            ⚡ Quick Grievance Steps
          </h3>
          <ol className="space-y-2">
            {[
              "First contact your Talathi / Patwari / Village Level Worker (VLW) for local resolution",
              "If unresolved in 7 days, escalate to Block Development Officer (BDO) or Tehsildar",
              "If still unresolved, call the scheme helpline number with your application reference number",
              "For formal complaints, file on CPGRAMS portal (pgportal.gov.in) — response within 30 days",
              "Right to Information (RTI) can be filed for scheme status information if complaint is unanswered",
            ].map((step, si) => (
              <li
                key={step}
                className="text-sm flex items-start gap-2"
                style={{ color: "#6b6554" }}
              >
                <span
                  className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                  style={{ background: "#3a6b1e", color: "#ffffff" }}
                >
                  {si + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
