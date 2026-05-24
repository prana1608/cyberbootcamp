"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import { redFlagHuntQuestions } from "@/data/questions";
import { saveRedFlagModule, scoreMultiSelectModule, getStudent } from "@/lib/storage";

// Color coding for red flag option types
function flagColor(opt) {
  const o = opt.toLowerCase();
  if (o.includes("safe") || o.includes("official")) return "#74c0fc";
  if (o.includes("suspicious") || o.includes("url")) return "#ff6b6b";
  if (o.includes("payment") || o.includes("fee")) return "#ffa94d";
  if (o.includes("otp") || o.includes("password")) return "#f06595";
  if (o.includes("unknown") || o.includes("apk")) return "#cc5de8";
  if (o.includes("grammar") || o.includes("spell")) return "#ffd43b";
  if (o.includes("secret")) return "#ff8787";
  if (o.includes("too good") || o.includes("prize") || o.includes("reward")) return "#69db7c";
  if (o.includes("urgent") || o.includes("fear")) return "#ff6b6b";
  if (o.includes("generic")) return "#94d82d";
  return "#adb5bd";
}

export default function RedFlagHuntPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState({});
  const [warning, setWarning] = useState("");

  useEffect(() => {
    const { name } = getStudent();
    if (!name) router.replace("/");
  }, [router]);

  function toggleOption(qIndex, oIndex) {
    setAnswers((prev) => {
      const current = new Set(prev[qIndex] || []);
      current.has(oIndex) ? current.delete(oIndex) : current.add(oIndex);
      return { ...prev, [qIndex]: current };
    });
    setWarning("");
  }

  function handleFinish() {
    const unanswered = redFlagHuntQuestions.findIndex(
      (_, i) => !answers[i] || answers[i].size === 0
    );
    if (unanswered !== -1) {
      setWarning(`Please select at least one option for question ${unanswered + 1}.`);
      document.getElementById(`q-${unanswered}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    const serializable = {};
    Object.keys(answers).forEach((k) => { serializable[k] = [...answers[k]]; });
    const score = scoreMultiSelectModule(serializable, redFlagHuntQuestions);
    saveRedFlagModule(serializable, score);
    router.push("/result");
  }

  const answered = redFlagHuntQuestions.filter((_, i) => answers[i] && answers[i].size > 0).length;
  const total = redFlagHuntQuestions.length;

  return (
    <div style={{ minHeight: "100vh", background: "#0a0e0d" }}>
      <Header />

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "24px 16px 80px" }}>
        <p style={{ color: "#4a6e55", fontSize: "12px", fontFamily: "'Courier New', monospace", marginBottom: "4px" }}>
          root@bootcamp:~/cyber-detective
        </p>
        <h2 style={{ color: "#00ff88", fontSize: "22px", fontFamily: "'Courier New', monospace", fontWeight: 700, marginBottom: "4px", textShadow: "0 0 8px rgba(0,255,136,0.3)" }}>
          Module 3: Red Flag Hunt
        </h2>
        <p style={{ color: "#4a6e55", fontSize: "13px", fontFamily: "'Courier New', monospace", marginBottom: "28px" }}>
          Multiple select · Select all red flags in each message · {answered}/{total} answered
        </p>

        {/* Progress bar */}
        <div style={{ height: "4px", background: "#1a3020", borderRadius: "2px", marginBottom: "32px" }}>
          <div style={{ height: "100%", width: `${(answered / total) * 100}%`, background: "#00ff88", borderRadius: "2px", transition: "width 0.3s" }} />
        </div>

        {redFlagHuntQuestions.map((q, qIndex) => {
          const selected = answers[qIndex] || new Set();
          return (
            <div
              id={`q-${qIndex}`}
              key={q.id}
              className="question-card"
              style={{ border: selected.size > 0 ? "1px solid #1a4a28" : "1px solid #1a3020" }}
            >
              <p style={{ color: "#4a6e55", fontSize: "11px", fontFamily: "'Courier New', monospace", marginBottom: "8px" }}>
                Message {qIndex + 1} of {total}
              </p>

              {/* Suspicious message */}
              <div style={{
                background: "#150a0a",
                border: "1px solid #3a1a1a",
                borderRadius: "8px",
                padding: "14px 16px",
                marginBottom: "16px",
                borderLeft: "3px solid #ff4444",
              }}>
                <p style={{ color: "#ffcccc", fontSize: "14px", fontFamily: "'Courier New', monospace", lineHeight: "1.6", margin: 0 }}>
                  ⚠ &ldquo;{q.message}&rdquo;
                </p>
              </div>

              <p style={{ color: "#4a6e55", fontSize: "12px", fontFamily: "'Courier New', monospace", marginBottom: "10px" }}>
                // Select all red flags you can spot:
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {q.options.map((opt, oIndex) => {
                  const isSelected = selected.has(oIndex);
                  const color = flagColor(opt);
                  return (
                    <div
                      key={oIndex}
                      onClick={() => toggleOption(qIndex, oIndex)}
                      style={{
                        cursor: "pointer",
                        padding: "8px 16px",
                        borderRadius: "6px",
                        border: `1px solid ${isSelected ? color : "#1a3020"}`,
                        background: isSelected ? `${color}18` : "#0f1a14",
                        color: isSelected ? color : "#4a6e55",
                        fontFamily: "'Courier New', monospace",
                        fontSize: "12px",
                        fontWeight: isSelected ? 700 : 400,
                        transition: "all 0.15s",
                        boxShadow: isSelected ? `0 0 8px ${color}33` : "none",
                        userSelect: "none",
                      }}
                    >
                      {isSelected ? "🚩 " : "○ "}{opt}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {warning && <div className="warning-bar" style={{ marginBottom: "20px" }}>⚠ {warning}</div>}

        <div style={{ textAlign: "center", marginTop: "12px" }}>
          <button className="btn-primary" onClick={handleFinish}>
            Check Score →
          </button>
          <p style={{ color: "#2a4a33", fontSize: "12px", marginTop: "12px", fontFamily: "'Courier New', monospace" }}>
            {total - answered} question{total - answered !== 1 ? "s" : ""} remaining
          </p>
        </div>
      </div>
    </div>
  );
}
