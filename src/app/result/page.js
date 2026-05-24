"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getStudent, getResults } from "@/lib/storage";

export default function ResultPage() {
  const router = useRouter();
  const [data, setData] = useState(null);

  useEffect(() => {
    const { name, cls } = getStudent();
    if (!name) { router.replace("/"); return; }
    const { urlScore, emotionScore, redFlagScore } = getResults();
    setData({ name, cls, urlScore, emotionScore, redFlagScore });
  }, [router]);

  if (!data) {
    return (
      <div style={{ minHeight: "100vh", background: "#0a0e0d", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: "#00ff88", fontFamily: "'Courier New', monospace" }}>Loading results...</p>
      </div>
    );
  }

  const total = data.urlScore + data.emotionScore + data.redFlagScore;

  function getGrade() {
    if (total >= 40) return { label: "EXPERT DETECTIVE", color: "#00ff88" };
    if (total >= 30) return { label: "SKILLED ANALYST", color: "#74c0fc" };
    if (total >= 20) return { label: "JUNIOR DETECTIVE", color: "#ffd43b" };
    return { label: "TRAINEE", color: "#ff6b6b" };
  }

  const grade = getGrade();

  const modules = [
    { name: "Correct URL Checking", score: data.urlScore, max: 15, color: "#00ff88" },
    { name: "Emotion Detector", score: data.emotionScore, max: 15, color: "#74c0fc" },
    { name: "Red Flag Hunt", score: data.redFlagScore, max: 15, color: "#ffa94d" },
  ];

  return (
    <div style={{ minHeight: "100vh", background: "#0a0e0d", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "24px" }}>

      {/* Header strip */}
      <div style={{ position: "fixed", top: 0, left: 0, right: 0, background: "#060d09", borderBottom: "1px solid #1a3020", padding: "12px 24px", display: "flex", alignItems: "center", gap: "12px", zIndex: 100 }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 2L3 6V12C3 17.25 7.08 22.17 12 23.25C16.92 22.17 21 17.25 21 12V6L12 2Z" stroke="#00ff88" strokeWidth="1.5" strokeLinejoin="round" />
          <path d="M9 12L11 14L15 10" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span style={{ color: "#00ff88", fontFamily: "'Courier New', monospace", fontWeight: 700, fontSize: "14px", letterSpacing: "2px", textShadow: "0 0 8px rgba(0,255,136,0.4)" }}>
          3 Days Cyber Bootcamp
        </span>
      </div>

      <div style={{ marginTop: "60px", width: "100%", maxWidth: "520px" }}>

        {/* Result card */}
        <div style={{
          background: "#0f1a14",
          border: "1px solid #1a4a28",
          borderRadius: "12px",
          padding: "36px",
          boxShadow: "0 0 60px rgba(0,255,136,0.08)",
          textAlign: "center",
        }}>
          {/* Icon */}
          <div style={{ marginBottom: "16px" }}>
            <svg width="52" height="52" viewBox="0 0 24 24" fill="none" style={{ margin: "0 auto" }}>
              <path d="M12 2L3 6V12C3 17.25 7.08 22.17 12 23.25C16.92 22.17 21 17.25 21 12V6L12 2Z" stroke="#00ff88" strokeWidth="1.5" strokeLinejoin="round" />
              <path d="M9 12L11 14L15 10" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <h1 style={{ color: "#00ff88", fontSize: "20px", fontFamily: "'Courier New', monospace", fontWeight: 700, letterSpacing: "2px", textShadow: "0 0 10px rgba(0,255,136,0.4)", marginBottom: "6px" }}>
            Cyber Detective Result
          </h1>
          <p style={{ color: grade.color, fontSize: "12px", fontFamily: "'Courier New', monospace", letterSpacing: "3px", marginBottom: "28px" }}>
            ── {grade.label} ──
          </p>

          {/* Student info */}
          <div style={{ background: "#0a1a10", border: "1px solid #1a3020", borderRadius: "8px", padding: "16px 20px", marginBottom: "24px", textAlign: "left" }}>
            <Row label="Name" value={data.name} />
            <Row label="Class" value={data.cls} />
          </div>

          {/* Total score */}
          <div style={{ background: "#0a1a10", border: "1px solid #00ff8833", borderRadius: "8px", padding: "20px", marginBottom: "24px" }}>
            <p style={{ color: "#4a6e55", fontSize: "11px", fontFamily: "'Courier New', monospace", letterSpacing: "2px", marginBottom: "8px" }}>TOTAL SCORE</p>
            <p style={{ color: "#00ff88", fontSize: "48px", fontFamily: "'Courier New', monospace", fontWeight: 700, lineHeight: 1, textShadow: "0 0 20px rgba(0,255,136,0.5)", margin: 0 }}>
              {total}<span style={{ fontSize: "22px", color: "#4a6e55" }}>/45</span>
            </p>
          </div>

          {/* Module breakdown */}
          <div style={{ textAlign: "left", marginBottom: "28px" }}>
            <p style={{ color: "#4a6e55", fontSize: "11px", fontFamily: "'Courier New', monospace", letterSpacing: "2px", marginBottom: "12px" }}>MODULE BREAKDOWN</p>
            {modules.map((m) => (
              <div key={m.name} style={{ marginBottom: "12px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                  <span style={{ color: "#c8d8cc", fontSize: "12px", fontFamily: "'Courier New', monospace" }}>{m.name}</span>
                  <span style={{ color: m.color, fontSize: "13px", fontFamily: "'Courier New', monospace", fontWeight: 700 }}>{m.score}/{m.max}</span>
                </div>
                <div style={{ height: "4px", background: "#1a3020", borderRadius: "2px" }}>
                  <div style={{ height: "100%", width: `${(m.score / m.max) * 100}%`, background: m.color, borderRadius: "2px", boxShadow: `0 0 6px ${m.color}66` }} />
                </div>
              </div>
            ))}
          </div>

          {/* Volunteer notice */}
          <div style={{
            background: "#0a100a",
            border: "1px dashed #00ff8855",
            borderRadius: "8px",
            padding: "14px 16px",
          }}>
            <p style={{ color: "#00ff88", fontSize: "13px", fontFamily: "'Courier New', monospace", margin: 0, lineHeight: "1.6" }}>
              📋 Please show this screen to the volunteer for verification.
            </p>
          </div>
        </div>

        <p style={{ color: "#2a4a33", fontSize: "11px", textAlign: "center", marginTop: "20px", fontFamily: "'Courier New', monospace" }}>
          3 Days Cyber Bootcamp · Cyber Detective Challenge
        </p>
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "6px 0", borderBottom: "1px solid #1a3020" }}>
      <span style={{ color: "#4a6e55", fontSize: "12px", fontFamily: "'Courier New', monospace", letterSpacing: "1px" }}>{label}:</span>
      <span style={{ color: "#c8d8cc", fontSize: "14px", fontFamily: "'Courier New', monospace", fontWeight: 600 }}>{value}</span>
    </div>
  );
}
