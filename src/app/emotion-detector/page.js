"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import { emotionDetectorQuestions } from "@/data/questions";
import { saveEmotionModule, scoreMultiSelectModule, getStudent } from "@/lib/storage";

export default function EmotionDetectorPage() {
  const router = useRouter();
  // answers: { [questionIndex]: Set of selected option indices }
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

  function handleNext() {
    // Check all questions have at least 1 selection
    const unanswered = emotionDetectorQuestions.findIndex(
      (_, i) => !answers[i] || answers[i].size === 0
    );
    if (unanswered !== -1) {
      setWarning(`Please select at least one option for question ${unanswered + 1}.`);
      document.getElementById(`q-${unanswered}`)?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    // Convert Sets to arrays for storage
    const serializable = {};
    Object.keys(answers).forEach((k) => { serializable[k] = [...answers[k]]; });
    const score = scoreMultiSelectModule(serializable, emotionDetectorQuestions);
    saveEmotionModule(serializable, score);
    router.push("/red-flag-hunt");
  }

  const answered = emotionDetectorQuestions.filter((_, i) => answers[i] && answers[i].size > 0).length;
  const total = emotionDetectorQuestions.length;

  const EMOTION_COLORS = {
    Fear: "#ff6b6b",
    Urgency: "#ffa94d",
    Trust: "#74c0fc",
    Greed: "#ffd43b",
    Curiosity: "#cc5de8",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0a0e0d" }}>
      <Header />

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "24px 16px 80px" }}>
        <p style={{ color: "#4a6e55", fontSize: "12px", fontFamily: "'Courier New', monospace", marginBottom: "4px" }}>
          root@bootcamp:~/cyber-detective
        </p>
        <h2 style={{ color: "#00ff88", fontSize: "22px", fontFamily: "'Courier New', monospace", fontWeight: 700, marginBottom: "4px", textShadow: "0 0 8px rgba(0,255,136,0.3)" }}>
          Module 2: Emotion Detector
        </h2>
        <p style={{ color: "#4a6e55", fontSize: "13px", fontFamily: "'Courier New', monospace", marginBottom: "8px" }}>
          Multiple select · Select all psychological triggers used · {answered}/{total} answered
        </p>

        {/* Legend */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "28px" }}>
          {["Fear", "Urgency", "Trust", "Greed", "Curiosity"].map((e) => (
            <span key={e} style={{ background: "#0f1a14", border: `1px solid ${EMOTION_COLORS[e]}33`, color: EMOTION_COLORS[e], borderRadius: "4px", padding: "3px 10px", fontSize: "11px", fontFamily: "'Courier New', monospace" }}>
              {e}
            </span>
          ))}
        </div>

        {/* Progress bar */}
        <div style={{ height: "4px", background: "#1a3020", borderRadius: "2px", marginBottom: "32px" }}>
          <div style={{ height: "100%", width: `${(answered / total) * 100}%`, background: "#00ff88", borderRadius: "2px", transition: "width 0.3s" }} />
        </div>

        {emotionDetectorQuestions.map((q, qIndex) => {
          const selected = answers[qIndex] || new Set();
          return (
            <div
              id={`q-${qIndex}`}
              key={q.id}
              className="question-card"
              style={{ border: selected.size > 0 ? "1px solid #1a4a28" : "1px solid #1a3020" }}
            >
              <p style={{ color: "#4a6e55", fontSize: "11px", fontFamily: "'Courier New', monospace", marginBottom: "8px" }}>
                Question {qIndex + 1} of {total}
              </p>

              {/* Message bubble */}
              <div style={{ background: "#0a1a10", border: "1px solid #1a4a28", borderRadius: "8px", padding: "14px 16px", marginBottom: "16px", borderLeft: "3px solid #00ff88" }}>
                <p style={{ color: "#e0ffe8", fontSize: "15px", fontFamily: "'Courier New', monospace", lineHeight: "1.6", margin: 0 }}>
                  💬 &ldquo;{q.message}&rdquo;
                </p>
              </div>

              <p style={{ color: "#4a6e55", fontSize: "12px", fontFamily: "'Courier New', monospace", marginBottom: "10px" }}>
                // Select all psychological triggers used in this message:
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {q.options.map((opt, oIndex) => {
                  const isSelected = selected.has(oIndex);
                  const color = EMOTION_COLORS[opt] || "#00ff88";
                  return (
                    <div
                      key={oIndex}
                      onClick={() => toggleOption(qIndex, oIndex)}
                      style={{
                        cursor: "pointer",
                        padding: "8px 18px",
                        borderRadius: "6px",
                        border: `1px solid ${isSelected ? color : "#1a3020"}`,
                        background: isSelected ? `${color}18` : "#0f1a14",
                        color: isSelected ? color : "#4a6e55",
                        fontFamily: "'Courier New', monospace",
                        fontSize: "13px",
                        fontWeight: isSelected ? 700 : 400,
                        transition: "all 0.15s",
                        boxShadow: isSelected ? `0 0 8px ${color}33` : "none",
                        userSelect: "none",
                      }}
                    >
                      {isSelected ? "✓ " : ""}{opt}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}

        {warning && <div className="warning-bar" style={{ marginBottom: "20px" }}>⚠ {warning}</div>}

        <div style={{ textAlign: "center", marginTop: "12px" }}>
          <button className="btn-primary" onClick={handleNext}>
            Next Topic: Red Flag Hunt →
          </button>
          <p style={{ color: "#2a4a33", fontSize: "12px", marginTop: "12px", fontFamily: "'Courier New', monospace" }}>
            {total - answered} question{total - answered !== 1 ? "s" : ""} remaining
          </p>
        </div>
      </div>
    </div>
  );
}
