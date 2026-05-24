"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { saveStudent, resetQuizData } from "@/lib/storage";

export default function LoginPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [cls, setCls] = useState("");
  const [error, setError] = useState("");

  function handleStart() {
    if (!name.trim() || !cls.trim()) {
      setError("Please fill in both your name and class before starting.");
      return;
    }
    saveStudent(name.trim(), cls.trim());
    resetQuizData();
    router.push("/correct-url");
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        background: "#0a0e0d",
      }}
    >
      {/* Logo / header */}
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" style={{ margin: "0 auto 16px" }}>
          <path
            d="M12 2L3 6V12C3 17.25 7.08 22.17 12 23.25C16.92 22.17 21 17.25 21 12V6L12 2Z"
            stroke="#00ff88"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path d="M9 12L11 14L15 10" stroke="#00ff88" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p
          style={{
            color: "#00ff88",
            fontSize: "11px",
            letterSpacing: "4px",
            fontFamily: "'Courier New', monospace",
            marginBottom: "8px",
            textShadow: "0 0 6px rgba(0,255,136,0.4)",
          }}
        >
          3 DAYS CYBER BOOTCAMP
        </p>
        <h1
          style={{
            color: "#e0ffe8",
            fontSize: "clamp(24px, 5vw, 38px)",
            fontFamily: "'Courier New', monospace",
            fontWeight: 700,
            margin: 0,
            letterSpacing: "1px",
          }}
        >
          Cyber Detective
          <span style={{ color: "#00ff88" }}> Challenge</span>
        </h1>
        <p
          style={{
            color: "#4a6e55",
            fontSize: "13px",
            marginTop: "10px",
            fontFamily: "'Courier New', monospace",
          }}
        >
          root@bootcamp:~/cyber-detective$&nbsp;
          <span style={{ color: "#00ff88", animation: "blink 1s step-end infinite" }}>_</span>
        </p>
      </div>

      {/* Login card */}
      <div
        style={{
          background: "#0f1a14",
          border: "1px solid #1a3020",
          borderRadius: "10px",
          padding: "36px",
          width: "100%",
          maxWidth: "420px",
          boxShadow: "0 0 40px rgba(0,255,136,0.05)",
        }}
      >
        <p
          style={{
            color: "#4a6e55",
            fontSize: "12px",
            fontFamily: "'Courier New', monospace",
            marginBottom: "24px",
          }}
        >
          // Enter your details to begin
        </p>

        <div style={{ marginBottom: "18px" }}>
          <label
            style={{
              display: "block",
              color: "#00ff88",
              fontSize: "12px",
              letterSpacing: "2px",
              marginBottom: "8px",
              fontFamily: "'Courier New', monospace",
            }}
          >
            FULL NAME
          </label>
          <input
            type="text"
            placeholder="e.g. Priya Sharma"
            value={name}
            onChange={(e) => { setName(e.target.value); setError(""); }}
            onKeyDown={(e) => e.key === "Enter" && handleStart()}
          />
        </div>

        <div style={{ marginBottom: "28px" }}>
          <label
            style={{
              display: "block",
              color: "#00ff88",
              fontSize: "12px",
              letterSpacing: "2px",
              marginBottom: "8px",
              fontFamily: "'Courier New', monospace",
            }}
          >
            CLASS
          </label>
          <input
            type="text"
            placeholder="e.g. 9-A"
            value={cls}
            onChange={(e) => { setCls(e.target.value); setError(""); }}
            onKeyDown={(e) => e.key === "Enter" && handleStart()}
          />
        </div>

        {error && (
          <div className="warning-bar" style={{ marginBottom: "20px" }}>
            ⚠ {error}
          </div>
        )}

        <button className="btn-primary" onClick={handleStart} style={{ width: "100%" }}>
          START CHALLENGE →
        </button>

        <p
          style={{
            color: "#2a4a33",
            fontSize: "11px",
            textAlign: "center",
            marginTop: "20px",
            fontFamily: "'Courier New', monospace",
            lineHeight: "1.6",
          }}
        >
          45 questions across 3 modules · No email or password required
        </p>
      </div>

      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
      `}</style>
    </div>
  );
}
